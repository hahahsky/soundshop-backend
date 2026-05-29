// 1. 기본 50개 추천 라인업 (카테고리별 10개 + 기본 가격 포함)
const engineProducts = [
    { id: 101, category: "speaker", rank: 1, name: "마셜 액톤 III", specs: "블루투스 5.2 / 프리미엄 감성", price: 410000 },
    { id: 102, category: "speaker", rank: 2, name: "JBL Flip 6", specs: "휴대용 / IP67 방수방진", price: 139000 },
    { id: 103, category: "speaker", rank: 3, name: "오디오엔진 A2+", specs: "북쉘프 스피커 / DAC 내장", price: 340000 },
    { id: 104, category: "speaker", rank: 4, name: "제네렉 8010A", specs: "전문가용 모니터 스피커", price: 720000 },
    { id: 105, category: "speaker", rank: 5, name: "하만카돈 오라 스튜디오 4", specs: "360도 사운드 / 무드등", price: 290000 },
    { id: 106, category: "speaker", rank: 6, name: "보스 사운드링크 미니 2", specs: "강력한 베이스 / 알루미늄", price: 250000 },
    { id: 107, category: "speaker", rank: 7, name: "Apple 홈팟 2세대", specs: "스마트 스피커 / 공간 음향", price: 430000 },
    { id: 108, category: "speaker", rank: 8, name: "브리츠 BR-1000A", specs: "가성비 PC 스피커 2채널", price: 65000 },
    { id: 109, category: "speaker", rank: 9, name: "크리에이티브 PEBBLE V3", specs: "USB-C 전원 / 고효율 스피커", price: 49000 },
    { id: 110, category: "speaker", rank: 10, name: "마셜 스탠모어 III", specs: "거실용 프리미엄 스피커", price: 580000 },

    { id: 201, category: "headset", rank: 1, name: "소니 WH-1000XM5", specs: "무선 헤드폰 / 프리미엄 ANC", price: 399000 },
    { id: 202, category: "headset", rank: 2, name: "로지텍 G PRO X 2", specs: "게이밍 무선 / 그래핀 드라이버", price: 195000 },
    { id: 203, category: "headset", rank: 3, name: "보스 QC 울트라", specs: "초몰입형 오디오 / 노캔 종결", price: 435000 },
    { id: 204, category: "headset", rank: 4, name: "Apple 에어팟 맥스", specs: "알루미늄 바디 / H1 칩셋", price: 759000 },
    { id: 205, category: "headset", rank: 5, name: "레이저 블랙샤크 V2 프로", specs: "초광대역 마이크 / E-sports", price: 289000 },
    { id: 206, category: "headset", rank: 6, name: "오디오테크니카 ATH-M50x", specs: "스튜디오 모니터링 표준", price: 175000 },
    { id: 207, category: "headset", rank: 7, name: "스틸시리즈 아크티스 노바 7", specs: "동시 무선 연결 / 가벼움", price: 220000 },
    { id: 208, category: "headset", rank: 8, name: "하이퍼엑스 클라우드 III", specs: "극강의 착용감 / 120시간 배터리", price: 185000 },
    { id: 209, category: "headset", rank: 9, name: "젠하이저 모멘텀 4", specs: "오디오필 사운드 / 60시간 배터리", price: 360000 },
    { id: 210, category: "headset", rank: 10, name: "커세어 보이드 RGB 엘리트", specs: "7.1 서라운드 / 편안한 핏", price: 135000 },

    { id: 301, category: "earphone", rank: 1, name: "Apple 에어팟 프로 2세대", specs: "H2 칩셋 / 강력한 ANC", price: 298000 },
    { id: 302, category: "earphone", rank: 2, name: "소니 WF-1000XM5", specs: "골전도 센서 / 하이레졸루션", price: 289000 },
    { id: 303, category: "earphone", rank: 3, name: "갤럭시 버즈3 프로", specs: "블레이드 라이트 / 고음질", price: 310000 },
    { id: 304, category: "earphone", rank: 4, name: "젠하이저 MTW 4", specs: "무손실 오디오 / 오라캐스트", price: 345000 },
    { id: 305, category: "earphone", rank: 5, name: "QCY T13X", specs: "극가성비 / 30시간 연속 재생", price: 19800 },
    { id: 306, category: "earphone", rank: 6, name: "보스 울트라 오픈 이어버드", specs: "귀걸이형 / 주변음 허용 특화", price: 380000 },
    { id: 307, category: "earphone", rank: 7, name: "앤커 리버티 4", specs: "심박수 측정 / ACAA 3.0", price: 125000 },
    { id: 308, category: "earphone", rank: 8, name: "수월우 메이(May)", 심사: "유선 / DSP 내장 C타입", price: 95000 },
    { id: 309, category: "earphone", rank: 9, name: "파이널 E3000", specs: "유선 / 자연스러운 공간감", price: 48000 },
    { id: 310, category: "earphone", rank: 10, name: "아즈라 아셀라", specs: "유선 게이밍 이어폰 / 차음성", price: 89000 },

    { id: 401, category: "mic", rank: 1, name: "슈어 SM7B", specs: "다이내믹 보컬 마이크 / 스튜디오", price: 549000 },
    { id: 402, category: "mic", rank: 2, name: "블루 예티 X", specs: "콘덴서 / 4가지 수음 패턴", price: 210000 },
    { id: 403, category: "mic", rank: 3, name: "로드 NT-USB Mini", specs: "초소형 콘덴서 / 팝필터 내장", price: 145000 },
    { id: 404, category: "mic", rank: 4, name: "하이퍼엑스 쿼드캐스트 S", specs: "RGB 라이팅 / 터치 뮤트", price: 195000 },
    { id: 405, category: "mic", rank: 5, name: "슈어 MV7", specs: "USB & XLR 하이브리드 지원", price: 348000 },
    { id: 406, category: "mic", rank: 6, name: "엘가토 웨이브 3", specs: "클립가드 기술 / 방송용 특화", price: 220000 },
    { id: 407, category: "mic", rank: 7, name: "레이저 세이렌 V3", specs: "스트리밍용 / 고감도 수음", price: 189000 },
    { id: 408, category: "mic", rank: 8, name: "오디오테크니카 AT2020", specs: "입문용 콘덴서 마이크의 표준", price: 169000 },
    { id: 409, category: "mic", rank: 9, name: "보야 BY-M1", specs: "핀 마이크 / 스마트폰, 카메라 호환", price: 25000 },
    { id: 410, category: "mic", rank: 10, name: "컴소닉 필라 CM-5010", specs: "구스넥 회의용 가성비 마이크", price: 38000 },

    { id: 501, category: "turntable", rank: 1, name: "오디오테크니카 AT-LP60X", specs: "입문용 완전 자동 턴테이블", price: 159000 },
    { id: 502, category: "turntable", rank: 2, name: "크로슬리 보야저", specs: "가방형 빈티지 감성", price: 99000 },
    { id: 503, category: "turntable", rank: 3, name: "데논 DP-300F", specs: "벨트 드라이브 / MM 카트리지", price: 430000 },
    { id: 504, category: "turntable", rank: 4, name: "사운드룩 SLT-100BT", specs: "블루투스 송신 / 스피커 일체형", price: 119000 },
    { id: 505, category: "turntable", rank: 5, name: "소니 PS-LX310BT", specs: "원스텝 자동 재생 / 무선 연동", price: 299000 },
    { id: 506, category: "turntable", rank: 6, name: "인켈 PM-9900", specs: "침압 조절 / 디지털 녹음", price: 320000 },
    { id: 507, category: "turntable", rank: 7, name: "오디오테크니카 AT-LP120X", specs: "다이렉트 드라이브 / 프로용", price: 419000 },
    { id: 508, category: "turntable", rank: 8, name: "티악 TN-180BT", specs: "고밀도 목재 바디 / 오토 리턴", price: 189000 },
    { id: 509, category: "turntable", rank: 9, name: "레가 플래너 1", specs: "하이엔드 수제작 턴테이블", price: 480000 },
    { id: 510, category: "turntable", rank: 10, name: "아이온 오디오 프리미어 LP", specs: "우드 마감 / 올인원 플레이어", price: 139000 }
];

