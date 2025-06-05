import { useNavigate } from "react-router";
import { CiFacebook, CiInstagram, CiMail, CiYoutube } from "react-icons/ci";
import image from "../../assets/prva.jpg";
import image2 from "../../assets/road.jpg";
import "../../styles/clients.scss";

const card = [
  {
    image: image,
    alt: "image1",
    title: "Prva TV",
    description: `
                From its inception until December 2009, it was majority-owned by
                the global media conglomerate News Corporation (News Corp),
                which attached its Fox brand to the operation, naming Dan Bates
                as the CEO. `,
  },
  {
    image: image,
    alt: "image1",
    title: "Prva TV",
    description: `
                From its inception until December 2009, it was majority-owned by
                the global media conglomerate News Corporation (News Corp),
                which attached its Fox brand to the operation, naming Dan Bates
                as the CEO. `,
  },
  {
    image: image,
    alt: "image1",
    title: "Prva TV",
    description: `
                From its inception until December 2009, it was majority-owned by
                the global media conglomerate News Corporation (News Corp),
                which attached its Fox brand to the operation, naming Dan Bates
                as the CEO. `,
  },
  {
    image: image,
    alt: "image1",
    title: "Prva TV",
    description: `
                From its inception until December 2009, it was majority-owned by
                the global media conglomerate News Corporation (News Corp),
                which attached its Fox brand to the operation, naming Dan Bates
                as the CEO. `,
  },
];

const ClientsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-2 pb-2 text-gray w-100 h-100 flex flex-column normal-font font-12">
      <div className="thumbnail">
        <img
          src={image2}
          alt="image1"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <div className="w-100 flex justify-center">
        <div className="client-container">
          <div className="w-100 h-100 pt-2 flex flex-column">
            {card.map((element, index) => (
              <div key={index} className="client-card-container">
                <div className="client-image-card">
                  <img
                    src={element.image}
                    alt={element.alt}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="client-text-card">
                  <div className="font-16 flex">
                    <div>{element.title}</div>{" "}
                  </div>
                  <div className="pt-1">{element.description}</div>
                  <div
                    className="link-see-more"
                    onClick={() => {
                      navigate(`/clients/details/${element.title}`);
                    }}
                  >
                    Show more
                  </div>
                </div>
              </div>
            ))}

            <div className="text-white pt-2 pl-2 pb-2">
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

export { ClientsPage };
