import styled from "styled-components";
import { Layout } from "antd";

const { Footer } = Layout;

export const WrapperFooter = styled(Footer)`
  background-color: rgb(26, 148, 255);
  text-align: center;
  color: white;
`;

export const WrapperTextFooter = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
  color: white;
`;

export const WrapperLinksFooter = styled.div`
  a {
    display: block;
    margin-bottom: 5px;
    color: white;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;
