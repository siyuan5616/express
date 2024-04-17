var express = require('express');
var router = express.Router();
// get请求
router.get('/', function (req, res) {
    // 设置响应头
    res.setHeader('Content-Type', 'application/json;charset=utf-8')
    // 获取请求参数
    console.log(req.query);
    //  HTTP状态码：res.status
    res.status(201).send([{ name: '张三', age: 18, sex: '男' }, { name: '张三', age: 18, sex: '男' }]);

    // 结束
    res.end();
})
// post请求
router.post('/', function (req, res) {
    res.send('Hello World Post!');
})
// put请求
router.put('/', function (req, res) {
    res.send('Hello World Put!');
})
// delete请求
router.delete('/', function (req, res) {
    res.send('Hello World Delete!');
})
module.exports = router;