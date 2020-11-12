import React from 'react'
import './Login.scss'
export default function Login(props) {
    return (
        <div className='Login_content'>
            <div className='overlay'></div>
            <div className='Login_loginPic'>
                <div className='Login_pic'>

                </div>
                <div className='Login_login'>
                    <form>
                        <h1>Đăng nhập</h1>
                        <hr />
                        <div className='form-group'>
                            <p>Tài khoản:</p>
                            <input className='form-control' name='taiKhoan' placeholder='Tài khoản' />
                        </div>
                        <div className='form-group'>
                            <p>Mật khẩu:</p>
                            <input className='form-control' name='matKhau' placeholder='Mật khẩu' />
                        </div>
                        <div className='form-group'>
                            <button className='btn btn-success' type='submit' >Đăng nhập</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
