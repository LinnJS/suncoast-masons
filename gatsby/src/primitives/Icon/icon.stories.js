import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';

import Icon from './icon';
import IconSet from './iconSet';

const ICONS = Object.keys(IconSet);

const Container = styled.div`
  height: 100%;
  overflow: auto;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 250px;
  justify-content: space-between;
`;

const Label = styled.div`
  display: flex;
  padding: 10px 0;
`;

storiesOf('Primitives/Icon', module).add('Default', () => {
  return (
    <Container>
      {ICONS.map((icon, idx) => (
        <Row key={idx}>
          <Label>{icon}</Label>
          <Icon name={icon} size={30} color="black" />
        </Row>
      ))}
    </Container>
  );
});
