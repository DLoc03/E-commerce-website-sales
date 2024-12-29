import React from 'react'
import { WrapperLabelText, WrapperTextValue, WrapperContent, WrapperPriceText } from './style'
import { Checkbox, Rate} from 'antd';


const NavBarComponent = () => {
    const onChange = () => {};
    const renderContent = (type, options) => {
        switch(type) {
            case 'text':
                return options.map((option, index) => {
                    return (
                        <WrapperTextValue>{option}</WrapperTextValue>
                    )
                });
            case 'checkbox':
                return (
                    <Checkbox.Group style={{ width: '100%', display: 'flex', flexDirection: 'column' }} onChange={onChange}>
                        {options.map((option, index) =>{
                            return (
                                <Checkbox key={index} value = {option.value}>{option.label}</Checkbox>
                            )
                        })}
                    </Checkbox.Group>
                )
            case 'star':
                return options.map((option, index) => {
                        return (
                            <div style={{display: 'flex', gap: '6px', alignItems: 'center'}}>
                                <Rate disabled defaultValue={option} />
                                <span style={{fontSize: '14px'}}>{`Từ ${option} sao`}</span>
                            </div>
                        )
                    })
            case 'price':
                return options.map((option, index) => {
                    return (
                        <WrapperPriceText>{option}</WrapperPriceText>
                    )
                })
                
            default:
                return {};
        }
    }
  return (
    <div style={{backgroundColor: 'white', width: '90%', padding: '6px 20px'}}>
        <WrapperLabelText>Danh mục sản phẩm</WrapperLabelText>
        <WrapperContent>
            {renderContent('text', ['Điện tử', 'Thời trang', 'Thực phẩm', 'Mẹ và bé', 'Sách, truyện'])}
        </WrapperContent>
        <WrapperContent>
            {renderContent('checkbox', [
                 { value: 'dalat', label: 'TP. Đà Lạt' },
                 {value: 'bmt', label: 'TP. Buôn Ma Thuột'},
                 {value: 'hcm', label: 'TP. Hồ Chí Minh'},
                 {value: 'dnang', label: 'TP. Đà Nẵng'},
            ])}
        </WrapperContent>
        <WrapperContent>
            {renderContent('star', [3, 4, 5])}
        </WrapperContent>
        <WrapperContent>
            {renderContent('price', ['Dưới 500000', 'Trên 500000', 'Từ 1000000 - 2000000'])}
        </WrapperContent>
    </div>
  )
}

export default NavBarComponent