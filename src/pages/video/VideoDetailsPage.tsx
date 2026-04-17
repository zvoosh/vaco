import "../../styles/video.scss";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { useFolderContent } from "../../api/queries";
import { ErrorPage } from "../../components/ErrorPage";
import type { IFolderContent } from "../../types";

const VideoDetailsPage = ({
  title,
  description,
  folderId,
  thumbnail,
}: {
  title: string;
  description: string;
  folderId: string;
  thumbnail: string;
}) => {
  const { data, isLoading, error } = useFolderContent(
    `Vaco folder structure/Video/Videos/${folderId}`,
    "videoDetails",
  );

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
    <main className="w-100 h-100 text-gray normal-font font-12">
      <div className="flex w-100 h-100 flex-column">
        {thumbnail && (
          <div className="video-thumbnail">
            <img
              loading="lazy"
              src={thumbnail}
              alt="thumbnail"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        )}
        <div className="w-100 flex justify-center">
          <div className="video-details-container">
            <div className="w-100 h-100 pt-2 flex flex-column">
              <h1 className="font-16 bold p-1 w-100 text-center">{title}</h1>
              <div className="video-text-padding w-100">
                <p>{description}</p>
              </div>
              <div className="flex flex-column justify-center w-100">
                {data &&
                  data.map((item: IFolderContent) => {
                    return (
                      <div>
                        <iframe
                          src={item.url}
                          className="mb-2 border-none"
                          style={{ aspectRatio: "16/9", borderRadius: "5px" }}
                          allowFullScreen
                        />
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export { VideoDetailsPage };
