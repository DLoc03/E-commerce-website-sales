import React from 'react'
import ProductDetailComponent from '../../components/ProductDetailComponent/ProductDetailComponent'
import { useNavigate } from 'react-router-dom';

const ProductDetail = () => {
  const navigate = useNavigate();
    const handleNavigateHome= () => {
        navigate('/')
    }
  return (
    <div style={{padding: '0 120px', backgroundColor: "#efefef", paddingBottom: '120px'}}>
      <div style={{cursor: 'pointer', padding: '20px 0', fontWeight: '500', textDecoration: 'underline'}} onClick={handleNavigateHome}>
        <span>Trang chủ</span>
      </div>
        <ProductDetailComponent/>
    </div>
  )
}

export default ProductDetail