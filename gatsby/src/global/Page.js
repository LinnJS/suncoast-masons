import styled from 'styled-components';
import devices from '../utils/devices';

const Page = styled.div`
  display: flex;
  width: 80%;
  background-color: #fff;
  min-height: 90vh;
  padding: 20px;
  flex-direction: column;
  align-items: flex-start;
  margin: 20px 0;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px,
    rgba(0, 0, 0, 0.12) 0px 1px 8px 0;

  @media (${devices.laptop}) {
    width: 80%;
  }
`;

export default Page;
