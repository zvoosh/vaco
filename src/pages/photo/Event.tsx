import image from "../../assets/unnamed.jpg";
import image2 from "../../assets/baloons.jpg";
import image3 from "../../assets/mountins.jpg";
import image4 from "../../assets/mountain.jpg";
import image5 from "../../assets/portrait.jpg";
import "../../styles/event.scss";
import { useContext } from "react";
import { MyContext } from "../../services";
import { Image } from "antd";

const images = [
  { src: image, alt: "image1", description: "vale's image" },
  { src: image2, alt: "image", description: "web's image" },
  { src: image3, alt: "image1", description: "vale's image" },
  { src: image4, alt: "image", description: "web's image" },
  { src: image5, alt: "image1", description: "vale's image" },
  { src: image, alt: "image", description: "web's image" },
  { src: image2, alt: "image1", description: "vale's image" },
  { src: image3, alt: "image", description: "web's image" },
  { src: image4, alt: "image1", description: "vale's image" },
  { src: image5, alt: "image1", description: "vale's image" },
  { src: image, alt: "image", description: "web's image" },
  { src: image2, alt: "image1", description: "vale's image" },
];

const EventPage = () => {
  const ctx = useContext(MyContext);
  return (
    <main className="pt-2">
      <h1
        id="gallery-heading"
        className="visually-hidden"
        style={{ position: "absolute" }}
      >
        Event Gallery
      </h1>
      <div className="w-100 h-100 flex justify-center">
        <div className="w-100 h-100 flex justify-center">
          {!ctx?.value && (
            <div className="card-grid">
              {images.length === 0 ? (
                <p className="text-center">No images available at this time</p>
              ) : (
                <Image.PreviewGroup
                  preview={{
                    onChange: (current, prev) =>
                      console.log(
                        `current index: ${current}, prev index: ${prev}`
                      ),
                  }}
                >
                  {images.map((element, index) => (
                    <Image
                      key={index}
                      loading="eager"
                      src={element.src}
                      alt={element.alt}
                      className="responsive"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  ))}
                </Image.PreviewGroup>
              )}
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export { EventPage };
