import React, { useState } from 'react';
import { Input } from 'antd';
import { UserOutlined, KeyOutlined } from '@ant-design/icons';
import { WrapperInputStyle } from './style';

const InputForm = (props) => {
  const { placeholder = 'Nhận text', ...rests } = props;
  const handleOnChangeInput= (e) => {
    props.onChange(e.target.value);
  }
  return (
    <div>
      <WrapperInputStyle placeholder={placeholder} valueInput={props.value} {...rests} onChange={handleOnChangeInput}/>      
    </div>
  );
}

export default InputForm;
