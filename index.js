
//Đi vào thư mục node modules lấy thư viện ra 1 function
const express = require('express'); 

//chạy function express trả về một đối tượng app website
const app = express()

//Run ở cổng nào
const port = 3000


// định nghĩa route vào website
app.get('/', (req, res) => {
  var a = 1;
  var b = 2;
  var c = a + b;
  return res.send('Hello World!')
})


// App chạy từ express và lắng nghe trên cổng 3000
//127.0.0.1 - localhost
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})