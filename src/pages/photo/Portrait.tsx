import "../../styles/portrait.scss";
import tara from "../../assets/tara.jpg";
import baloons from "../../assets/baloons.jpg";
import mountain from "../../assets/mountain.jpg";
import portrait from "../../assets/portrait.jpg";
import cowboy from "../../assets/cowboy.jpg";
import dunes from "../../assets/dunes.jpg";
import goalkeeper from "../../assets/goalkeeper.jpg";
import { useContext } from "react";
import { MyContext } from "../../services";
import { Image } from "antd";

const images = [
  { src: tara, alt: "image1", description: "vale's image" },
  { src: portrait, alt: "image", description: "web's image" },
  { src: baloons, alt: "image1", description: "vale's image" },
  { src: cowboy, alt: "image", description: "web's image" },
  { src: dunes, alt: "image1", description: "vale's image" },
  {
    src: goalkeeper,
    alt: "image",
    description: "web's image",
  },
  {
    src: mountain,
    alt: "image1",
    description: "vale's image",
  },
  { src: tara, alt: "image1", description: "vale's image" },
  { src: portrait, alt: "image", description: "web's image" },
  { src: baloons, alt: "image1", description: "vale's image" },
  { src: cowboy, alt: "image", description: "web's image" },
  { src: dunes, alt: "image1", description: "vale's image" },
  {
    src: goalkeeper,
    alt: "image",
    description: "web's image",
  },
  {
    src: mountain,
    alt: "image1",
    description: "vale's image",
  },
  {
    src: mountain,
    alt: "image1",
    description: "vale's image",
  },
  { src: tara, alt: "image1", description: "vale's image" },
  { src: portrait, alt: "image", description: "web's image" },
  { src: baloons, alt: "image1", description: "vale's image" },
  { src: cowboy, alt: "image", description: "web's image" },
  { src: dunes, alt: "image1", description: "vale's image" },
  {
    src: goalkeeper,
    alt: "image",
    description: "web's image",
  },
  {
    src: mountain,
    alt: "image1",
    description: "vale's image",
  },
  { src: tara, alt: "image1", description: "vale's image" },
  { src: portrait, alt: "image", description: "web's image" },
  { src: baloons, alt: "image1", description: "vale's image" },
  { src: cowboy, alt: "image", description: "web's image" },
  { src: dunes, alt: "image1", description: "vale's image" },
  {
    src: goalkeeper,
    alt: "image",
    description: "web's image",
  },
  {
    src: mountain,
    alt: "image1",
    description: "vale's image",
  },
  {
    src: mountain,
    alt: "image1",
    description: "vale's image",
  },
];

const PortraitPage = () => {
  const ctx = useContext(MyContext);

  return (
    <main className="pt-2">
      <h1
        id="gallery-heading"
        className="visually-hidden"
        style={{ position: "absolute" }}
      >
        Photography Gallery
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
export { PortraitPage };
