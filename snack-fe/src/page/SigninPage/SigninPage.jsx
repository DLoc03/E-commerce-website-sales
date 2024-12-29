import React, { useEffect, useState } from 'react'
import { WrapperContainer, WrapperBtnSignIn, WrapperTextLight } from './style'
import InputForm from '../../components/InputForm/InputForm'
import { EyeFilled, EyeInvisibleFilled, LeftOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import * as UserService from "../../services/UserService"
import { useMutaitonHook } from '../../hooks/useMutationHook';
import * as message from "../../components/Message/Message"

const SigninPage = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();
    const handleNavigateHome= () => {
        navigate('/')
    }
    const handleNavigateSignUp = () => {
      navigate('/sign-up')
    }
    const toggleShowPassword = () => {
      setIsShowPassword(prevState => !prevState);
    }

    const handleOnChangeEmail = (value) => {
      setEmail(value)
  }

  const handleOnChangePassword= (value) => {
      setPassword(value)
  }

  const mutation = useMutaitonHook (
    (data) => UserService.loginUser(data)
  )

  const {data} = mutation;

  const handleSignIn = () => {
    const dataToSend = {
      email,
      password,
    };
  
    mutation.mutate(dataToSend, {
      onSuccess: (data) => {
        if (data.status === 'OK') {
          message.success();
          console.log(data)
          localStorage.setItem('access_token', data?.access_token)
          handleNavigateHome()
        } else {
          message.error(data.message || "Đăng nhập thất bại. Vui lòng thử lại.");
        }
      },
      onError: (error) => {
        message.error(error.response?.data?.message || "Đăng nhập thất bại. Vui lòng thử lại.");
      },
    });
  };
  

    

  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent:'center', backgroundColor:'#ccc', height: '100vh'}}>
        <div style={{width: '500px', height: '445px', borderRadius: '6px', background: '#fff', padding: '40px'}}>
        <WrapperContainer>
                <Button onClick={handleNavigateHome} style={{width: '12px', border: '0'}}>
                  <LeftOutlined style={{fontSize: '24px'}} />
                </Button>
                <h1>Đăng nhập</h1>
                <InputForm placeholder="Email" value={email} onChange = {handleOnChangeEmail}/>
                <div style={{position: 'relative'}}>
                  <span
                  style={{zIndex: 10, position: 'absolute', top: '16px', right: '8px', color: 'rgb(255, 66, 78)', cursor: 'pointer'}}
                  onClick={toggleShowPassword}
                  >
                    {isShowPassword ? (
                      <EyeFilled/>
                    ): 
                    (
                      <EyeInvisibleFilled/>
                    )
                    }
                  </span>
                  <InputForm placeholder="Mật khẩu" type={isShowPassword ? "text" : "password"} value={password} onChange = {handleOnChangePassword}/>
                </div>
                {data?.status === 'ERR' && <span style={{ color: 'red', fontSize: '14px' }}>{data?.message}</span>}
                  <WrapperBtnSignIn
                  disabled={!email.length || !password.length}
                  onClick={handleSignIn}
                  >Đăng nhập
                  </WrapperBtnSignIn>          
                <div style={{alignItems: 'flex-start', fontSize: '14px'}}>
                    <p style={{cursor: 'pointer'}}>Quên mật khẩu?</p>
                    <p style={{display: 'flex'}}>Chưa có tài khoản? <WrapperTextLight onClick={handleNavigateSignUp}> Đăng ký</WrapperTextLight></p>
                </div>
            </WrapperContainer>
        </div>
    </div>
  )
}

export default SigninPage