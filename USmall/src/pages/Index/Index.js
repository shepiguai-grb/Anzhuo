import React, { Component } from 'react'
import './Index.css'

import { Switch, Route, Redirect, NavLink } from 'react-router-dom'
import Home from '../Home/Home'
import Fenlei from '../Fenlei/Fenlei'
import Cart from '../Cart/Cart'
import Mine from '../Mine/Mine'

import Footer from './components/Footer'

export default class Index extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path='/index/home' component={Home}></Route>
                    <Route path='/index/fenlei' component={Fenlei}></Route>
                    <Route path='/index/cart' component={Cart}></Route>
                    <Route path='/index/mine' component={Mine}></Route>

                    <Redirect to='/index/home'></Redirect>
                </Switch>

                <Footer></Footer>
            </div>
        )
    }
}
