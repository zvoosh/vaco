import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import "./styles/index.css";
import RootLayout from "./routes/RootLayout";
import {
  AirialPage,
  BehindTheSceensPage,
  ClientDetailsPage,
  ClientsPage,
  CommercialPage,
  ContactPage,
  CoorporatePage,
  DocumentaryPage,
  EventPage,
  FeaturePage,
  GearPage,
  LandingPage,
  PhotoPage,
  PortraitPage,
  VideoCoorporatePage,
  VideoEventPage,
  VideoPage,
} from "./pages";

function App() {
  return (
    <BrowserRouter basename="/vaco/">
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/photo" element={<PhotoPage />} />
          <Route path="/portrait" element={<PortraitPage />} />
          <Route path="/event" element={<EventPage />} />
          <Route path="/coorporate" element={<CoorporatePage />} />
          <Route path="/clients" element={<ClientsPage />} />
          <Route
            path="/clients/details/:client"
            element={<ClientDetailsPage />}
          />
          <Route path="/airial" element={<AirialPage />} />
          <Route path="/video" element={<VideoPage />} />
          <Route path="/video-feature" element={<FeaturePage />} />
          <Route path="/video-documentary" element={<DocumentaryPage />} />
          <Route path="/video-event" element={<VideoEventPage />} />
          <Route path="/video-commercial" element={<CommercialPage />} />
          <Route path="/video-coorporate" element={<VideoCoorporatePage />} />
          <Route path="/behind-the-sceens" element={<BehindTheSceensPage />} />
          <Route path="/gear" element={<GearPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
