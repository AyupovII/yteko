export const videoController=()=>{
  const videoBlock = document.querySelector('.video-block');
  const video = document.querySelector('.video-block video');
  const playBtn = document.querySelector('.video-block__play');

  if (!videoBlock) return;
  playBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    video.play();
    playBtn.style.display = 'none';
    if (video.paused) {
      playBtn.style.display = 'flex';
    }
  })
  videoBlock.addEventListener('click', (e) => {
    if (video.played) {
      video.pause();
      playBtn.style.display = 'flex';
    }
  })
}