let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
let globalReviews = JSON.parse(localStorage.getItem('globalReviews')) || {};

window.onload = () => {
    // 상품별 기본 가짜 리뷰 시드 생성
    if (Object.keys(globalReviews).length === 0) {
        engineProducts.forEach(p => globalReviews[p.id] = ["음질이 너무 좋습니다!", "가성비 최고네요.", "배송이 빠릅니다."]);
        localStorage.setItem('globalReviews', JSON.stringify(globalReviews));
    }
    updateWishCount();
    triggerSearch(false);
};

// 엔터키 감지 시 검색 트리거
function handleSearchKeyPress(event) {
    if (event.key === 'Enter') triggerSearch(true);
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// 💡 통합 검색 및 렌더링 엔진 (로컬 데이터 + 실시간 네이버 API)
async function triggerSearch(isEnter) {
    const searchKey = document.getElementById('searchInput').value.trim().toLowerCase();
    const category = document.getElementById('categoryFilter').value;
    const sortOrder = document.getElementById('sortEngine').value;
    const grid = document.getElementById('productGrid');

    // 1. 내 홈페이지(50개) 데이터 먼저 찾기
    let localMatches = engineProducts.filter(p => {
        const matchCat = category === 'all' || p.category === category;
        const matchKey = searchKey === "" || p.name.toLowerCase().includes(searchKey);
        return matchCat && matchKey;
    });

    // 2. 만약 내 홈페이지에 검색 결과가 없고 '엔터'를 쳤다면 -> 네이버로 통신!
    if (searchKey !== "" && localMatches.length === 0) {
        if (!isEnter) return; // 글자를 치는 중에는 네이버 호출 방지
        
        grid.innerHTML = `<div style="grid-column: 1/-1; text-align:center; padding:20px;">🔍 네이버 쇼핑에서 실시간 이미지와 가격을 불러오는 중입니다...</div>`;
        
        try {
            // Render에 배포한 내 백엔드 서버를 통해 네이버 API 찌르기
            const response = await fetch(`https://soundshop-backend.onrender.com/api/search?q=${encodeURIComponent(searchKey)}`);
            const naverItems = await response.json();
            
            if (!naverItems || naverItems.length === 0) {
                grid.innerHTML = `<div style="grid-column: 1/-1; text-align:center; padding:20px;">❌ 검색 결과가 없습니다. 다른 키워드로 검색해 보세요.</div>`;
                return;
            }

            // 👑 네이버 스토어 진짜 사진과 가격으로 렌더링
            grid.innerHTML = naverItems.map((item, index) => {
                const cleanTitle = item.title.replace(/<[^>]*>/g, '');
                const realPrice = parseInt(item.lprice);

                return `
                <div class="product-card">
                    <img src="${item.image}" alt="${cleanTitle}" style="width:100%; height:180px; object-fit:contain; border-radius:8px; margin-bottom:10px;">
                    <h3>[네이버 검색 ${index + 1}위] ${cleanTitle}</h3>
                    <p class="specs">브랜드: ${item.brand || '정보없음'} / 판매처: ${item.mallName}</p>
                    <p style="color: #e63946; font-weight: bold; font-size: 1.15em;">실시간 최저가: ${realPrice.toLocaleString()}원</p>
                    
                    <button class="wish-btn" onclick="addToWishlist('naver_${index}', '${cleanTitle.replace(/'/g, "\\'")}', ${realPrice})">❤️ 장바구니 찜</button>
                    <button class="buy-btn" onclick="window.open('${item.link}', '_blank')" style="margin-top:10px;">🛒 ${item.mallName} 구매가기</button>
                </div>
                `;
            }).join('');
        } catch (e) {
            grid.innerHTML = `<div style="grid-column: 1/-1; text-align:center; padding:20px; color:red;">서버와 연결할 수 없습니다. 백엔드가 실행 중인지 확인하세요.</div>`;
        }
        return; // 외부 검색이 끝났으므로 함수 종료
    }

    // 3. 내 홈페이지 기본 50개 상품 렌더링
    if (sortOrder === 'rank') localMatches.sort((a, b) => a.rank - b.rank);
    if (sortOrder === 'price_asc') localMatches.sort((a, b) => a.price - b.price);
    if (sortOrder === 'price_desc') localMatches.sort((a, b) => b.price - a.price);

    grid.innerHTML = localMatches.map(p => {
        const reviews = globalReviews[p.id] || [];
        const emojis = { speaker: "🔊", headset: "🎧", earphone: "🎵", mic: "🎙️", turntable: "📻" };
        const emoji = emojis[p.category];

        return `
        <div class="product-card">
            <div style="width:100%; height:150px; background:#f1f3f5; display:flex; align-items:center; justify-content:center; border-radius:8px; font-size:4em; margin-bottom:10px;">${emoji}</div>
            <h3>[${p.rank}위] ${p.name}</h3>
            <p class="specs">${p.specs}</p>
            <p style="color: #e63946; font-weight: bold; font-size: 1.15em;">기본 최저가: ${p.price.toLocaleString()}원</p>
            <p style="font-size: 0.85em; color: #6c757d; margin-bottom: 5px;">💡 이름 복사 후 상단 검색창에 엔터를 쳐서 네이버 실시간 비교를 해보세요!</p>
            
            <button class="wish-btn" onclick="addToWishlist(${p.id}, '${p.name}', ${p.price})">❤️ 장바구니 찜</button>
            <button class="buy-btn" onclick="document.getElementById('searchInput').value='${p.name}'; triggerSearch(true);" style="margin-top:10px;">🔍 네이버 실시간 검색/사진 조회</button>
            
            <div class="review-box">
                <h4 onclick="toggleReviewSection(${p.id})" style="cursor:pointer; color:#007bff; text-decoration:underline; font-size:0.9em; margin-top:15px;">
                    💬 사용자 후기 보기 (${reviews.length}개)
                </h4>
                <div id="reviewContainer-${p.id}" style="display:none; margin-top:8px; background:#fff; padding:10px; border:1px solid #ddd; border-radius:6px; max-height:120px; overflow-y:auto;">
                    <ul style="list-style:none; padding:0; font-size:0.85em; color:#495057;">
                        ${reviews.map(r => `<li style="border-bottom:1px solid #dee2e6; padding:4px 0;">⭐ ${r}</li>`).join('')}
                    </ul>
                    <div style="display:flex; margin-top:8px; gap:4px;">
                        <input type="text" id="reviewInput-${p.id}" placeholder="직접 후기 작성..." style="flex:1; padding:4px; font-size:0.8em; border:1px solid #ced4da; outline:none;">
                        <button onclick="addNewReview(${p.id})" style="padding:4px 10px; font-size:0.8em; background:#333; color:#fff; border:none; cursor:pointer;">등록</button>
                    </div>
                </div>
            </div>
        </div>
        `;
    }).join('');
}

// 리뷰 섹션 토글
function toggleReviewSection(id) {
    const container = document.getElementById(`reviewContainer-${id}`);
    container.style.display = container.style.display === 'none' ? 'block' : 'none';
}

// 사용자 후기 추가
function addNewReview(id) {
    const input = document.getElementById(`reviewInput-${id}`);
    const text = input.value.trim();
    if (!text) return alert("후기 내용을 입력해주세요.");
    
    globalReviews[id].push(text);
    localStorage.setItem('globalReviews', JSON.stringify(globalReviews));
    input.value = '';
    triggerSearch(false); 
}

// 장바구니 관련 기능
function addToWishlist(id, name, price) {
    wishlist.push({ id, name, price });
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    updateWishCount();
    alert(`[${name}] 상품이 장바구니에 담겼습니다.`);
}
function updateWishCount() { document.getElementById('wishCount').innerText = wishlist.length; }
function toggleWishlist() {
    const modal = document.getElementById('wishlistModal');
    modal.style.display = modal.style.display === 'none' ? 'block' : 'none';
    const listHtml = wishlist.map((item, index) => `<li>${item.name} - ${item.price.toLocaleString()}원 <button onclick="removeWish(${index})" style="padding:2px 5px; cursor:pointer; background:none; border:1px solid #aaa; border-radius:3px; margin-left:10px;">❌</button></li>`).join('');
    document.getElementById('wishlistItems').innerHTML = listHtml || "<li>장바구니가 비어 있습니다.</li>";
    const total = wishlist.reduce((sum, item) => sum + item.price, 0);
    document.getElementById('totalPrice').innerText = total.toLocaleString();
}
function removeWish(index) {
    wishlist.splice(index, 1);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    updateWishCount();
    toggleWishlist();
    toggleWishlist();
}