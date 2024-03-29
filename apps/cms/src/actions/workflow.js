import React, { useMemo, useState } from "react";
import PropTypes from "prop-types";
// eslint-disable-next-line import/no-unresolved
import client from "part:@sanity/base/client";
// eslint-disable-next-line import/no-unresolved
import { PublishAction } from "part:@sanity/base/document-actions";

import { icons } from "../structure/article";

// Get the latest workflow status for a draft revision
const workflowStatus = async (draft) => {
  if (!draft) return null;

  return client
    .fetch("* [_id == $id][0]{_rev}", { id: draft._id })
    .then((doc) => {
      console.log("draft", draft, doc);
      return client.fetch(
        " *[_type == 'workflow.status' && draft == $id && revision == $revision] | order(_updatedAt desc)[0]",
        {
          id: draft._id,
          revision: doc._rev,
        }
      );
    });
};

const createReviewStatus = async (draft, status, reason) => {
  const doc = await client.create({
    _type: "workflow.status",
    draft: draft._id,
    revision: draft._rev,
    status,
    reason,
  });
  return doc;
};

export const PublishApprovedAction = (props) => {
  return PublishAction(props);
};

export const RejectAction = ({ id, type, published, draft, onComplete }) => {
  const [reason, setReason] = useState("");
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [status, setStatus] = useState(null);

  useMemo(async () => {
    const res = await workflowStatus(draft);
    setStatus(res);
  }, [draft]);

  if (!draft) return null;
  if (!status || status.status !== "review") return null;

  return {
    icon: icons.RejectedIcon,
    label: "Reject",
    onHandle: () => {
      setDialogOpen(true);
    },
    dialog: isDialogOpen && {
      type: "modal",
      content: (
        <>
          <h2>Reason</h2>
          <input
            type="text"
            onChange={(event) => setReason(event.target.value)}
          />
          <button
            onClick={async () => {
              await createReviewStatus(draft, "rejected", reason);
              setDialogOpen(false);
              onComplete();
            }}
          >
            Done
          </button>
        </>
      ),
    },
  };

  /*

  return {
    label: 'Reject',
    onHandle: () => {
      patch.execute([
      ])
      commit.execute()
      onComplete()
    }
  }
  */
};

RejectAction.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  published: PropTypes.object,
  draft: PropTypes.object,
  onComplete: PropTypes.func,
};

export const Approve = ({ id, type, published, draft, onComplete }) => {
  const [status, setStatus] = useState(null);

  useMemo(async () => {
    const res = await workflowStatus(draft);
    setStatus(res);
  }, [draft]);

  if (!draft) return null;
  if (!status || status.status !== "review") return null;

  return {
    label: "Approve",
    onHandle: async () => {
      await createReviewStatus(draft, "approved");
      onComplete();
    },
  };
};

Approve.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  published: PropTypes.object,
  draft: PropTypes.object,
  onComplete: PropTypes.func,
};

export const RequestReview = ({ id, type, draft, onComplete }) => {
  const [status, setStatus] = useState(null);

  useMemo(async () => {
    const res = await workflowStatus(draft);
    setStatus(res);
  }, [draft]);

  if (!draft) return null;
  if (status && ["review", "approved"].includes(status.status)) return null;

  return {
    disabled: !draft,
    label: "Request review",
    onHandle: async () => {
      await createReviewStatus(draft, "review");
      onComplete();
    },
  };
};

RequestReview.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  draft: PropTypes.object,
  onComplete: PropTypes.func,
};

// Badges
export const WorkflowBadge = ({ draft }) => {
  const [status, setStatus] = useState(null);

  useMemo(async () => {
    const res = await workflowStatus(draft);
    setStatus(res);
  }, [draft]);

  if (!draft) return null;
  if (!status) return null;

  switch (status.status) {
    case "rejected":
      return {
        label: "Rejected",
        title: "This draft has been rejected and need more editing",
        color: "danger",
      };
    case "review":
      return {
        label: "Waiting review",
        title: "This draft is waiting for someone to start a review",
        color: "warning",
      };
    case "approved":
      return {
        label: "Approved",
        title: "This draft is ready to be published",
        color: "success",
      };
    default:
      return null;
  }
};

WorkflowBadge.propTypes = {
  draft: PropTypes.object,
};
