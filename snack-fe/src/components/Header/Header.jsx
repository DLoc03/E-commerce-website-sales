import React from 'react'
import { Col } from 'antd';
import { WrapperHeader, WrapperTextHeader, WrapperAccountHeader, WrapperCartHeader } from './style';
import { Input } from 'antd';
import { UserOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import ButtonInputSearch from "../ButtonInputSearch/ButtonInputSearch"
import { useNavigate } from 'react-router-dom';
import Logo from "../.././assets/images/logo1.png"
import {Image} from "antd"

const Header = () => {
    const { Search } = Input;
    const navigate = useNavigate();
    const handleNavigateLogin = () => {
        navigate('/sign-in')
    }
    const handleNavigateHome = () => {
        navigate('/')
    }
    return (
        <WrapperHeader>
            <Col span={5}>
                <WrapperTextHeader onClick={handleNavigateHome}>
                    <Image src={Logo} alt='logo' preview={false}/>
                </WrapperTextHeader></Col>
            <Col span={12}>
            <ButtonInputSearch
                size = 'large' placeholder = 'Tìm kiếm sản phẩm ở đây' textButton = 'Tìm kiếm'
            /></Col>
            <Col span={7} style={{display: 'flex', justifyContent: 'center', gap: '20px'}}>
                <WrapperAccountHeader onClick={handleNavigateLogin}>
                    <UserOutlined style={{fontSize: '24px'}}/>
                    <span>Đăng nhập/Đăng ký</span>
                </WrapperAccountHeader>
                <WrapperCartHeader>
                    <ShoppingCartOutlined style={{fontSize: '26px'}}/>
                    <span>Giỏ hàng của bạn</span>
                </WrapperCartHeader>
                
            </Col>
      </WrapperHeader>
    )
}

export default Header;
