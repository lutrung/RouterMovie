import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
export default function Header(props) {
    const userLogin = useSelector(state => state.QuanLyNguoiDungReducer.userLogin);

    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <NavLink className="navbar-brand" to="#">CyberSoft</NavLink>
            <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <NavLink className="nav-link" activeStyle={{ color: 'yellow' }} activeClassName='bg-dark' to="/trangchu">Trang chủ</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName='bg-dark text-white' to="/gioithieu">Giới thiệu</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName='bg-dark text-white' to="/lienhe">Liên hệ</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName='bg-dark text-white' to="/home">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName='bg-dark text-white' to="/admin/quanlyphim">AdminQLND</NavLink>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        {userLogin.taiKhoan ?
                            <li className="nav-item">
                                <NavLink to="/"><span className='text-danger mx-1'>Hello, {userLogin.taiKhoan} </span></NavLink>
                            </li>
                            : (<>
                                <li className="nav-item">
                                    <NavLink className="nav-link" activeClassName='bg-dark text-white' to="/dangnhap">Đăng nhập</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" activeClassName='bg-dark text-white' to="/dangky">Đăng ký</NavLink>
                                </li>
                            </>)}
                    </ul>
                </form>
            </div>
        </nav>

    )
}