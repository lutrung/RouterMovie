import React, { useState } from 'react'
import './SignUp.scss'
export default function SignUp(props) {
    const [error, setError] = useState({
        hoTen: "",
        phoneNumber: "",
        email: "",
    })
    const handleChangeInput = (e) => {
        let { name, value } = e.target;
        let types = e.target.getAttribute("types");
        let newErrors = { ...error };
        newErrors[name] = value.trim() === "" ? "Không được bỏ trống" : "";
        setError(newErrors)
        if (types === "phoneNumber") {
            const regexNumber = /^[0-9]+$/;
            if (!regexNumber.test(value.trim())) {
                newErrors[name] = "* Dữ liệu phải là số !";
            }
        }
        if (types === "email") {
            const regexNumber = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!regexNumber.test(value.trim())) {
                newErrors[name] = "* Email không hợp lệ !";
            }
        }
        if (types === "hoTen") {
            const regexNumber = /^[A-Za-z ]+$/;
            if (!regexNumber.test(value.trim())) {
                newErrors[name] = "* Dữ liệu phải là chữ !";
            }
        }
    }
    return (
        <div className='SignUp_content'>
            <div className='overlay'></div>
            <div className='SignUp_loginPic'>
                <div className='SignUp_pic'>

                </div>
                <div className='SignUp_login'>
                    <form>
                        <h1>Đăng ký</h1>
                        <hr />
                        <div className='form-group'>
                            <p className='title'>Tài khoản</p>
                            <input className='form-control' name='taiKhoan' placeholder='Tài khoản' />
                        </div>
                        <div className='form-group'>
                            <p className='title'>Mật khẩu</p>
                            <input className='form-control' name='matKhau' placeholder='Mật khẩu' />
                        </div>
                        <div className='form-group'>
                            <p className='title'>Họ tên</p>
                            <input types='hoTen' name='hoTen' className='form-control' placeholder='Họ tên' onChange={handleChangeInput} />
                            <p className="text-danger error">{error.hoTen}</p>
                        </div>
                        <div className='form-group'>
                            <p className='title'>Email</p>
                            <input types='email' name='email' className='form-control' placeholder='Email' onChange={handleChangeInput} />
                            <p className="text-danger error">{error.email}</p>
                        </div>
                        <div className='form-group'>
                            <p className='title'>Số điện thoại</p>
                            <input types='phoneNumber' name='phoneNumber' className='form-control' placeholder='Số điện thoại' onChange={handleChangeInput} />
                            <p className="text-danger error">{error.phoneNumber}</p>
                        </div>
                        <div className='form-group'>
                            <button className='btn btn-success'>Đăng ký</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}