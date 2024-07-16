const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

app.use(bodyParser.json());
app.use(cors());


// 结合MySQL数据库
const connection = mysql.createConnection({
    host: '8.130.48.78',
    user: 'nodemysql',
    password: 'nodemysql',
    database: 'nodemysql'//数据库名（表的上一层）
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL database: ' + err.stack);
        return;
    }
});

connection.query('select  * from student su', (err, results, fields) => {
    if (err) throw err;
    // 定义POST请求的路由
    app.post('/api', (req, res) => {
        res.send(results);
    });

    // 定义POST请求的路由
    app.get('/api', (req, res) => {
        res.send(results);
    });

    // 启动服务器
    app.listen(3000, () => {
        console.log('Server started on port 3000');
    });
});

connection.end((err) => {
    if (err) {
        console.error('Error closing MySQL database connection: ' + err.stack);
        return;
    }
    console.log('MySQL database connection closed');
});



