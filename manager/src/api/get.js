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

//test连通性
export function ruleGenerateTestCase() {
  return service.get('/ruleGenerateTestCase/generateTestCase', {
    headers: { 'Content-Type': 'application/json' }
  })
}

//通过Rule生成测试用例
export function generateTestCaseByPICT(systemVersion, tradeName) {
  return service.get('/ruleGenerateTestCase/generateTestCaseByPICT', {
     headers: { 'Content-Type': 'application/json' },
    params: {
      systemVersion: systemVersion,
      tradeName: tradeName
    }
   })
}

//添加结果映射字典信息
export function addMatchConfig(systemName,matchingResultKey,resultDetailDes, userName) {
  return service.get('/resultMatchConfig/addMatchConfig', {
    headers: { 'Content-Type': 'application/json' },
    params: {
      systemName: systemName,
      matchingResultKey: matchingResultKey,
      resultDetailDes: resultDetailDes,
      userName: userName
    }
  })
}

//获取结果映射字典
export function getResultDetails(systemName) {
  return service.get('/resultMatchConfig/getResultDetails', {
    headers: { 'Content-Type': 'application/json' },
    params: {
      systemName: systemName
    }
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

//获取下载文件信息
export function getDownloadFile(systemVersion, tradeName,fileType) {
  return service.get('/getDownloadFile', {
    headers: { 'Content-Type': 'application/json' },
    params: {
      systemVersion: systemVersion,
      tradeName: tradeName,
      fileType:fileType
    }
  })
}

