import { CiFacebook, CiInstagram, CiMail, CiYoutube } from "react-icons/ci";
import { Carousel } from "antd";
import "antd/dist/reset.css";
import { ReactTyped } from "react-typed";
import image from "../../assets/road.jpg";
import image2 from "../../assets/baloons.jpg";
import image3 from "../../assets/mountins.jpg";
import "../../styles/landing.scss";

const LandingPage = () => {
  return (
    <main
      className="landing-wrapper header-font"
      style={{ overflow: "hidden" }}
    >
      <section className="landing-carousel">
        <Carousel
          autoplay
          dots={false}
          className="carousel"
          pauseOnHover={false}
          draggable={false}
        >
          <img src={image} alt="Portrait of VACO capturized moments" />
          <img src={image2} alt="Portrait of VACO capturized moments" />
          <img src={image3} alt="Portrait of VACO capturized moments" />
        </Carousel>
      </section>

      <section className="landing-headline">
        <h1
          className="w-100 text-center mt-3 font-20"
          style={{ letterSpacing: ".5rem" }}
        >
          VACO
        </h1>
        <div className="w-100 text-center">
          <h2>
            <ReactTyped
              strings={["Live to tell stories"]}
              className="font-14 uppercase pb-2"
              typeSpeed={100}
            />
          </h2>
          <p className="uppercase italic pb-1">
            Photographer & storyteller
          </p>
          <div className="w-100 flex justify-center">
            <a href="/vaco/video" className="landing-btn">
              View work
            </a>
          </div>
        </div>
        <div className="text-white mb-2">
          <CiMail className="mr-2" style={{ transform: "scale(2)" }} />
          <CiFacebook className="mr-2" style={{ transform: "scale(2)" }} />
          <CiInstagram className="mr-2" style={{ transform: "scale(2)" }} />
          <CiYoutube className="" style={{ transform: "scale(2)" }} />
        </div>
      </section>
    </main>
  );
};

export { LandingPage };
