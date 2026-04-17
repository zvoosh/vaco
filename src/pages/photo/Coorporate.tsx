import { Image, Spin } from "antd";
import "../../styles/portrait.scss";
import { useFolderContent } from "../../api/queries";
import { LoadingOutlined } from "@ant-design/icons";
import { ErrorPage } from "../../components/ErrorPage";
import type { IFolderContent } from "../../types";

const FOLDER_ID_PHOTOS = "Vaco folder structure/Photo/CorporatePhotos";
const CoorporatePage = () => {
  const { data, isLoading, isFetching, error } = useFolderContent(
    FOLDER_ID_PHOTOS,
    "event-photos",
  );

  if (isLoading || isFetching) {
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
  }

  if (error) return <ErrorPage errorType={500} />;
  
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
          <div className="card-grid">
            {data && data.length > 0 && (
              <Image.PreviewGroup>
                {data.map((element: IFolderContent, index: number) => (
                  <Image
                    loading="eager"
                    key={index}
                    src={element.url}
                    alt={element.name}
                    className="responsive"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      aspectRatio: "16/9"
                    }}
                  />
                ))}
              </Image.PreviewGroup>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export { CoorporatePage };
