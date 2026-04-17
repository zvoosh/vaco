import "../../styles/arial.scss";
import { useFolderTreeQuery } from "../../api/queries";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router";
import { ErrorPage } from "../../components/ErrorPage";
import type { IFolderTreeContent } from "../../types";

const FOLDER_ID_VIDEO = "Vaco folder structure/Video/Thumbnails";
const VideoPage = () => {
  const navigate = useNavigate();

  const { data, isLoading, error } = useFolderTreeQuery(
    FOLDER_ID_VIDEO,
    "video-thumbnails",
  );

  const sectionTitle = (item: IFolderTreeContent) => {
    if (item.name.includes("Feature")) return "FEATURE";
    if (item.name.includes("Documentary")) return "DOCUMENTARY";
    if (item.name.includes("Commercial")) return "COMMERCIAL";
    if (item.name.includes("Event")) return "EVENT";
    if (item.name.includes("Corporate")) return "CORPORATE";
    if (item.name.includes("Podcast")) return "PODCAST";
    if (item.name.includes("Promo")) return "PROMO";
    return "FEATURE";
  };

  const handleThumbnailClick = (item: IFolderTreeContent) => {
    if (item.name.includes("Feature"))
      navigate("/video-feature", {
        state: { thumbnailURL: item.files[0] },
      });
    if (item.name.includes("Documentary"))
      navigate("/video-documentary", {
        state: { thumbnailURL: item.files[0] },
      });
    if (item.name.includes("Commercial"))
      navigate("/video-commercial", {
        state: { thumbnailURL: item.files[0] },
      });
    if (item.name.includes("Event"))
      navigate("/video-event", {
        state: { thumbnailURL: item.files[0] },
      });
    if (item.name.includes("Corporate"))
      navigate("/video-coorporate", {
        state: { thumbnailURL: item.files[0] },
      });
    if (item.name.includes("Podcast"))
      navigate("/video-podcast", {
        state: { thumbnailURL: item.files[0] },
      });
    if (item.name.includes("Promo"))
      navigate("/video-promo", {
        state: { thumbnailURL: item.files[0] },
      });
    return "/video";
  };

  if (isLoading)
    return (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Spin
          indicator={
            <LoadingOutlined style={{ fontSize: 48, color: "gray" }} spin />
          }
        />
      </div>
    );

  if (error) return <ErrorPage errorType={500} />;
  return (
    <main className="text-white w-100 pt-2 flex justify-center">
      <h2
        id="video-heading"
        className="visually-hidden"
        style={{ position: "absolute" }}
      >
        Video Project Categories
      </h2>
      <section className="w-100 h-100">
        {data &&
          data.map((item: IFolderTreeContent, index: number) => (
            <div
              onClick={() => {
                handleThumbnailClick(item);
              }}
              className="division-card"
              key={index}
            >
              <img
                loading="eager"
                src={item.files[0]}
                alt="Poster image for feature film"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <div className="division-overlay">
                <p className="division-overlay-text">{sectionTitle(item)}</p>
              </div>
            </div>
          ))}
      </section>
    </main>
  );
};

export { VideoPage };
