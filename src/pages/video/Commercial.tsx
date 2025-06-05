import video from "../../assets/9535416-uhd_3840_2160_30fps.mp4";
import image2 from "../../assets/cowboy.jpg";
import "../../styles/video.scss";
import { CiFacebook, CiInstagram, CiMail, CiYoutube } from "react-icons/ci";

const CommercialPage = () => {
  return (
    <div className="w-100 h-100 text-gray normal-font font-12">
      <div className="flex w-100 h-100">
        <div className="videos-details-container">
          <div className="video-thumbnail">
            <img
              src={image2}
              alt="image1"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div className="w-100 flex justify-center">
            <div className="w-50">
              <div className="flex flex-column justify-center">
                <div className="font-16 bold p-1 w-100 text-center">
                  Lorem, ipsum.
                </div>
                <div
                  className="p-5 pt-1 w-100"
                  style={{ textAlign: "justify" }}
                >
                  <div className="">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Illo odio expedita ducimus aspernatur impedit veniam
                    adipisci dicta quam itaque molestias reiciendis alias
                    repellendus repudiandae, praesentium sint deleniti esse ex
                    soluta minima dolor. Veritatis aperiam iste beatae debitis
                    perferendis sit similique praesentium dolore placeat.
                    Expedita, ab. Atque inventore aspernatur dolorum harum cum,
                    aut ducimus, adipisci ut fugit repudiandae distinctio magnam
                    temporibus sequi repellat voluptates numquam, nostrum
                    mollitia nam? Corrupti debitis atque laboriosam dolorem
                    voluptatibus blanditiis, voluptatum obcaecati cupiditate.
                    Impedit neque natus odit consequatur laboriosam. Tempora
                    mollitia libero et vitae! Similique enim debitis, harum
                    sequi corporis rerum neque voluptatibus maiores obcaecati
                    eos?
                  </div>
                  <div className="">Lorem ipsum dolor sit amet.</div>
                </div>
              </div>
              <div className="flex flex-column w-100">
                <div className="w-100 flex">
                  <video className="w-100 h-100 p-1" controls>
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="w-100 flex">
                  <video className="w-100 h-100 p-1" controls>
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="w-100 flex">
                  <video className="w-100 h-100 p-1" controls>
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="text-white pl-2 pb-2">
                  <CiMail className="mr-2" style={{ transform: "scale(2)" }} />
                  <CiFacebook
                    className="mr-2"
                    style={{ transform: "scale(2)" }}
                  />
                  <CiInstagram
                    className="mr-2"
                    style={{ transform: "scale(2)" }}
                  />
                  <CiYoutube
                    className="mr-2"
                    style={{ transform: "scale(2)" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { CommercialPage };
