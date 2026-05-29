const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

// 데이터
const currentPrices = {
    701: { coupang: 429000, gmarket: 435000, elevenst: 420000 },
    702: { coupang: 319000, gmarket: 325000, elevenst: 315000 },
    703: { coupang: 279000, gmarket: 285000, elevenst: 275000 },
    801: { coupang: 199000, gmarket: 205000, elevenst: 195000 },
    802: { coupang: 69000, gmarket: 72000, elevenst: 68000 }
};

app.get('/api/search', (req, res) => {
    res.json(currentPrices);
});

// 🚨 바로 이 부분이 서버를 실행하고 꺼지지 않게 잡아주는 핵심입니다!
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`서버가 ${port}번 포트에서 실행 중입니다.`);
});