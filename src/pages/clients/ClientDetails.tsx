import { Carousel } from "antd";
import video from "../../assets/9535416-uhd_3840_2160_30fps.mp4";
import "../../styles/event.scss";
import "../../styles/clients.scss";
import { useParams } from "react-router";
import { useRef, useState } from "react";
import { CiFacebook, CiInstagram, CiMail, CiYoutube } from "react-icons/ci";

const videoSources = [{ src: video }, { src: video }, { src: video }];

interface CarouselRef {
  goTo: (slide: number, dontAnimate?: boolean) => void;
  next: () => void;
  prev: () => void;
  autoPlay: () => void;
  innerSlider: any;
  slickGoTo: (slide: number, dontAnimate?: boolean) => void;
  slickNext: () => void;
  slickPrev: () => void;
  slickPause: () => void;
  slickPlay: () => void;
}
const ClientDetailsPage = () => {
  const carouselRef = useRef<CarouselRef>(null!);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const { client } = useParams();

  const handleVideoPlaying = () => {
    setVideoPlaying(true);
    carouselRef.current?.slickPause();
  };

  const handleVideoPauseOrEnd = () => {
    setVideoPlaying(false);
    carouselRef.current?.slickPlay();
  };

  return (
    <div className="w-100 h-100 text-gray ">
      <div className="flex justify-center w-100 h-100">
        <div className="client-details-container">
          <div>
            <div className="font-20 normal-font pb-2 text-white w-100">
              {client}
            </div>
            <div className="pb-2 normal-font font-12">
              <div className="pb-1">
                "The world will not be destroyed by those who do evil, but by
                those who watch them without doing anything." - Albert Einstein
                Planet
              </div>
              <div className="pb-1">
                Earth is 4.5 billion years old. Mankind is about 140 thousand
                years old. If we compress the Earth's existence into a normal
                full day of 24 hours, then we’ve been on this planet for... 2.5
                seconds. In 2.5 seconds we’ve become the dominant species with a
                rapidly growing population, causing a catastrophic impact on the
                environment. We have created the industrial revolution and
                burned fossil fuels creating more carbon in the atmosphere than
                ever before. We have caused global warming at a record pace,
                endangering our own existence.
              </div>
            </div>
            <Carousel
              autoplay={!videoPlaying}
              autoplaySpeed={3000}
              ref={carouselRef}
              arrows={true}
              dots={false}
            >
              {videoSources.map((video, idx) => (
                <div key={idx}>
                  <video
                    className="w-100 mb-1"
                    controls
                    onPlaying={handleVideoPlaying}
                    onPause={handleVideoPauseOrEnd}
                    onEnded={handleVideoPauseOrEnd}
                  >
                    <source src={video.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              ))}
            </Carousel>
            <div className="text-white pl-2 pb-2">
              <CiMail className="mr-2" style={{ transform: "scale(2)" }} />
              <CiFacebook className="mr-2" style={{ transform: "scale(2)" }} />
              <CiInstagram className="mr-2" style={{ transform: "scale(2)" }} />
              <CiYoutube className="mr-2" style={{ transform: "scale(2)" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ClientDetailsPage };
