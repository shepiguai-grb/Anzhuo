import React from 'react'
import './Footer.css'
import { NavLink } from 'react-router-dom'

export default function Footer() {
    return (
        <div className='footer'>
            <footer>
                <NavLink to='/index/home' activeClassName='select'>首页</NavLink>
                <NavLink to='/index/fenlei' activeClassName='select'>分类</NavLink>
                <NavLink to='/index/cart' activeClassName='select'>购物车</NavLink>
                <NavLink to='/index/mine' activeClassName='select'>我的</NavLink>
            </footer>
        </div>
    )
}
