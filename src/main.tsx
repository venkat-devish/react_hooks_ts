import ReactDOM from "react-dom/client";
import App from "./App";
import { CountContextProvider } from "./Hooks/ContextCart";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <CountContextProvider>
    <App />
  </CountContextProvider>
);
