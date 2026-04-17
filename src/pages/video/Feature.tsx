import { ErrorPage } from "../../components/ErrorPage";
import "../../styles/video.scss";
import { VideoDetailsPage } from "./VideoDetailsPage";
import { useLocation } from "react-router";

const defaults = [
  {
    key: "feature",
    title: "Feature",
    description: `
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias commodi ea ducimus, magni placeat voluptates, inventore voluptas incidunt optio accusamus facilis? Accusantium optio quia porro, inventore, quaerat autem perferendis ullam nostrum aspernatur voluptas similique esse at odit eum, itaque iure nobis dolorem illo. Iure amet modi quae, aliquid ut aut!`,
    foldervideo: "FeatureVideo",
    folderthumbnail: "FeatureThumbnail",
    folderId: "FeatureVideo",
  },
  {
    key: "event",
    title: "Event",
    description: `
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias commodi ea ducimus, magni placeat voluptates, inventore voluptas incidunt optio accusamus facilis? Accusantium optio quia porro, inventore, quaerat autem perferendis ullam nostrum aspernatur voluptas similique esse at odit eum, itaque iure nobis dolorem illo. Iure amet modi quae, aliquid ut aut!`,
    foldervideo: "EventVideo",
    folderthumbnail: "EventThumbnail",
    folderId: "EventVideo",
  },
  {
    key: "documentary",
    title: "Documentary",
    description: `
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias commodi ea ducimus, magni placeat voluptates, inventore voluptas incidunt optio accusamus facilis? Accusantium optio quia porro, inventore, quaerat autem perferendis ullam nostrum aspernatur voluptas similique esse at odit eum, itaque iure nobis dolorem illo. Iure amet modi quae, aliquid ut aut!`,
    foldervideo: "DocumentaryVideo",
    folderthumbnail: "DocumentaryThumbnail",
    folderId: "DocumentaryVideo",
  },
  {
    key: "coorporate",
    title: "Coorporate",
    description: `
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias commodi ea ducimus, magni placeat voluptates, inventore voluptas incidunt optio accusamus facilis? Accusantium optio quia porro, inventore, quaerat autem perferendis ullam nostrum aspernatur voluptas similique esse at odit eum, itaque iure nobis dolorem illo. Iure amet modi quae, aliquid ut aut!`,
    foldervideo: "CorporateVideo",
    folderthumbnail: "CorporateThumbnail",
    folderId: "CorporateVideo",
  },
  {
    key: "commercial",
    title: "Commercial",
    description: `
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias commodi ea ducimus, magni placeat voluptates, inventore voluptas incidunt optio accusamus facilis? Accusantium optio quia porro, inventore, quaerat autem perferendis ullam nostrum aspernatur voluptas similique esse at odit eum, itaque iure nobis dolorem illo. Iure amet modi quae, aliquid ut aut!`,
    foldervideo: "CommercialVideo",
    folderthumbnail: "CommercialThumbnail",
    folderId: "CommercialVideo",
  },
  {
    key: "podcast",
    title: "Podcast",
    description: `
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias commodi ea ducimus, magni placeat voluptates, inventore voluptas incidunt optio accusamus facilis? Accusantium optio quia porro, inventore, quaerat autem perferendis ullam nostrum aspernatur voluptas similique esse at odit eum, itaque iure nobis dolorem illo. Iure amet modi quae, aliquid ut aut!`,
    foldervideo: "PodcastVideo",
    folderthumbnail: "PodcastThumbnail",
    folderId: "PodcastVideo",
  },
  {
    key: "promo",
    title: "Promo",
    description: `
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias commodi ea ducimus, magni placeat voluptates, inventore voluptas incidunt optio accusamus facilis? Accusantium optio quia porro, inventore, quaerat autem perferendis ullam nostrum aspernatur voluptas similique esse at odit eum, itaque iure nobis dolorem illo. Iure amet modi quae, aliquid ut aut!`,
    foldervideo: "PromoVideo",
    folderthumbnail: "PromoThumbnail",
    folderId: "PromoVideo",
  },
];

const FeaturePage = () => {
  const location = useLocation();

  const { thumbnailURL } = location.state;

  const config = defaults.find(({ key }) =>
    location.pathname.includes(`/video-${key}`),
  );

  console.log(location.state, "state");

  if (!config) return <ErrorPage errorType={404} />;
  return (
    <VideoDetailsPage
      title={config.title}
      description={config.description}
      folderId={config.folderId}
      thumbnail={thumbnailURL}
    />
  );
};

export { FeaturePage };
