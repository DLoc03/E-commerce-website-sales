import styled from "styled-components";
import { Col, Image, InputNumber, Button } from "antd";
import { hover } from "@testing-library/user-event/dist/hover";

export const WrapperStyleImageSmall = styled(Image)`
  height: 64px;
  width: 64px;
`;

export const WrapperColImageSmall = styled(Col)`
  flex-basics: unset;
  display: flex;
`;

export const WrapperNameProduct = styled.h1`
  font-size: 24px;
  font-weight: 400;
`;

export const WrapperStyleTextSell = styled.span`
  font-size: 16px;
  line-height: 24px;
  color: rgb(120, 120, 120);
`;

export const WrapperPriceProduct = styled.div`
  backgroundcolor: rgb(250, 250, 250);
  border-radius: 4px;
`;

export const WrapperTextPriceProduct = styled.h1`
  font-size: 32px;
  line-height: 40px;
  margin-right: 8px;
  font-weight: 500;
  padding: 10px;
  margin-top: 10px;
  color: rgb(255, 66, 78);
`;

export const WrapperAddressProduct = styled.div`
    span.address {
        text-decoration: underline;
        font-size: 16px;
        line-height: 24px
        font-weight: bold;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
        span.change-address {
        text-decoration: underline;
        font-size: 16px;
        line-height: 24px
        font-weight: bold;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: rgb(26, 148, 255);
        cursor: pointer;
    }
`;

export const WrapperQualityProduct = styled.div`
  display: flex;
  gap: 4px;
  align-item: center;
  width: 100%;
`;

export const WrapperInputNumber = styled(InputNumber)`
  width: 60px;
`;

export const WrapperQualityProductBtn = styled.span`
  font-size: 12px;
  margin: auto;
`;

export const WrapperBtnShopping = styled(Button)`
  border-radius: 2px;
  width: 49%;
  height: 48px;
  margin-top: 40px;
  font-size: 14px;
  font-weight: 500;
  border: 0px;

  &:first-child {
    background-color: rgb(255, 66, 78);
    color: white;
  }

  &:first-child:hover {
    background-color: rgb(200, 40, 50);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  &:nth-child(2) {
    background-color: #f5f5f5;
    color: black;
  }

  &:nth-child(2):hover {
    background-color: #ddd;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;
