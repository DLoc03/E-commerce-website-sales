import React from 'react'
import NavBarComponent from '../../components/NavBarComponent/NavBarComponent'
import CardComponent from '../../components/CardComponent/CardComponent'
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom';

const TypeProductPage = () => {
  const navigate = useNavigate();
    const handleNavigateHome= () => {
        navigate('/')
    }
  return (
    <div className="container" style={{backgroundColor: "#efefef", padding: "0 120px", paddingBottom: '120px'}}>
        <div style={{cursor: 'pointer', padding: '20px 0', fontWeight: '500', textDecoration: 'underline'}} onClick={handleNavigateHome}>
        <span>Trang chủ</span>
      </div>           
        <div style={{display: 'flex'}}>
            <div style={{flex: '2'}}>
                <NavBarComponent/>
            </div>
            <div style={{display: 'flex', gap: '20px', flex: '5', flexWrap: 'wrap', justifyContent: 'center'}}>
                <CardComponent />
                <CardComponent />
                <CardComponent />
                <CardComponent />
                <CardComponent />
                <CardComponent />
                <Button block style={{width: '240px', height: '40px'}}>Xem thêm</Button>
            </div>
        </div>
    </div>
  )
}

export default TypeProductPage