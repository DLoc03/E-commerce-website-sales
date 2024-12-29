import React from "react";
import TypeProduct from "../../components/TypeProduct/TypeProduct";
import {WrapperTypeProduct} from "./style"
import SlideComponent from "../../components/SlideComponent/SlideComponent";
import slide1 from "../.././assets/images/slide1.png"
import slide2 from "../.././assets/images/slide2.png"
import slide3 from "../.././assets/images/slide3.png"
import slide4 from "../.././assets/images/slide4.png"
import CardComponent from "../../components/CardComponent/CardComponent";
import NavBarComponent from "../../components/NavBarComponent/NavBarComponent";
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();
    const handleNavigateProductType= () => {
        navigate('/type')
    }
    const arrType = ['Điện tử', 'Mỹ phẩm', 'Thực phẩm', 'Dược phẩm', 'Đời sống', 'Quần áo', 'Mẹ và bé', 'Thú cưng', 'Đồ chơi', 'Thời trang']
    return (
        <>
            <div style={{padding:'0 120px'}}>
            <WrapperTypeProduct>
                {arrType.map((item) => {
                    return (
                        <div onClick={handleNavigateProductType}>
                            <TypeProduct name={item} key={item}/>
                        </div>
                    )
                })}
            </WrapperTypeProduct>
            </div>
            <div className="container" style={{backgroundColor: "#efefef", padding: "0 120px", height: '1000px'}}>            
                <SlideComponent arrSlide={[slide1, slide2, slide3, slide4]}/>
                <div style={{display: 'flex', marginTop: '48px'}}>
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
        </>        
    )
}

export default HomePage;