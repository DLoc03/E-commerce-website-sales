import styled from "styled-components";
import { Button } from "antd";

export const WrapperContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const WrapperBtnSignIn = styled(Button)`
  border-radius: 4px;
  background-color: rgb(255, 66, 78);
  color: white;
  font-weight: 600;
  height: 40px;
  width: 100%;
`;

export const WrapperTextLight = styled.p`
  color: rgb(26, 148, 255);
  text-decoration: underline;
  cursor: pointer;
`;
