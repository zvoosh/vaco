import "../../styles/portrait.scss";
import { useContext } from "react";
import { MyContext } from "../../services";
import { Image } from "antd";

const images = [
  { src: 'src/assets/tara.jpg', alt: "image1", description: "vale's image" },
  { src: 'src/assets/portrait.jpg', alt: "image", description: "web's image" },
  { src: 'src/assets/baloons.jpg', alt: "image1", description: "vale's image" },
  { src: 'src/assets/cowboy.jpg', alt: "image", description: "web's image" },
  { src: 'src/assets/dunes.jpg', alt: "image1", description: "vale's image" },
  { src: 'src/assets/goalkeeper.jpg', alt: "image", description: "web's image" },
  { src: 'src/assets/mountain.jpg', alt: "image1", description: "vale's image" },
  { src: 'src/assets/mountins.jpg', alt: "image", description: "web's image" },
  { src: 'src/assets/unnamed.jpg', alt: "image1", description: "vale's image" },
  { src: 'src/assets/color_wheel.jpg', alt: "image", description: "web's image" },
  { src: 'src/assets/tara.jpg', alt: "image1", description: "vale's image" },
  { src: 'src/assets/portrait.jpg', alt: "image", description: "web's image" },
  { src: 'src/assets/baloons.jpg', alt: "image1", description: "vale's image" },
  { src: 'src/assets/cowboy.jpg', alt: "image", description: "web's image" },
  { src: 'src/assets/dunes.jpg', alt: "image1", description: "vale's image" },
  { src: 'src/assets/goalkeeper.jpg', alt: "image", description: "web's image" },
  { src: 'src/assets/mountain.jpg', alt: "image1", description: "vale's image" },
  { src: 'src/assets/mountins.jpg', alt: "image", description: "web's image" },
  { src: 'src/assets/unnamed.jpg', alt: "image1", description: "vale's image" },
  { src: 'src/assets/color_wheel.jpg', alt: "image", description: "web's image" },
  { src: 'src/assets/tara.jpg', alt: "image1", description: "vale's image" },
  { src: 'src/assets/portrait.jpg', alt: "image", description: "web's image" },
  { src: 'src/assets/baloons.jpg', alt: "image1", description: "vale's image" },
  { src: 'src/assets/cowboy.jpg', alt: "image", description: "web's image" },
  { src: 'src/assets/dunes.jpg', alt: "image1", description: "vale's image" },
  { src: 'src/assets/goalkeeper.jpg', alt: "image", description: "web's image" },
  { src: 'src/assets/mountain.jpg', alt: "image1", description: "vale's image" },
  { src: 'src/assets/mountins.jpg', alt: "image", description: "web's image" },
  { src: 'src/assets/unnamed.jpg', alt: "image1", description: "vale's image" },
  { src: 'src/assets/color_wheel.jpg', alt: "image", description: "web's image" },
];

const PortraitPage = () => {
  const ctx = useContext(MyContext);

  return (
    <div className="pt-2">
      <div className="w-100 h-100 flex justify-center">
        <div className="w-100 h-100 flex justify-center">
          {!ctx?.value && (
            <div className="card-grid">
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
            </div>
          )}
          {ctx?.value && typeof ctx.index === "number" && (
            <div className="w-100 h-100 flex justify-center">
              <div className="mt-5 ">
                <div className="big-image-container">
                  <img
                    key={ctx.index}
                    src={images[ctx.index].src}
                    alt={images[ctx.index].alt}
                    className="w-100 h-auto object-cover fade-in-on-load"
                    sizes="(max-width: 480px) 480px, (max-width: 800px) 800px, 1200px"
                    loading="lazy"
                  />
                </div>
                <div className="text-white w-100 flex justify-center mt-5 pt-1 align-center  font-12 ">
                  <span
                    className="pointer user-none"
                    onClick={() => {
                      ctx.setIndex((prevIndex) =>
                        prevIndex === 0 ? images.length - 1 : prevIndex! - 1
                      );
                    }}
                  >
                    prev
                  </span>
                  <span>&nbsp;/&nbsp;</span>
                  <span
                    className="pointer user-none"
                    onClick={() => {
                      ctx.setIndex((prevIndex) =>
                        prevIndex === images.length - 1 ? 0 : prevIndex! + 1
                      );
                    }}
                  >
                    next
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export { PortraitPage };
