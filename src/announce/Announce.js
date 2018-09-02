import React from 'react';
import Header from '../common/header/Header';
import LeftBar from '../common/leftBar/LeftBar';
import BodyHeader from '../common/bodyHeader/BodyHeader';

import consultUrl from '../common/images/tab/tab_top_hudongchuli.png';
import announceUrl from '../common/images/tab/tab_top_hudongchuli_ov.png';

class Announce extends React.Component{
    constructor(){
        super();
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
                                aaa
                            </div>
                        </div>
                    </div>
                    <LeftBar></LeftBar>
                    
                </div>
            </div>
        )
    }
}

export default Announce;