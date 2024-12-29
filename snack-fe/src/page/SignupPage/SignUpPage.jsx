import React, { useState } from 'react'
import { WrapperContainer, WrapperBtnSignIn, WrapperTextLight } from './style'
import InputForm from '../../components/InputForm/InputForm'
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import { LeftOutlined, EyeFilled, EyeInvisibleFilled } from '@ant-design/icons'

const SignUpPage = () => {
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [isShowComfirmPassword, setIsShowComfirmPassword] = useState(false);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const navigate = useNavigate();
    const handleNavigateHome= () => {
        navigate('/')
    }
    const handleNavigateSignIn = () => {
      navigate('/sign-in')
    }

    const toggleShowPassword = () => {
        setIsShowPassword(prevState => !prevState);
    }

    const toggleShowCofirmPassword = () => {
        setIsShowComfirmPassword(prevState => !prevState);
    }

    const handleOnChangeEmail = (value) => {
        setEmail(value)
    }

    const handleOnChangePassword= (value) => {
        setPassword(value)
    }

    const handleOnChangeConfirmPassword= (value) => {
        setConfirmPassword(value)
    }

    const handleSignUp = () => {
        console.log("Info sign up\n" + "Email: " + email + "\nPassword: " + password)
    }

  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent:'center', backgroundColor:'#ccc', height: '100vh'}}>
        <div style={{width: '500px', height: '445px', borderRadius: '6px', background: '#fff', padding: '40px 40px'}}>
            <WrapperContainer>
                <Button onClick={handleNavigateHome} style={{width: '12px', border: '0'}}>
                  <LeftOutlined style={{fontSize: '24px'}} />
                </Button>
                <h1>Đăng ký tài khoản</h1>
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
                <div style={{position: 'relative'}}>
                  <span
                  style={{zIndex: 10, position: 'absolute', top: '16px', right: '8px', color: 'rgb(255, 66, 78)', cursor: 'pointer'}}
                  onClick={toggleShowCofirmPassword}
                  >
                    {isShowComfirmPassword ? (
                      <EyeFilled/>
                    ): 
                    (
                      <EyeInvisibleFilled/>
                    )
                    }
                  </span>
                  <InputForm placeholder="Nhập lại mật khẩu" type={isShowComfirmPassword ? "text" : "password"} value={confirmPassword} onChange = {handleOnChangeConfirmPassword}/>
                </div>
                <WrapperBtnSignIn onClick={handleSignUp} 
                disabled={!email.length || !password.length || !confirmPassword.length}
                >Đăng ký tài khoản
                </WrapperBtnSignIn>
                <div style={{alignItems: 'flex-start', fontSize: '14px'}}>
                    <p style={{display: 'flex'}}>Bạn đã có tài khoản? <WrapperTextLight onClick={handleNavigateSignIn}>Đăng nhập</WrapperTextLight></p>
                </div>
            </WrapperContainer>
        </div>
    </div>
  )
}

export default SignUpPage