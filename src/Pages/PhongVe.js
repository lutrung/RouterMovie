import React, { useState, useEffect, Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { datVeApiAction, layThongTinPhongVeApiAction } from '../redux/actions/QuanLyPhimAction';
import { USER_LOGIN } from '../Util/Config';

export default function PhongVe(props) {
    const thongTinPhongVe = useSelector(state => state.QuanLyPhimReducer.thongTinPhongVe)
    const danhSachGheDangDat = useSelector(state => state.QuanLyPhimReducer.danhSachGheDangDat)
    console.log(danhSachGheDangDat)
    const dispatch = useDispatch();
    useEffect(async () => {
        // lasy tham so lich chieu tu url
        let maLichChieu = props.match.params.maLichChieu;
        // goi action ket noi api lay du lieu lich chieu ve
        dispatch(await layThongTinPhongVeApiAction(maLichChieu))
    }, [])
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-8 text-center'>
                    {/* hien thi thong tin phong ve */}
                    <div className='manHinh'>
                        <img src='https://tix.vn/app/assets/img/icons/screen.png' />
                    </div>
                    <div className='danhSachGhe'>
                        {thongTinPhongVe.danhSachGhe?.map((ghe, index) => {
                            let classGheVip = ghe.loaiGhe === 'Thuong' ? '' : 'gheVip';
                            let classGheDaDat = ghe.daDat ? 'gheDaDat' : '';
                            let disable = ghe.daDat ? 'disable' : '';
                            let noiDungBtn = ghe.daDat ? 'X' : ghe.stt;
                            let indexGheDangDat = danhSachGheDangDat.findIndex(gheDangDat => ghe.maGhe === gheDangDat.maGhe)
                            let classGheDangDat = indexGheDangDat !== -1 ? 'gheDangDat' : '';
                            return <Fragment key={index}>
                                <button onClick={() => {
                                    dispatch({
                                        type: "DAT_GHE",
                                        gheDangDat: {
                                            maGhe: ghe.maGhe,
                                            giaVe: ghe.giaVe,
                                            stt: ghe.stt
                                        }
                                    })
                                }} disabled={`${disable}`} className={`ghe ${classGheVip} ${classGheDaDat} ${classGheDangDat}`}>{noiDungBtn}</button>
                                {(index + 1) % 16 === 0 ? <br /> : ''}
                            </Fragment>
                        })}
                    </div>
                </div>
                <div className='col-4'>
                    {/* hien thi thong tin phim */}
                    <div className='display-4 text-center'>{danhSachGheDangDat.reduce((tongTien, gheDangDat, index) => {
                        return tongTien += gheDangDat.giaVe
                    }, 0).toLocaleString()} VND</div>
                    <hr />
                    <h1>{thongTinPhongVe.thongTinPhim?.tenPhim}</h1>
                    <img src={thongTinPhongVe.thongTinPhim?.hinhAnh} style={{ width: 180, height: 200 }} alt='' />
                    <h5>{thongTinPhongVe.thongTinPhim?.tenCumRap} - {thongTinPhongVe.thongTinPhim?.tenRap}</h5>
                    <p>{thongTinPhongVe.thongTinPhim?.ngayChieu} - {thongTinPhongVe.thongTinPhim?.gioChieu}</p>
                    <hr />
                    <div>Ghế: {danhSachGheDangDat?.map((gheDangDat, index) => {
                        return <span key={index} className='mx-1'>{gheDangDat.stt}</span>
                    })}</div>
                    <hr />
                    <button className='btn btn-success w-100' onClick={async () => {
                        if (localStorage.getItem(USER_LOGIN)) {
                            let user = JSON.parse(localStorage.getItem(USER_LOGIN))
                            let objectDatVe = {
                                'maLichChieu': props.match.params.maLichChieu,
                                'danhSachVe': danhSachGheDangDat,
                                'taiKhoanNguoiDung': user.taiKhoan
                            }
                            dispatch(await datVeApiAction(objectDatVe))
                        } else {
                            props.history.push('/dangnhap')
                        }

                    }}>Đặt vé</button>
                </div>
            </div>
        </div>
    )
}
