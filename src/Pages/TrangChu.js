import Axios from 'axios'
import React, { useState, useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { layDanhSachPhimAPI, layDanhSachPhimAPIAction } from '../redux/actions/QuanLyPhimAction';

export default function TrangChu(props) {
    // const [dsPhim, setDsPhim] = useState([])
    const dsPhim = useSelector((state) => state.QuanLyPhimReducer.dsPhim)
    const dispatch = useDispatch();
    useEffect(() => {
        // var promise = Axios({
        //     url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01',
        //     method: 'GET'
        // }); 
        // promise.then((res)=>{
        //     dispatch(layDanhSachPhimAPI(res.data))
        //     // setDsPhim(res.data)
        // })
        // promise.catch((err)=>{
        //     alert('Thất bại', err.response.data)
        // })
        dispatch(layDanhSachPhimAPIAction())
    }, [])   


    const renderPhim = () => {
        return dsPhim.map((phim, index) => {
            return (
                <div key={index} className='col-4'>
                    <div className="card text-left">
                        <img className="card-img-top" src={phim.hinhAnh} alt={phim.hinhAnh} onError={(e) => { e.target.onError = null; e.target.src = 'https://picsum.photos/300/300' }} />
                        {/* onError dùng để khi ảnh trên server bị lỗi thì tự nó lấy ảnh khác trong link https://picsum.photos/300/300 */}
                        <div className="card-body">
                            <h4 className="card-title">{phim.tenPhim}</h4>
                        </div>
                    </div>
                </div>
            )
        })
    }
    return (
        <div className='container'>
            <h3 className='display-4 text-primary text-center'>Danh Sách Phim</h3>
            <div className='row'>
                {renderPhim()}
            </div>
        </div>
    )
}
