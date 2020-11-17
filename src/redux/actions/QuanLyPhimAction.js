import Axios from 'axios'
import Swal from 'sweetalert2';
import { ACCESSTOKEN } from '../../Util/Config';
import { LAY_DANH_SACH_PHIM_ACTION, LAY_CHI_TIET_PHIM_ACTION, THONG_TIN_PHONG_VE_ACTION } from '../const/QuanLyPhimConst'
// Action gọi API (không dispatch dữ liệu trực tiếp lên reducer)
export const layDanhSachPhimAPIAction = () => {
    return dispatch => {
        // action này trả về hàm có tham số dispatch
        var promise = Axios({
            url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01',
            method: 'GET'
        });
        promise.then((res) => {
            dispatch(layDanhSachPhimAPI(res.data))
        })
        promise.catch((err) => {
            alert('Thất bại', err.response.data)
        })
    }
}
// Action dispatch reducer
export const layDanhSachPhimAPI = (dataPhim) => {
    return {
        type: LAY_DANH_SACH_PHIM_ACTION,
        dsPhim: dataPhim
    }
}

// -------------------- CÁCH VIẾT KHÁC Ở TRÊN (CHẠY TỪ TRÊN XUỐNG DƯỚI CÒN CÁCH Ở TRÊN LÀ CHẠY BẤT ĐỒNG BỘ) ---------
export const layChiTietPhimApiAction = async (maPhim) => {
    return async (dispatch) => {
        try {
            // Gọi api lấy dữ liệu chi tiết phim về
            let result = await Axios({
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
                method: 'GET'
            })
            // Sau khi lấy dữ liệu chi tiết phim dispatch lên reducer giá trị vừa lấy cập nhật cho chi tiết phim
            console.log(result.data)
            dispatch({
                type: LAY_CHI_TIET_PHIM_ACTION,
                chiTietPhim: result.data
            })
        } catch (err) {
            console.log(err)
        }
    }
}




// lay thong tin phong ve-------------------------------
export const layThongTinPhongVeApiAction = async (maLichChieu) => {
    return async (dispatch) => {
        try {
            let { data, status } = await Axios({
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`,
                method: 'GET'
            })
            console.log('datathongtinphongve', data);
            // Thanh cong lay du lieu ve cap nhat vao thongTinPhongVe
            if (status === 200) {
                dispatch({
                    type: THONG_TIN_PHONG_VE_ACTION,
                    thongTinPhongVe: data
                })
            }
        } catch (err) {
            console.log(err)
        }
    }
}


export const datVeApiAction = async (thongTinVe) => {
    return async (dispatch) => {
        try {
            let { data, status } = await Axios({
                url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe',
                method: 'POST',
                data: thongTinVe,
                headers: { 'Authorization': 'Bearer ' + localStorage.getItem(ACCESSTOKEN) }
            })
            dispatch(await layThongTinPhongVeApiAction(thongTinVe.maLichChieu))
            Swal.fire('Thông báo', 'Đặt vé thành công', 'success')
            console.log(data)
            dispatch({
                type: 'DAT_VE_THANH_CONG'
            })
        } catch (err) {
            console.log(err)
            Swal.fire('Thông báo', 'Đặt vé thất bại', 'error')
        }
    }
}