import React from 'react';
import styled from 'styled-components';
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
                <a href={masonicLink.link}>{masonicLink.link}</a>
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 230px;
`;

export default SideBar;
