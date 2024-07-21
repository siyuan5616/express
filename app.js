// 导入express
const express = require('express');
// 导入路由模块
const router = require('./routes/student');
const app = express();
const cors = require('cors');

// 模板引擎
// 1. 将 ejs 设置为默认的模板引擎
app.set('view engine', 'ejs')
// 2. 设置模板引擎的存放处
app.set('views', './views')

// 解析表单数据中间件，要放在路由前,要不然post发过来参数获取不到
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// 挂载路由并加上路由前缀
app.use(cors());
app.use('/student', router)

// 静态文件中间件
app.use(express.static('public'));

// 模板引擎  http://localhost:3000/login
app.get('/login', (req, res) => {
    res.render('login', { username: '派蒙', age: 18 })
})
const homeList = [
    { id: 1, name: '上海' },
    { id: 2, name: '北京' },
    { id: 3, name: '南京' }
]
// 模板引擎代码传参 home.ejs
app.get('/', (request, response) => {

    response.render('home', { homeList: homeList })
})

// 启动服务器
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
})