import styled from "styled-components";
import { Card } from "antd";

export const StyleNameProduct = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  color: rgb(56, 56, 61);
  margin-bottom: 8px;
`;

export const WrapperReportText = styled.div`
  font-size: 12px;
  color: rgb(128, 128, 137);
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const WrapperPriceText = styled.div`
  font-size: 18px;
  color: #ff424e;
  display: flex;
  align-items: center;
  font-weight: 600;
`;

export const WrapperCardStyle = styled(Card)`
  width: 200px;
  & img {
    height: 200px;
    width: 200px;
  }
`;
