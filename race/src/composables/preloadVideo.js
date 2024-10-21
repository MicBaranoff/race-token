export function usePreloadVideo() {
  const preloadVideos = (videoUrls) => {
    const preloadPromises = videoUrls.map((url) => {
      return new Promise((resolve, reject) => {
        const video = document.createElement('video');
        video.src = url;
        video.preload = 'auto';
        video.muted = true;
        video.playsInline = true;
        video.style.display = 'none';
        document.body.appendChild(video);

        video.oncanplaythrough = () => {
          document.body.removeChild(video);
          resolve(url);
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
