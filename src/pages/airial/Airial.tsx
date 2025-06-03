import { useContext } from "react";
import image from "../../assets/goalkeeper.jpg";
import video from "../../assets/9535416-uhd_3840_2160_30fps.mp4";
import { MyContext } from "../../services";
import "../../styles/arial.scss";

const AirialPage = () => {
  const ctx = useContext(MyContext);
  return (
    <div className="text-white w-100 pt-2 flex justify-center">
      {!ctx?.value && (
        <div className="w-100 h-100">
          <div
            className="division-card"
            onClick={() => {
              ctx?.setValue(true);
            }}
          >
            <img
              src={image}
              alt="image"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div className="division-overlay">
              <p className="division-overlay-text">DRON IN AIR</p>
            </div>
          </div>
          <div
            className="division-card"
            onClick={() => {
              ctx?.setValue(true);
            }}
          >
            <img
              src={image}
              alt="image"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div className="division-overlay">
              <p className="division-overlay-text">DRON IN FOREST</p>
            </div>
          </div>
          <div
            className="division-card"
            onClick={() => {
              ctx?.setValue(true);
            }}
          >
            <img
              src={image}
              alt="image"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div className="division-overlay">
              <p className="division-overlay-text">DRON IN HOUSE</p>
            </div>
          </div>
          <div
            className="division-card"
            onClick={() => {
              ctx?.setValue(true);
            }}
          >
            <img
              src={image}
              alt="image"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div className="division-overlay">
              <p className="division-overlay-text">BUILDING DRON</p>
            </div>
          </div>
          <div
            className="division-card"
            onClick={() => {
              ctx?.setValue(true);
            }}
          >
            <img
              src={image}
              alt="image"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div className="division-overlay">
              <p className="division-overlay-text">DRON UPSIDE DOWN</p>
            </div>
          </div>
          <div
            className="division-card"
            onClick={() => {
              ctx?.setValue(true);
            }}
          >
            <img
              src={image}
              alt="image"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div className="division-overlay">
              <p className="division-overlay-text">DRON IN RIVER</p>
            </div>
          </div>
        </div>
      )}
      {ctx?.value && (
        <div className="w-100 flex justify-center">
          <div className="mt-1 pl-2 pr-2 ">
            <div style={{ maxWidth: "75vw" }}>
              <video
                className="w-100 h-auto object-cover fade-in-on-load"
                controls
                autoPlay
              >
                <source src={video} typeof="video/mp4" />
                Your browser does not support the video tag
              </video>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export { AirialPage };
