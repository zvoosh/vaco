import "../../styles/video.scss";

const VideoDetailsPage = ({
  image,
  title,
  description,
  video,
}: {
  image: string;
  title: string;
  description: string;
  video: string[];
}) => {
  return (
    <div className="w-100 h-100 text-gray normal-font font-12">
      <div className="flex w-100 h-100 flex-column">
        <div className="video-thumbnail">
          <img loading="lazy"
            src={image}
            alt="image1"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        <div className="w-100 flex justify-center">
          <div className="video-details-container">
            <div className="w-100 h-100 pt-2 flex flex-column">
              <div className="font-16 bold p-1 w-100 text-center">{title}</div>
              <div className="video-text-padding w-100">
                <div>{description}</div>
                <div className="">Lorem ipsum dolor sit amet.</div>
              </div>
              <div className="flex flex-column w-100">
                {video &&
                  video.map((item, index) => (
                    <div key={index} className="w-100 flex video-video-padding">
                      <video className="w-100 h-100 p-1" controls preload="auto">
                        <source src={item} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { VideoDetailsPage };
