import { createBrowserRouter } from "react-router";
import {
  ContactPage,
  EventPage,
  PortraitPage,
  ClientsPage,
  ClientDetailsPage,
  CoorporatePage,
  LandingPage,
  AirialPage,
  FeaturePage,
  VideoPage,
  PhotoPage,
  DocumentaryPage,
  VideoCoorporatePage,
  CommercialPage,
  VideoEventPage,
  BehindTheSceensPage,
  GearPage,
} from "../pages";
import RootLayout from "./RootLayout";

export let router = createBrowserRouter(
  [
    {
      path: "/",
      Component: RootLayout,
      children: [
        {
          index: true,
          Component: LandingPage,
        },
        {
          path: "contact",
          Component: ContactPage,
        },
        {
          path: "photo",
          Component: PhotoPage,
        },
        {
          path: "portrait",
          Component: PortraitPage,
        },
        {
          path: "event",
          Component: EventPage,
        },
        {
          path: "coorporate",
          Component: CoorporatePage,
        },
        {
          path: "clients",
          Component: ClientsPage,
        },
        {
          path: "clients/details/:client",
          Component: ClientDetailsPage,
        },
        {
          path: "airial",
          Component: AirialPage,
        },
        {
          path: "video",
          Component: VideoPage,
        },
        {
          path: "video-feature",
          Component: FeaturePage,
        },
        {
          path: "video-documentary",
          Component: DocumentaryPage,
        },
        {
          path: "video-event",
          Component: VideoEventPage,
        },
        {
          path: "video-commercial",
          Component: CommercialPage,
        },
        {
          path: "video-coorporate",
          Component: VideoCoorporatePage,
        },
        {
          path: "behind-the-sceens",
          Component: BehindTheSceensPage,
        },
        {
          path: "gear",
          Component: GearPage,
        },
      ],
    },
  ],
  {
    basename: "/vaco",
  }
);
