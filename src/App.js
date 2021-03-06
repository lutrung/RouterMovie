import logo from './logo.svg';
import './App.css';
import TrangChu from './Pages/TrangChu';
import LienHe from './Pages/LienHe';
import { Route, Switch } from 'react-router-dom'
import GioiThieu from './Pages/GioiThieu';
import Header from './Components/Header';
import DangNhap from './Pages/DangNhap';
import Home from './Pages/Home';
import DangKy from './Pages/DangKy';
import DemoHOC from './HOC/DemoHOC';
import { HomeTemplate } from './Template/HomeTemplate';
import { UserTemplate } from './Template/UserTemplate';
import { AdminTemplate } from './Template/AdminTemplate';
import QuanLyPhim from './Pages/QuanLyPhim';
import QuanLyNguoiDung from './Pages/QuanLyNguoiDung';
import ChiTietPhim from './Pages/ChiTietPhim';
import PhongVe from './Pages/PhongVe';

function App() {
  return (
    <div className="App" style={{ height: '100%' }} >
      <>
        {/* <Header/> */}
        <Switch>
          {/* Mặc định sẽ vào trang chủ */}
          <HomeTemplate exact path='/' Component={TrangChu} />

          {/* HomeTemplate ở đây là để hiện thanh navbar trong Component nào muốn */}
          <HomeTemplate exact path='/trangchu' Component={TrangChu} />


          <HomeTemplate exact path='/chitietphongve/:maLichChieu' Component={PhongVe} />
          <HomeTemplate exact path='/chitietphim/:maPhim' Component={ChiTietPhim} />

          <UserTemplate exact path='/dangky' Component={DangKy} />
          <UserTemplate exact path='/dangnhap' Component={DangNhap} />

          <AdminTemplate exact path='/admin/quanlyphim' Component={QuanLyPhim} />
          <AdminTemplate exact path='/admin/quanlynguoidung' Component={QuanLyNguoiDung} />

          <Route exact path='/lienhe' component={LienHe} />
          <Route exact path='/gioithieu' component={GioiThieu} />
          <Route exact path='/demohoc' component={DemoHOC} />
          <Route exact path='/home' component={Home} />

          {/* Cách viết mới
        <Route path='/lienhe'>
          <LienHe/>
          </Route> */}
        </Switch>


      </>
    </div>
  );
}

export default App;
