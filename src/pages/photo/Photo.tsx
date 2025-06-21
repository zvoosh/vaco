import image from "../../assets/antelope.jpg";
import image2 from "../../assets/mountins.jpg";
import image3 from "../../assets/baloons.jpg";
import "../../styles/arial.scss";

const PhotoPage = () => {
  return (
    <main className="text-white w-100 p-05 pt-2 flex justify-center">
      <div className="w-100 h-100">
        <a className="division-card" href="/vaco/portrait">
          <img
            loading="lazy"
            src={image3}
            alt="Portrait photography thumbnail"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <div className="division-overlay">
            <p className="division-overlay-text">Portrait</p>
          </div>
        </a>
        <a className="division-card" href="/vaco/event">
          <img
            loading="lazy"
            src={image2}
            alt="Portrait photography thumbnail"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <div className="division-overlay">
            <p className="division-overlay-text">Event</p>
          </div>
        </a>
        <a href="/vaco/coorporate" className="division-card">
          <img
            loading="lazy"
            src={image}
            alt="Portrait photography thumbnail"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <div className="division-overlay">
            <p className="division-overlay-text">Corporate</p>
          </div>
        </a>
      </div>
    </main>
  );
};
export { PhotoPage };
