import "../../styles/arial.scss";
import { useFolderTreeQuery } from "../../api/queries";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { ErrorPage } from "../../components/ErrorPage";
import { Link } from "react-router";
import type { IFolderTreeContent } from "../../types";

const FOLDER_ID_PHOTOS = "Vaco folder structure/Photo";

const PhotoPage = () => {
  const { data, isLoading, error } = useFolderTreeQuery(
    FOLDER_ID_PHOTOS,
    "photos",
  );

  const sectionTitle = (item: IFolderTreeContent) => {
    if (item.name.includes("Corporate")) return "CORPORATE";
    if (item.name.includes("Event")) return "EVENT";
    return "CORPORATE";
  };

  const linkTo = (item: IFolderTreeContent) => {
    if (item.name.includes("Event")) return "/photo-event";
    if (item.name.includes("Corporate")) return "/photo-corporate";
    return "/photo";
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
    <main className="text-white w-100 p-05 pt-2 flex justify-center">
      <div className="w-100 h-100">
        {data &&
          data.map((item: IFolderTreeContent, index: number) => (
            <Link className="division-card" to={linkTo(item)} key={index}>
              <img
                loading="lazy"
                src={item.files[0]}
                alt="Portrait photography thumbnail"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <div className="division-overlay">
                <p className="division-overlay-text">{sectionTitle(item)}</p>
              </div>
            </Link>
          ))}
      </div>
    </main>
  );
};
export { PhotoPage };
