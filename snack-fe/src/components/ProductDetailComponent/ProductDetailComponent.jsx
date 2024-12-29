import React from 'react'
import {Row, Col, Image, Button} from "antd"
import AvtImage from "../.././assets/images/productex.webp"
import ImageSmall from "../.././assets/images/productexSmall.webp"
import { WrapperBtnShopping, WrapperInputNumber, WrapperQualityProduct, WrapperAddressProduct, WrapperTextPriceProduct, WrapperPriceProduct, WrapperStyleImageSmall, WrapperColImageSmall, WrapperNameProduct, WrapperStyleTextSell } from "./style"
import { StarFilled, PlusOutlined, MinusOutlined } from '@ant-design/icons'

const ProductDetailComponent = () => {
    const onChange = () => {}
  return (
    <Row style={{padding: '16px', backgroundColor: 'white'}}>
        <Col span={10}>
            <Image src = {AvtImage} alt="image product" preview={false} style={{border: '1px solid #ccc', borderRadius: '2px'}}/>
            <div>
                <Row style={{paddingTop: '10px', display: 'flex', justifyContent: 'space-between'}}>
                    <WrapperColImageSmall span={4}><WrapperStyleImageSmall src={ImageSmall} alt='image small' preview={false}/></WrapperColImageSmall>
                    <WrapperColImageSmall span={4}><WrapperStyleImageSmall src={ImageSmall} alt='image small' preview={false}/></WrapperColImageSmall>
                    <WrapperColImageSmall span={4}><WrapperStyleImageSmall src={ImageSmall} alt='image small' preview={false}/></WrapperColImageSmall>
                    <WrapperColImageSmall span={4}><WrapperStyleImageSmall src={ImageSmall} alt='image small' preview={false}/></WrapperColImageSmall>
                    <WrapperColImageSmall span={4}><WrapperStyleImageSmall src={ImageSmall} alt='image small' preview={false}/></WrapperColImageSmall>
                </Row>
            </div>
        </Col>
        <Col span={14} style={{padding: '0 24px'}}>
            <WrapperNameProduct>Boxset Harry Potter - Tiếng Việt (Trọn Bộ 7 Tập)</WrapperNameProduct>
                <div>
                    <StarFilled style={{fontSize: '20px', color: 'rgb(253, 216, 54)', marginLeft: '2px'}} />
                    <StarFilled style={{fontSize: '20px', color: 'rgb(253, 216, 54)', marginLeft: '2px'}} />
                    <StarFilled style={{fontSize: '20px', color: 'rgb(253, 216, 54)', marginLeft: '2px'}} />
                    <WrapperStyleTextSell> | Đã bán 2003</WrapperStyleTextSell>
                </div>
                <WrapperPriceProduct>
                    <WrapperTextPriceProduct>
                        18.000
                    </WrapperTextPriceProduct>
                </WrapperPriceProduct>
                <div>
                    <label style={{fontSize: '18px', fontWeight: '500'}}>Thông tin vận chuyển</label>
                    <WrapperAddressProduct>
                        <span>Giao đến </span>
                        <span className='address'>TP. Đà Lạt, P. 2, Lâm Đồng</span>
                        <span> - </span>
                        <span className='change-address'>Đổi</span>
                    </WrapperAddressProduct>
                </div>
                <div style={{marginTop: '36px', borderTop: '1px solid #ccc'}}>
                    <div style={{fontSize: '16px', marginTop: '12px', marginBottom: '6px', fontWeight: '500'}}>Số lượng</div>
                    <WrapperQualityProduct>
                        <Button><PlusOutlined  /></Button>
                        <WrapperInputNumber min={1} max={100000} defaultValue={1} onChange={onChange} />
                        <Button><MinusOutlined /></Button>
                    </WrapperQualityProduct>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', borderTop: '1px solid #ccc', marginTop: '20px'}}>
                    <WrapperBtnShopping style={{backgroundColor: 'rgb(255, 66, 78)', color: 'white'}}>Mua ngay</WrapperBtnShopping>
                    <WrapperBtnShopping style={{backgroundColor: '#f5f5f5', color: 'black'}}>Thêm vào giỏ hàng</WrapperBtnShopping>
                </div>
        </Col>
    </Row>
  )
}

export default ProductDetailComponent