'use strict';

// Footer: keep the copyright year current.
const year = document.getElementById('year');
if (year) {
  year.textContent = new Date().getFullYear();
}

// Project videos: play one demo at a time.
const videos = document.querySelectorAll('video');
videos.forEach(video => {
  video.addEventListener('play', () => {
    videos.forEach(other => {
      if (other !== video) {
        other.pause();
      }
    });
  });
});

// Large GIF: download only after an explicit click, with a retry on failure.
document.querySelectorAll('.gif-load').forEach(button => {
  button.addEventListener('click', () => {
    const image = new Image();
    image.className = 'gif-demo';
    image.alt = 'HD-Map 지도 위 다중 차량의 전역 경로 계획 시각화 데모';
    button.disabled = true;
    button.textContent = '데모를 불러오는 중…';

    image.addEventListener('load', () => {
      button.replaceWith(image);
    }, { once: true });

    image.addEventListener('error', () => {
      button.disabled = false;
      button.textContent = '불러오지 못했습니다. 다시 시도하기';
    }, { once: true });

    image.src = button.dataset.src;
  });
});
