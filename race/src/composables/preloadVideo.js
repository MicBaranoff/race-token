export function usePreloadVideo() {
  const preloadVideos = (videoUrls) => {
    const preloadPromises = videoUrls.map((url) => {
      return new Promise((resolve, reject) => {
        const video = document.createElement('video');
        video.src = url;
        video.preload = 'auto';
        video.muted = true;
        video.setAttribute('playsinline', true);
        video.style.display = 'none';
        document.body.appendChild(video);

        video.onloadedmetadata = () => {
          resolve(url);
          document.body.removeChild(video);
        };

        video.onerror = (error) => {
          reject(error);
        };
      });
    });

    return Promise.all(preloadPromises);
  };

  return {
    preloadVideos,
  };
}
