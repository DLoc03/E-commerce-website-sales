import { message } from "antd"

const success = (mes = 'Thành công') => {
    message.success(mes)
}

const error = (mes = 'Thất bại') => {
    message.success(mes)
}

const warning = (mes = 'Cảnh báo') => {
    message.success(mes)
}

export {success, error, warning}