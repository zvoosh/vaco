const VideoFrame = ({
  thumbnail,
  alt,
  imageSrc,
}: {
  thumbnail: string;
  alt: string;
  imageSrc: string;
}) => {
  function loadVideo(wrapper: any) {
    const iframe = document.createElement("iframe");
    iframe.src = `https://drive.google.com/file/d/${imageSrc}/preview`;
    iframe.allow = "autoplay; encrypted-media";
    iframe.allowFullscreen = true;
    iframe.className = "video-iframe";
    wrapper.innerHTML = "";
    wrapper.appendChild(iframe);
  }

  return (
    <div
      className="video-wrapper"
      onClick={() => {
        loadVideo(this);
      }}
    >
      <img src={thumbnail} className="border-none video-frame" alt={alt} />
      <div className="play-button">▶</div>
    </div>
  );
};

export { VideoFrame };
