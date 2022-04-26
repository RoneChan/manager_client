// 导入axios配置
import service from '../utils/request'

// 注册账号
export function registerAccount (obj) {
    return service.post('/register/registerAccount', JSON.stringify(obj), {
        headers: { 'Content-Type': 'application/json' }
    })
}

// 前端上传excel文件，将文件保存到服务器
export function uploadFilePost (systemName,data) {
    return service.post('/uploadPICTDoc', data, {
        headers: { 'Content-Type': 'application/json' }
    })
}


// 前端上传excel文件，将文件数据保存到数据库
export function SaveFileDataPost (systemName,data) {
    return service.post('/uploadTestRules' + systemName, data, {
        headers: { 'Content-Type': 'application/json' }
    })
}