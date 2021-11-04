import axios from 'axios'
import { mockUrl } from '@/assets/ts/baseUrl'
const mock = axios.create({ baseURL: mockUrl })
 
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    //message
    return Promise.reject(error);
});

export const userloginMock = (params: any) => {
    return mock.post('/user/login', params)
}