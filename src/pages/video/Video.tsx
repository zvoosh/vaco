import { useNavigate } from "react-router";
import image from "../../assets/road.jpg";
import image2 from "../../assets/cowboy.jpg";
import image3 from "../../assets/mountain.jpg";
import "../../styles/arial.scss";

const VideoPage = () => {
  const navigate = useNavigate();

  return (
    <div className="text-white w-100 h-100 p-05 pt-2 flex justify-center">
      <div className="w-100 h-100">
        <div
          className="division-card"
          onClick={() => {
            navigate("/video-feature");
          }}
        >
          <img
            src={image}
            alt="image"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <div className="division-overlay">
            <p className="division-overlay-text">FEATURE</p>
          </div>
        </div>
        <div className="division-card" onClick={() => {
            navigate("/video-documentary");
          }}>
          <img
            src={image3}
            alt="image"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <div className="division-overlay">
            <p className="division-overlay-text">DOCUMENTARY</p>
          </div>
        </div>
        <div className="division-card" onClick={() => {
            navigate("/video-commercial");
          }}>
          <img
            src={image2}
            alt="image"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <div className="division-overlay">
            <p className="division-overlay-text">COMMERCIAL</p>
          </div>
        </div>
        <div className="division-card" onClick={() => {
            navigate("/video-event");
          }}>
          <img
            src={image}
            alt="image"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <div className="division-overlay">
            <p className="division-overlay-text">EVENT</p>
          </div>
        </div>
        <div className="division-card" onClick={() => {
            navigate("/video-coorporate");
          }}>
          <img
            src={image2}
            alt="image"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <div className="division-overlay">
            <p className="division-overlay-text">COORPORATE</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { VideoPage };
