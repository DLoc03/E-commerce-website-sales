import { Row } from "antd";
import styled from "styled-components";

export const WrapperHeader = styled(Row)`
  padding: 16px 120px;
  background-color: rgb(26, 148, 255);
  align-items: center;
  gap: 16px;
  flex-wrap: nowrap;
`;

export const WrapperTextHeader = styled.span`
  cursor: pointer;
`;

export const WrapperAccountHeader = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  justify-content: center;
  cursor: pointer;
  flex-direction: column;
`;

export const WrapperCartHeader = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  justify-content: center;
  cursor: pointer;
  flex-direction: column;
`;
