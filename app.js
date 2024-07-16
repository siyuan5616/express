// 导入express
const express = require('express');
// 导入路由模块
const router = require('./routes/student');
const app = express();
const cors = require('cors');
// 解析表单数据中间件，要放在路由前,要不然post发过来参数获取不到
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
// 挂载路由并加上路由前缀
app.use(cors());
app.use('/student', router)

// 静态文件中间件
app.use(express.static('public'));

// 启动服务器
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
})