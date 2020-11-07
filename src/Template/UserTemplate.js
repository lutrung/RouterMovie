import React, { useEffect, useState } from 'react';
import{Route} from 'react-router-dom';
export const UserTemplate = (props)=>{
    // để khi kéo màn hình thì ảnh sẽ tự thay đổi kích thước lại 
    const [height, setHeight] = useState(window.innerHeight); //window.innerHeight set ảnh = chiều dài màn hình
    useEffect(()=>{
        window.onresize = function(){
            setHeight(window.innerHeight);
        }
    },[]);

    const {Component,...restParams} = props;
    return(
        <Route {...restParams} render={(propsRoute)=>{
            return(
                <div className='row'>
                    <div className='col-6' style={{height}}>
                        <img src='http://picsum.photos/2000/1000' style={{width:'100%', height:'100%'}} />
                    </div>
                    <div className='col-6' >
                    <Component {...propsRoute} />
                    </div>
                </div>
            )
        }} />
    )
}