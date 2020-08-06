import axios from 'axios'
import qs from 'qs'


//请求拦截
axios.interceptors.request.use(res => {
    return res
})

//响应拦截
axios.interceptors.response.use(res => {
    return res;
})