'use strict'
// 导出 expressWorker
module.exports = expressWorker
// ddv - 进程模块
const worker = require('ddv-worker')
// http 模块
const http = require('http')
// 导出模块
const express = require('express')
// 导出ws模块
const expressWs = require('express-ws')
// 使用导出创建一个应用
const app = express()
// 创建一个服务
const server = http.createServer()
// 把服务传入 ddv 进程模块，等待监听
worker.server = server
// 导出应用对象
worker.app = app
// 服务新的请求使用app处理
worker.server.on('request', app)
// 使得导出模块支持ws
expressWs(worker.app, worker.server)

function expressWorker (options) {
  return worker
}
