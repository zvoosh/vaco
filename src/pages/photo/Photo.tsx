import { useNavigate } from "react-router";
import image from "../../assets/antelope.jpg";
import "../../styles/arial.scss";

const PhotoPage = () => {
  const navigate = useNavigate();
  return (
    <div className="text-white w-100 h-100 pt-2 flex justify-center">
      <div className="w-100 h-100">
        <div className="division-card" onClick={()=> {
          navigate('/portrait')
        }}>
          <img
            src={image}
            alt="image"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <div className="division-overlay">
            <p className="division-overlay-text">Portrait</p>
          </div>
        </div>
        <div className="division-card"  onClick={()=> {
          navigate('/event')
        }}>
          <img
            src={image}
            alt="image"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <div className="division-overlay">
            <p className="division-overlay-text">Event</p>
          </div>
        </div>
        <div className="division-card" onClick={()=> {
          navigate('/coorporate')
        }}>
          <img
            src={image}
            alt="image"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <div className="division-overlay">
            <p className="division-overlay-text">Coorporate</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export { PhotoPage };
