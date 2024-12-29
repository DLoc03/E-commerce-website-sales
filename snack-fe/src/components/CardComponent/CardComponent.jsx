import React from 'react'
import { StyleNameProduct, WrapperReportText, WrapperPriceText, WrapperCardStyle } from './style';
import {StarFilled} from '@ant-design/icons'
import { useNavigate } from 'react-router-dom';
import productImg from "../.././assets/images/productex.webp"

const CardComponent = () => {
  const navigate = useNavigate();
  const handleNavigateProductDetail= () => {
    navigate('/product-detail')
}
  return (
    <WrapperCardStyle
      onClick={handleNavigateProductDetail}
      hoverable
      style={{ width: 240}}
      bodyStyle={{padding: '10px'}}
      cover={<img alt="example" src={productImg} />}
      >
      <StyleNameProduct>Boxset Harry Potter - Tiếng Việt (Trọn Bộ 7 Tập)</StyleNameProduct>
      <WrapperReportText>
        <span>2.5 <StarFilled style={{fontSize: '12px', color: 'yellow', marginLeft: '2px'}} /></span>
        <span> | Đã bán 2003</span>
      </WrapperReportText>
      <WrapperPriceText>18.000</WrapperPriceText>
    </WrapperCardStyle>
  )
}

export default CardComponent;