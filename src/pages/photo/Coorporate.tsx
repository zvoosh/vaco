import image from "../../assets/unnamed.jpg";
import "../../styles/portrait.scss";
import { useContext, useEffect } from "react";
import { MyContext } from "../../services";
import { Image } from "antd";

const images = [
  { src: image, alt: "image1", description: "vale's image" },
  { src: image, alt: "image", description: "web's image" },
  { src: image, alt: "image1", description: "vale's image" },
  { src: image, alt: "image", description: "web's image" },
  { src: image, alt: "image1", description: "vale's image" },
  { src: image, alt: "image", description: "web's image" },
  { src: image, alt: "image1", description: "vale's image" },
  { src: image, alt: "image", description: "web's image" },
];

const CoorporatePage = () => {
  const ctx = useContext(MyContext);

  useEffect(() => {
    console.log(ctx?.index);
  }, [ctx?.index]);
  return (
    <div className="pt-2">
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
                      loading="eager"
                      key={index}
                      src={element.src}
                      alt={element.alt}
                      className="responsive"
                    />
                  ))}
                </Image.PreviewGroup>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export { CoorporatePage };
