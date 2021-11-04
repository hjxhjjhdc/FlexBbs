import Mock from 'mockjs'
import {mockUrl} from '@/assets/ts/baseUrl';

// import { baseUrl} from '../assets/ts/baseUrl'
// 设置拦截ajax请求的相应时间
/* Mock.setup({
    timeout: '200-600'
}) */
//登陆首页
 Mock.mock(`${mockUrl}/user/login`, 'post', function (options:any) {
    console.log(options);
    let {body} =options
console.log(body);

    if (body=='{"username":"admin","password":"admin"}') {
        return Mock.mock({
            code: 200,
            message: 'ok',
            data: {
                token: '@word',
                user: {
                    uid: '@guid',
                    userType: 0
                }
            }
        })
    }
    return Mock.mock({
        code: 0,
        message: 'Error,用户名或密码错误！',
        data: {}
    })
})

export default [

]
