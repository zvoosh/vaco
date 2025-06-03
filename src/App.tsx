import { RouterProvider } from "react-router";
import "./App.css";
import "./styles/index.css";
import { router } from "./routes";

function App() {
  return <RouterProvider router={router}/>;
}

export default App;
