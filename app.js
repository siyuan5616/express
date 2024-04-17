// 导入express
const express = require('express');
// 导入路由模块
const router = require('./router');
const app = express();
// 挂载路由并加上路由前缀
app.use('/user', router)
// 启动服务器
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
})