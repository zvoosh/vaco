import image from "../../assets/road.jpg";
import image2 from "../../assets/cowboy.jpg";
import image3 from "../../assets/mountain.jpg";
import "../../styles/arial.scss";

const VideoPage = () => {
  return (
    <main className="text-white w-100 pt-2 flex justify-center">
      <h2
        id="video-heading"
        className="visually-hidden"
        style={{ position: "absolute" }}
      >
        Video Project Categories
      </h2>
      <section className="w-100 h-100">
        <a href="/vaco/video-coorporate" className="division-card">
          <img
            loading="lazy"
            src={image}
            alt="Poster image for feature film"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <div className="division-overlay">
            <p className="division-overlay-text">FEATURE</p>
          </div>
        </a>
        <a href="/vaco/video-coorporate" className="division-card">
          <img
            loading="lazy"
            src={image3}
            alt="Poster image for feature film"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <div className="division-overlay">
            <p className="division-overlay-text">DOCUMENTARY</p>
          </div>
        </a>
        <a href="/vaco/video-coorporate" className="division-card">
          <img
            loading="lazy"
            src={image2}
            alt="Poster image for feature film"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <div className="division-overlay">
            <p className="division-overlay-text">COMMERCIAL</p>
          </div>
        </a>
        <a href="/vaco/video-coorporate" className="division-card">
          <img
            loading="lazy"
            src={image}
            alt="Poster image for feature film"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <div className="division-overlay">
            <p className="division-overlay-text">EVENT</p>
          </div>
        </a>
        <a href="/vaco/video-coorporate" className="division-card">
          <img
            loading="lazy"
            src={image2}
            alt="Poster image for feature film"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <div className="division-overlay">
            <p className="division-overlay-text">COORPORATE</p>
          </div>
        </a>
      </section>
    </main>
  );
};

export { VideoPage };
