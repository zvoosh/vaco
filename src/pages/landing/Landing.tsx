import { CiFacebook, CiInstagram, CiMail, CiYoutube } from "react-icons/ci";
import { useNavigate } from "react-router";
import { Carousel } from "antd";
import "antd/dist/reset.css";
import { ReactTyped } from "react-typed";
import image from "../../assets/road.jpg";
import image2 from "../../assets/baloons.jpg";
import image3 from "../../assets/mountins.jpg";
import "../../styles/landing.scss";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-wrapper header-font" style={{ overflow: "hidden" }}>
      <div className="landing-carousel">
        <Carousel
          autoplay
          dots={false}
          className="carousel"
          pauseOnHover={false}
          draggable={false}
        >
          <img loading="eager" src={image} alt="Image 1" />
          <img loading="eager" src={image2} alt="Image 2" />
          <img loading="eager" src={image3} alt="Image 3" />
        </Carousel>
      </div>

      <div className="landing-headline">
        <div
          className="w-100 text-center mt-3 font-20"
          style={{ letterSpacing: ".5rem" }}
        >
          VACO
        </div>
        <div className="w-100 text-center">
          <ReactTyped
            strings={["Live to tell stories"]}
            className="font-14 uppercase pb-2"
            typeSpeed={100}
          />
          <div className="uppercase italic pb-1">
            Photographer & storyteller
          </div>
          <div className="w-100 flex justify-center">
            <div
              className=" mt-1 landing-btn"
              onClick={() => {
                navigate("/video");
                console.log("clicked");
              }}
            >
              View work
            </div>
          </div>
        </div>
        <div className="text-white mb-2">
          <CiMail className="mr-2" style={{ transform: "scale(2)" }} />
          <CiFacebook className="mr-2" style={{ transform: "scale(2)" }} />
          <CiInstagram className="mr-2" style={{ transform: "scale(2)" }} />
          <CiYoutube className="" style={{ transform: "scale(2)" }} />
        </div>
      </div>
    </div>
  );
};

export { LandingPage };
