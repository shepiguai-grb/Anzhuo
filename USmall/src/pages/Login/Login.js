import React, { Component } from 'react'
import './Login.css'
import { Button } from 'antd-mobile';

export default class Login extends Component {
    constructor() {
        super()
        this.state = {
            btn: {
                width: '80%',
                backgroundColor: 'orange',
                borderColor: 'orange',
                margin: '20px auto'
            }
        }
    }
    
    //忘记密码
    forget() {
        this.props.history.push('/register')
    }

    render() {
        return (
            <div className='login'>
                <div>账号：<input type="text" /></div>
                <div>密码：<input type="text" /></div>
                <p onClick={() => this.forget()}>忘记密码</p>
                <Button type="primary" style={this.state.btn}>登录</Button>
            </div>
        )
    }
}

