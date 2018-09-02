import React,{Component} from 'react';
import {hashHistory} from 'react-router';
import './bodyHeader.css';
class BodyHeader extends Component{
    constructor(props){
        super(props);
    }

    navigate(path){
        var topath="/"+path;
        hashHistory.push(topath);
    }
    render(){
        return(   
            <div className="top_nav ng-scope">
                <ul>
                    <li className="nav_button consultList active" onClick={()=>this.navigate('consult')}>
                        <img src={process.env.PUBLIC_URL +this.props.urls.consultUrl} alt="" className="consult" />
                        <span>互动处理</span>
                    </li>
                    <li className="nav_button announcementList" name="announce" onClick={()=>this.navigate('announce')}>
                        <img src={process.env.PUBLIC_URL +this.props.urls.announceUrl} alt="" />
                        <span>公告管理</span>
                    </li>
                    <li className="nav_button submitSuggestionList">
                        <img src={process.env.PUBLIC_URL +'/images/tab/tab_top_gonggaoguanli.png'} alt=""/>
                        <span>提建议</span>
                    </li>
                </ul>
            </div>
        
        )
    }
}
export default BodyHeader;