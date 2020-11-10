import {LAY_DANH_SACH_PHIM_ACTION,LAY_CHI_TIET_PHIM_ACTION, THONG_TIN_PHONG_VE_ACTION} from '../const/QuanLyPhimConst'
const stateDefault = {
    dsPhim:[],
    chiTietPhim: {},
    thongTinPhongVe: {}
}
export const QuanLyPhimReducer = (state = stateDefault,action) =>{
    switch (action.type) {
      case LAY_DANH_SACH_PHIM_ACTION:{
          state.dsPhim = action.dsPhim;
          return{...state};
      }
      case LAY_CHI_TIET_PHIM_ACTION:{
        state.chiTietPhim = action.chiTietPhim;
        return{...state};
    }
    case THONG_TIN_PHONG_VE_ACTION:{
        state.thongTinPhongVe = action.thongTinPhongVe;
        return{...state};
    }
        default: return{...state}
            
    }
}   