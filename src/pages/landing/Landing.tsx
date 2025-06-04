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
    <div className="w-100 h-100 bg-black text-white flex">
      <div className="landing-carousel">
        <Carousel autoplay dots={false} className="carousel">
          <img src={image} alt="Image 1" />
          <img src={image2} alt="Image 2" />
          <img src={image3} alt="Image 3" />
        </Carousel>
      </div>

      <div className="landing-headline">
        <div className="w-100 text-center mt-3 font-20" style={{letterSpacing: ".5rem"}}>VACO</div>
        <div className="w-100 text-center">
          <ReactTyped
            strings={["Live to tell stories"]}
            className="font-16 uppercase pb-1"
            typeSpeed={100}
            loop
          />
          <div className="uppercase italic pb-1">
            Photographer & storyteller
          </div>
          <div className="w-100 flex justify-center">
            <div
              className=" mt-1 landing-btn"
              onClick={() => {
                navigate("/video");
              }}
            >
              View work
            </div>
          </div>
        </div>
        <div className="text-white mb-3">
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
