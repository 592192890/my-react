import React from 'react';
import './header.css'
class Header extends React.Component{

    render(){
        return(
            <header>
                <div className="header">
                    <div className="familyIcon">
                        <span>全家.FamilyMart</span>
                    </div>
                    <div className="userInfo">
                        <img src={process.env.PUBLIC_URL +'/images/other/head_btn_user.png'} alt="" />xxx,欢迎
                        <img src={process.env.PUBLIC_URL +'/images/other/head_btn_help.png'} alt=""/>
                        <img src={process.env.PUBLIC_URL +'/images/other/head_btn_power.png'} alt="" />
                       
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;