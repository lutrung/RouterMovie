import React,{useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { layThongTinPhongVeApiAction } from '../redux/actions/QuanLyPhimAction';

export default function PhongVe(props) {
    const thongTinPhongVe = useSelector(state=> state.QuanLyPhimReducer.thongTinPhongVe)
    const dispatch = useDispatch();
    useEffect(async () => {
        // lasy tham so lich chieu tu url
        let maLichChieu = props.match.params.maLichChieu;
        // goi action ket noi api lay du lieu lich chieu ve
        dispatch( await layThongTinPhongVeApiAction(maLichChieu))
    }, [])
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-8'>
                    {/* hien thi thong tin phong ve */}
                </div>
                <div className='col-4'>
                    {/* hien thi thong tin phim */}
                </div>
            </div>
        </div>
    )
}
