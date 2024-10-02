const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); 
const quizRoutes = require('./src/Routes/quizRoute');

const app = express();



// 미들웨어 설정
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 라우트 설정
app.use('/api', quizRoutes);



const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`서버 시작 포트 - ${PORT}`);
});
