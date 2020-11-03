import Axios from 'axios'
import {LAY_DANH_SACH_PHIM_ACTION} from '../const/QuanLyPhimConst'
// Action gọi API (không dispatch dữ liệu trực tiếp lên reducer)
export const layDanhSachPhimAPIAction = ()=>{
    return dispatch =>{
        // action này trả về hàm có tham số dispatch
        var promise = Axios({
            url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01',
            method: 'GET'
        });     
        promise.then((res)=>{
            dispatch(layDanhSachPhimAPI(res.data))
        })
        promise.catch((err)=>{
            alert('Thất bại', err.response.data)
        })
    }
}
// Action dispatch reducer
export const layDanhSachPhimAPI = (dataPhim)=>{
    return{
        type: LAY_DANH_SACH_PHIM_ACTION,
        dsPhim: dataPhim
    }
}