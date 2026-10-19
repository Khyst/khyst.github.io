'use strict';
document.getElementById('year').textContent = new Date().getFullYear();
document.querySelectorAll('video').forEach(video => {
  video.addEventListener('play', () => {
    document.querySelectorAll('video').forEach(other => { if (other !== video) other.pause(); });
  });
});
document.querySelectorAll('.gif-load').forEach(button => {
  button.addEventListener('click', () => {
    const image = new Image();
    image.className = 'gif-demo';
    image.alt = 'HD-Map 지도 위 다중 차량의 전역 경로 계획 시각화 데모';
    button.disabled = true;
    button.textContent = '데모를 불러오는 중…';
    image.addEventListener('load', () => button.replaceWith(image), { once: true });
    image.addEventListener('error', () => {
      button.disabled = false;
      button.textContent = '불러오지 못했습니다. 다시 시도하기';
    }, { once: true });
    image.src = button.dataset.src;
  });
});
