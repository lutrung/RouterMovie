import Axios from 'axios'
import { ACCESSTOKEN, USER_LOGIN,DOMAIN } from '../../Util/Config'
import {history} from '../../Util/history'
import swal from 'sweetalert2'
export const dangNhapAction = (userLogin) =>{
    return dispatch =>{
        const promise = Axios({
            url: DOMAIN + '/api/quanlynguoidung/dangnhap',
            method:'POST',
            data: userLogin
        })
        promise.then(res =>{
            //dang nhap thanh cong luu thong tin nguoi dung vao localstorage
            localStorage.setItem(USER_LOGIN,JSON.stringify( res.data));
            localStorage.setItem(ACCESSTOKEN,res.data.accessToken);
            swal.fire('Thông báo','Đăng nhập thành công','success')
            history.push('/trangchu')
            // dispatch gia tri len reducer
            dispatch({
                type:'DANG_NHAP',
                userLogin:res.data
            })
        })
        promise.catch(err =>{
            console.log(err.response.data)
            swal.fire('Thông báo',err.response.data,'error')
        })
    }
}