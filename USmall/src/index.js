import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//引入公共css(reset.css)
import './assets/css/reset.css'

//引入公共js(rem)
import './assets/js/rem'

//引入antd移动端组件库，指令：npm install antd-mobile --save
import 'antd-mobile/dist/antd-mobile.css'; 

//定义路由模式，HashRouter是hash模式(有#号)
import { HashRouter, BrowserRouter } from 'react-router-dom'

//配置图片路径
Component.prototype.$img = "http://localhost:3000"

ReactDOM.render(
  //加上React.StrictMode表示严格模式，严格模式下生命周期会执行两次
  // <React.StrictMode>
  <HashRouter>
    <App></App>,
     </HashRouter>,
  // </React.StrictMode>,
  document.getElementById('root')
);
