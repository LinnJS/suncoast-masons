// external imports
import React from 'react';
import styled from 'styled-components';

// internal imports
import devices from 'utils/devices';
import masonicLinks from '../../content/masonicLinks';

const SideBar = () => {
  return (
    <SideBarContainer>
      <section>
        <h3>Masonic Links</h3>

        <ul>
          {masonicLinks.map((masonicLink, idx) => {
            return (
              <li key={`masonic-link-${idx}`}>
                <a href={masonicLink.link} target="=_blank" rel="noreferrer noopener">
                  {masonicLink.label}
                </a>
              </li>
            );
          })}
        </ul>
      </section>
    </SideBarContainer>
  );
};

const SideBarContainer = styled.aside`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 230px;

  ul {
    padding-left: 20px;
  }

  @media (${devices.tablet}) {
    margin-left: 20px;
  }
`;

export default SideBar;
