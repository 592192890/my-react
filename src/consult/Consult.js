import React from 'react';
import Header from '../common/header/Header';
import LeftBar from '../common/leftBar/LeftBar';
import BodyHeader from '../common/bodyHeader/BodyHeader';
import TableItem from './TableItem';

import consultUrl from '../common/images/tab/tab_top_hudongchuli_ov.png';
import announceUrl from '../common/images/tab/tab_top_hudongchuli.png';

import './consult.css';
class Consult extends React.Component{
    constructor(){
        super();

        this.listItem=[
            {id:'1',name:"scott",password:'123',age:18,sex:'男'},
            {id:'2',name:"scott1",password:'123',age:18,sex:'男'},
            {id:'3',name:"scott2",password:'123',age:18,sex:'男'}
        ];
        this.urls={
            consultUrl:consultUrl,
            announceUrl:announceUrl
        }
    }

    render(){
        return(
            <div>
                <Header></Header>
                <div className="content">
                    <div className="body">
                        <div className="inner">
                            <div>
                                <BodyHeader urls={this.urls}/>
                                <div className="dealing">
                                    <div className="table-title">
                                        <div className="brand_name">
                                            <img src={process.env.PUBLIC_URL+'/images/title/list_icon_liebiao.png'} alt="" />
                                            待处理内容
                                        </div>
                                    </div>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>name</th>
                                                <th>password</th>
                                                <th>age</th>
                                                <th>sex</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.listItem.map(function(value){
                                                return <TableItem key={value.id} value={value}/>
                                            })}
                                        </tbody>
                                        
                                    </table>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <LeftBar></LeftBar>
                    
                </div>
                
            </div>
        )
    }
}

export default Consult;