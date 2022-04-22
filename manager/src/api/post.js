// 导入axios配置
import service from '../utils/request'

// 注册账号
export function registerAccount (obj) {
    return service.post('/register/registerAccount', JSON.stringify(obj), {
        headers: { 'Content-Type': 'application/json' }
    })
}

