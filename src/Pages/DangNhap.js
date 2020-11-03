import React,{useState} from 'react'

export default function DangNhap(props) {
    const[userLogin, setUserLogin] = useState({taiKhoan: '', matKhau: ''})
    console.log(userLogin)
    const handleChange = (e)=>{
        let {value,name} = e.target;
        // Thay đổi giá trị thuộc tính đang onChange
        let newUserLogin = {...userLogin, [name]:value};
        // Set lại state của userLogin = giá trị mới
        setUserLogin(newUserLogin)
        console.log(userLogin);
    }
    const handleSubmit = (e)=>{
        e.preventDefault() // chặn sự kiện reload browser
        if(userLogin.taiKhoan === 'haha' && userLogin.matKhau === 'haha'){
            alert('Login Success')
            props.history.push('/home')
        }
    }
    return (
        
        <form className='container' onSubmit={handleSubmit}>
            <h1>Đăng nhập</h1>
            <div className='form-group'>
                <p>Tài khoản</p>
                <input className='form-control' name='taiKhoan' onChange={handleChange} />
            </div>
            
            <div className='form-group'>
                <p>Mật khẩu</p>
                <input className='form-control' name='matKhau'  onChange={handleChange}/>
            </div>

            <div className='form-group'>
                <button type='submit' >Đăng nhập</button>
            </div>
            
            
        </form>
    )
}
