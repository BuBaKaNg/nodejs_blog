


const morgan = require('morgan');
//lấy thư viện path để quản lí file
const path = require('path');

//Đi vào thư mục node modules lấy thư viện ra 1 function
const express = require('express'); 

//ghi log

const {engine} = require('express-handlebars');

//chạy function express trả về một đối tượng app website
const app = express();
const port = 3000;

//Gặp part này thì kiểm tra file tĩnh
app.use(express.static(path.join(__dirname,'public')));

//Run ở cổng nào

app.use(morgan('combined'))
console.log(path.join(__dirname,'public'));

app.engine('hbs', engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'\\resource\\views'))

// định nghĩa route vào website
app.get('/', (req, res) => {
  res.render('home');
})


app.get('/news', (req, res) => {
  res.render('news');
})

// App chạy từ express và lắng nghe trên cổng 3000
//127.0.0.1 - localhost
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})