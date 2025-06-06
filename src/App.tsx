import { BrowserRouter, Route, Routes, useLocation } from "react-router";
import { AnimatePresence, motion } from "framer-motion";
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

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<RootLayout />}>
          <Route
            index
            element={
              <PageWrapper>
                <LandingPage />
              </PageWrapper>
            }
          />
          <Route
            path="/contact"
            element={
              <PageWrapper>
                <ContactPage />
              </PageWrapper>
            }
          />
          <Route
            path="/photo"
            element={
              <PageWrapper>
                <PhotoPage />
              </PageWrapper>
            }
          />
          <Route
            path="/portrait"
            element={
              <PageWrapper>
                <PortraitPage />
              </PageWrapper>
            }
          />
          <Route
            path="/event"
            element={
              <PageWrapper>
                <EventPage />
              </PageWrapper>
            }
          />
          <Route
            path="/coorporate"
            element={
              <PageWrapper>
                <CoorporatePage />
              </PageWrapper>
            }
          />
          <Route
            path="/clients"
            element={
              <PageWrapper>
                <ClientsPage />
              </PageWrapper>
            }
          />
          <Route
            path="/clients/details/:client"
            element={
              <PageWrapper>
                <ClientDetailsPage />
              </PageWrapper>
            }
          />
          <Route
            path="/airial"
            element={
              <PageWrapper>
                <AirialPage />
              </PageWrapper>
            }
          />
          <Route
            path="/video"
            element={
              <PageWrapper>
                <VideoPage />
              </PageWrapper>
            }
          />
          <Route
            path="/video-feature"
            element={
              <PageWrapper>
                <FeaturePage />
              </PageWrapper>
            }
          />
          <Route
            path="/video-documentary"
            element={
              <PageWrapper>
                <FeaturePage />
              </PageWrapper>
            }
          />
          <Route
            path="/video-event"
            element={
              <PageWrapper>
                <FeaturePage />
              </PageWrapper>
            }
          />
          <Route
            path="/video-commercial"
            element={
              <PageWrapper>
                <FeaturePage />
              </PageWrapper>
            }
          />
          <Route
            path="/video-coorporate"
            element={
              <PageWrapper>
                <FeaturePage />
              </PageWrapper>
            }
          />
          <Route
            path="/behind-the-sceens"
            element={
              <PageWrapper>
                <BehindTheSceensPage />
              </PageWrapper>
            }
          />
          <Route
            path="/gear"
            element={
              <PageWrapper>
                <GearPage />
              </PageWrapper>
            }
          />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

const PageWrapper = ({ children }: { children: any }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: .5 }}
  >
    {children}
  </motion.div>
);

function App() {
  return (
    <BrowserRouter basename="/vaco/">
      <ScrollToTop />
      <AnimatedRoutes/>
    </BrowserRouter>
  );
}

export default App;
