//router配置文件

import Vue from 'vue'
import Router from 'vue-router'
import VueResource from "vue-resource";

//内容组件跳转import
import HelloWorld from '@/components/HelloWorld'
import ProjectProfileList from '@/components/ProjectProfileList'
import newProject from '@/components/newProject'
import Login from '@/components/Login'
import ProjectDetail from '@/components/ProjectDetail'
import ImportRule from '@/components/ImportRule'
import GraphwalkerImport from '@/components/GraphwalkerImport'
import RuleGenerateTestCase from '@/components/RuleGenerateTestCase'
import ResultMatchConfig from '@/components/ResultMatchConfig'

//表明Vue使用router
Vue.use(Router);
Vue.use(VueResource);

export default new Router({
  routes: [
    {
      path: '/HelloWorld',          //跳转路径
      name: 'HelloWorld',  //跳转名字
      component: HelloWorld  //跳转组件
    },
    {
      path:'/ProjectProfileList',
      name:'ProjectProfileList',
      component: ProjectProfileList
    },
     {
      path:'/newProject',
      name:'newProject',
      component: newProject
    },
    {
      path:'/Login',
      name:'Login',
      component: Login
    },
    {
      path:'/ProjectDetail',
      name:'ProjectDetail',
      component: ProjectDetail
    },
    {
      path:'/ImportRule',
      name:'ImportRule',
      component: ImportRule
    },  {
      path:'/GraphwalkerImport',
      name:'GraphwalkerImport',
      component: GraphwalkerImport
    },
    {
      path:'/RuleGenerateTestCase',
      name:'RuleGenerateTestCase',
      component: RuleGenerateTestCase
    },
    {
      path:'/ResultMatchConfig',
      name:'ResultMatchConfig',
      component: ResultMatchConfig
    },

  ]
})
