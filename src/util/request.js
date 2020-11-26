import axios from 'axios';
import {
    Message,
    Loading
} from 'element-ui';
const ConfigBaseURL = 'http://8.129.43.113:8080/'; //默认路径，这里也可以使用env来判断环境
let loadingInstance = null; //这里是loading
import Cookies from 'js-cookie';

//使用create方法创建axios实例
const Service = axios.create({
    timeout: 7000, // 请求超时时间
    baseURL: ConfigBaseURL, //请求的默认前缀
    method: 'post', //默认请求方式是post
    headers: {
        'Content-Type': 'application/json;charset=UTF-8', //请求参数是json格式
        'Authorization': Cookies.get("loginToken") //令牌
    }
});

// 添加请求拦截器
Service.interceptors.request.use(config => {
    loadingInstance = Loading.service({
            lock: true,
            text: '拼命加载中...'
        })
        //放行
    return config
});

// 添加响应拦截器
Service.interceptors.response.use(response => {
    //关闭加载窗
    loadingInstance.close()
        // console.log(response)
    return response.data
}, error => {
    console.log('TCL: error', error)
    const msg = error.Message !== undefined ? error.Message : ''
    Message({
        message: '网络错误' + msg,
        type: 'error',
        duration: 3 * 1000
    })
    loadingInstance.close()
    return Promise.reject(error)
});

export default Service;