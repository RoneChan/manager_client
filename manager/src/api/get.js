// 导入axios配置
import service from '../utils/request'
import * as url from "url";

// 登录
export function loginTosystem(username, password) {
    return service.get('/login/loginTosystem', {
        headers: { 'Content-Type': 'application/json' },
        params: {
            username: username,
            password: password
        }
    })
}

// 获取登录人员姓名
export function findName(username) {
    return service.get('/login/findName', {
        headers: { 'Content-Type': 'application/json'},
        params: {
            username: username
        }
    })
}

// 查找所有学生成绩
// export function findStudentScoreInfo() {
//   return service.get('/ruleGenerateTestCase/findStudentScoreInfo', {
//     headers: { 'Content-Type': 'application/json' }
//   })
// }

//test连通性
export function ruleGenerateTestCase() {
  return service.get('/ruleGenerateTestCase/generateTestCase', {
    headers: { 'Content-Type': 'application/json' }
  })
}

//获取测试规则
export function getTestRules(systemVersion, tradeName) {
  return service.get('/ruleGenerateTestCase/getTestRules', {
    headers: { 'Content-Type': 'application/json' },
    params: {
      systemVersion: systemVersion,
      tradeName: tradeName
    }
  })
}


