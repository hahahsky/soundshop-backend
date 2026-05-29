const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

// 👑 발급받으신 네이버 API 키를 코드가 바로 인식하도록 적용했습니다!
const NAVER_CLIENT_ID = 'KF5yyMLM_MUYjmuh24ia'; 
const NAVER_CLIENT_SECRET = 'ekuTFSjgZF';

// 프론트엔드의 검색 요청을 받아 네이버로 전달하는 핵심 API 통로
app.get('/api/search', async (req, res) => {
    const query = req.query.q;
    
    if (!query) {
        return res.json([]);
    }

    try {
        const response = await fetch(`https://openapi.naver.com/v1/search/shop.json?query=${encodeURIComponent(query)}&display=10`, {
            headers: {
                'X-Naver-Client-Id': NAVER_CLIENT_ID,
                'X-Naver-Client-Secret': NAVER_CLIENT_SECRET
            }
        });

        const data = await response.json();
        res.json(data.items || []); // 네이버의 진짜 검색 결과를 프론트로 전송
    } catch (error) {
        console.error("네이버 API 호출 실패:", error);
        res.status(500).json({ error: "실시간 데이터를 가져오지 못했습니다." });
    }
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`서버가 ${port}번 포트에서 실행 중입니다.`);
});