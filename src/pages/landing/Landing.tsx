import { CiFacebook, CiInstagram, CiMail, CiYoutube } from "react-icons/ci";
import image from "../../assets/road.jpg";
import image2 from "../../assets/antelope.jpg";
import "../../styles/landing.scss";
import { useNavigate } from "react-router";
import { Carousel } from "antd";
import "antd/dist/reset.css";

const imageSources = [{ src: image }, { src: image2 }];

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="w-100 h-100 bg-black text-white flex">
      <div style={{ width: "50vw", height: "100vh" }}>
        <Carousel autoplay dots={false} className="carousel">
          <img
            src={image}
            alt="Image 1"
          />
          <img
            src={image2}
            alt="Image 2"
          />
        </Carousel>
      </div>

      <div className="flex flex-column align-center w-50 h-100 justify-between">
        <div className="w-100 text-center mt-3 font-20">VACO</div>
        <div className="w-100 text-center">
          <div className="font-16 uppercase pb-1">Live to tell stories</div>
          <div className="uppercase italic pb-1">
            Photographer & storyteller
          </div>
          <div className="w-100 flex justify-center">
            <div
              className=" mt-1 landing-btn"
              onClick={() => {
                navigate("/contact");
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
          <CiYoutube className="mr-2" style={{ transform: "scale(2)" }} />
        </div>
      </div>
    </div>
  );
};

export { LandingPage };
