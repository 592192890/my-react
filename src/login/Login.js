import React, { Component } from 'react';
import {hashHistory} from 'react-router';
class Login extends Component {
  
  constructor(){
    super();
    this.state={
      name:'',
      password:''
    };
    this.login=this.login.bind(this);
    this.handlerChange=this.handlerChange.bind(this);
  }
  handlerChange(e){
    var className=e.target.className;
    var value=e.target.value;
    if(className=="name"){
      this.setState({name:value});
    }else{
       this.setState({password:value});
    }
    
  }
  login(e){
    e.preventDefault();
    const path = '/consult';
    hashHistory.push(path)
  }
  render() {
   
    return (
      <div>
        <form>
            <div>
                <label>姓名：</label>
                <input type="text" name="name" className="name" value={this.state.name} placeholder="姓名" onChange={this.handlerChange}/>
            </div>

            <div>
                <label>密码：</label>
                <input type="password" value={this.state.password} name="password" className="password" placeholder="密码" onChange={this.handlerChange}/>
            </div>
            <button onClick={this.login}>登录</button>
        </form>
        
      </div>
    );
  }
}

export default Login;
