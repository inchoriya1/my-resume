// 카드를 뒤집는 동작을 정의하는 함수입니다.
function flipCard() {
    const card = document.getElementById('myCard');
    card.classList.toggle('is-flipped');
}

// 페이지가 로드되면 카드가 부드럽게 나타나는 효과
document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.card-container');
    // 처음엔 투명하게 시작
    container.style.opacity = '0';
    container.style.transform = 'translateY(30px)';
    container.style.transition = 'opacity 0.8s ease, transform 0.8s ease';

    // 잠깐 기다린 후 부드럽게 나타남
    setTimeout(() => {
        container.style.opacity = '1';
        container.style.transform = 'translateY(0)';
    }, 100);
});
