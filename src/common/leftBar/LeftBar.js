import React,{Component} from 'react';
import './leftBar.css';
class LeftBar extends Component{
    constructor(){
        super()
    }

    render(){
        return(
            
            <div className="left">
                <ul>
                    <li>
                        <div className="linkIcon active interactive">
                            <div className="title">互动平台</div>
                            <img src={process.env.PUBLIC_URL +'/images/tab/tab_left_hudong_ov.png'} alt=""/>
                        </div>
                    </li>
                    <li>                       
                        <div className="linkIcon satisfaction">
                            <div className="title">满意度平台</div>
                            <img src={process.env.PUBLIC_URL +'/images/tab/tab_left_hudong.png'} alt=""/>
                        </div>
                    </li>
                    <li>                        
                        <div className="linkIcon dataReport">
                            <div className="title">数据报表</div>
                            <img src={process.env.PUBLIC_URL +'/images/tab/tab_left_manyi.png'} alt=""/>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}

export default LeftBar;
