import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './Button';

storiesOf('Primitives', module).add('Button', () => <Button>Click Here!</Button>);
