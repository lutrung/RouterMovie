import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { layChiTietPhimApiAction } from '../redux/actions/QuanLyPhimAction';
import moment from 'moment'
import { NavLink } from 'react-router-dom';

export default function ChiTietPhim(props) {
    const chiTietPhim = useSelector(state => state.QuanLyPhimReducer.chiTietPhim);
    const dispatch = useDispatch();
    console.log('Chi tiet phim', chiTietPhim)
    useEffect(async () => {
        // lay tham so tu url
        let maPhim = props.match.params.maPhim
        // gọi action api từ redux
        dispatch(await layChiTietPhimApiAction(maPhim))
    }, [])


    return (
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <img className="mt-5" style={{ width: 150, height: 150 }} src={chiTietPhim.hinhAnh} />
                </div>
                <div className="col-6">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Tên phim</th>
                                <th>{chiTietPhim.tenPhim}</th>
                            </tr>
                            <tr>
                                <th>Mô tả</th>
                                <th>{chiTietPhim.moTa}</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-12">
                    <span className="display-4">THÔNG TIN LỊCH CHIẾU</span>
                    <div className="row">
                        <div className="nav flex-column nav-pills col-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            {chiTietPhim.heThongRapChieu?.map((heThongRap, index) => {

                                let active = index === 0 ? 'active' : '';

                                return <a key={index} className={'nav-link ' + active} id="v-pills-home-tab" data-toggle="pill" href={`#${heThongRap.maHeThongRap}`} role="tab" aria-controls="v-pills-home" aria-selected="true">
                                    <img src={heThongRap.logo} alt={heThongRap.logo} style={{ width: 50, height: 50 }} /> {heThongRap.tenHeThongRap}
                                </a>
                            })}
                        </div>
                        <div className="tab-content col-9" id="v-pills-tabContent">
                            {chiTietPhim.heThongRapChieu?.map((heThongRap, index) => {
                                let active = index === 0 ? 'active' : '';
                                return <div key={index} className={'tab-pane fade show ' + active} id={heThongRap.maHeThongRap} role="tabpanel" aria-labelledby="v-pills-home-tab">
                                    {heThongRap.cumRapChieu?.map((cumRap, index) => {
                                        return <div key={index}>
                                            <p style={{ fontWeight: 'bold', fontSize: '25px' }}>{cumRap.tenCumRap}</p>
                                            <div className="row">
                                                {cumRap.lichChieuPhim?.slice(0, 12).map((lichChieu, index) => {
                                                    return <NavLink to={'/chitietphongve/' + lichChieu.maLichChieu} key={index} className="col-2">
                                                        {moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}
                                                    </NavLink>
                                                })}
                                            </div>
                                        </div>
                                    })}
                                </div>
                            })}
                            {/* <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">home</div>
                            <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">profile</div>
                            <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">messages</div>
                            <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">setting</div> */}
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}
