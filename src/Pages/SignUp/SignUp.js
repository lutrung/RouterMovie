import React from 'react'
import './SignUp.scss'
export default function SignUp(props) {
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
                            <p>Tài khoản</p>
                            <input className='form-control' name='taiKhoan' />
                        </div>
                        <div className='form-group'>
                            <p>Mật khẩu</p>
                            <input className='form-control' name='matKhau' />
                        </div>
                        <div className='form-group'>
                            <p>Họ tên</p>
                            <input className='form-control' name='hoTen' />
                        </div>
                        <div className='form-group'>
                            <p>Email</p>
                            <input className='form-control' name='email' />
                        </div>
                        <div className='form-group'>
                            <p>Số điện thoại</p>
                            <input className='form-control' name='soDienThoai' />
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