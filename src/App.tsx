import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import "./styles/index.css";
import ScrollToTop from "./components/ScrollToTop";
import RootLayout from "./routes/RootLayout";
import {
  AirialPage,
  BehindTheSceensPage,
  ClientDetailsPage,
  ClientsPage,
  ContactPage,
  CoorporatePage,
  EventPage,
  FeaturePage,
  GearPage,
  LandingPage,
  PhotoPage,
  PortraitPage,
  VideoPage,
} from "./pages";

function App() {
  return (
    <BrowserRouter basename="/vaco/">
      <ScrollToTop />
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
          <Route path="/video-documentary" element={<FeaturePage />} />
          <Route path="/video-event" element={<FeaturePage />} />
          <Route path="/video-commercial" element={<FeaturePage />} />
          <Route path="/video-coorporate" element={<FeaturePage />} />
          <Route path="/behind-the-sceens" element={<BehindTheSceensPage />} />
          <Route path="/gear" element={<GearPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
