import React from 'react';
import { Col, Row, Image } from 'antd';
import { WrapperFooter, WrapperTextFooter, WrapperLinksFooter } from './style';
import Logo from "../.././assets/images/logo1.png"

const Footer = () => {
    return (
        <WrapperFooter>
            <Row justify="space-between" style={{ padding: '20px 0' }}>
                <Col span={6} style={{ textAlign: 'left' }}>
                    <WrapperTextFooter>Thông tin</WrapperTextFooter>
                    <WrapperLinksFooter>
                        <a href="#about">Giới thiệu</a>
                        <a href="#contact">Liên hệ</a>
                        <a href="#privacy">Chính sách bảo mật</a>
                    </WrapperLinksFooter>
                </Col>
                <Col span={6} style={{ textAlign: 'left' }}>
                    <WrapperTextFooter>Hỗ trợ</WrapperTextFooter>
                    <WrapperLinksFooter>
                        <a href="#faq">Câu hỏi thường gặp</a>
                        <a href="#returns">Đổi trả hàng</a>
                        <a href="#shipping">Giao hàng</a>
                    </WrapperLinksFooter>
                </Col>
                <Col span={6} style={{ textAlign: 'left' }}>
                    <WrapperTextFooter>Theo dõi chúng tôi</WrapperTextFooter>
                    <WrapperLinksFooter>
                        <a href="#facebook">Facebook</a>
                        <a href="#instagram">Instagram</a>
                        <a href="#twitter">Twitter</a>
                    </WrapperLinksFooter>
                </Col>
                <Col span={6} style={{ textAlign: 'center' }}>
                    <WrapperTextFooter>Bản quyền © 2024</WrapperTextFooter>
                    <Image src={Logo} alt='logo' preview={false}/>
                </Col>
            </Row>
        </WrapperFooter>
    );
}

export default Footer;
