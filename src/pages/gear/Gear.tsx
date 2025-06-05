import { CiFacebook, CiInstagram, CiMail, CiYoutube } from "react-icons/ci";
import "../../styles/gear.scss";

const GearPage = () => {
  return (
    <div className="w-100 h-100 text-gray">
      <div className="flex justify-center w-100 h-100">
        <div className="basic-container">
          <div>
            <div className="font-20 normal-font pb-2 text-white w-100">
              Gear
            </div>
            <div className="pb-2 content-font">
              <div className="pb-1">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aspernatur magnam non itaque beatae, facilis sit? Cum odit ad
                ullam suscipit ducimus facere, numquam dolores quasi porro.
                Labore quae necessitatibus nam?
              </div>
              <div className="pb-1">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
                cumque distinctio sapiente debitis sint tempore dolorum ab. Esse
                veritatis a ratione dolorem reprehenderit. Iusto repudiandae
                eligendi eveniet. Reprehenderit ipsum dolor repellat vel
                recusandae, quis dicta esse corrupti alias ratione obcaecati
                iste voluptas veritatis quae eius! Repellendus harum similique
                omnis impedit?
              </div>
              <div className="pb-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                nemo non repudiandae hic voluptatibus! Quae, delectus doloribus?
                Consequatur reprehenderit officia pariatur, ratione consequuntur
                cumque ipsam distinctio. Dolor obcaecati cum maiores, est nemo
                esse, dolorem eveniet non delectus facilis iste iusto fugiat,
                facere illum sequi quae fugit in. Quae quo iusto excepturi qui,
                in adipisci, placeat provident omnis minima dicta beatae!
              </div>
            </div>
            <div className="text-white  pb-2">
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

export { GearPage };
