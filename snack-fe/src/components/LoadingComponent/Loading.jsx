import React from 'react'
import { Spin } from "antd";

const Loading = ({children, isSuccess, delay = 200}) => {
  return (
    <Spin size="large" spinning={isSuccess} delay={delay}>
        {children}
    </Spin>
  )
}

export default Loading