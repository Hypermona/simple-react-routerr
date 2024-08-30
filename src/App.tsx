import "./App.css";
import Router from "./Router";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";

const routes = [
  {
    path: "/home",
    Element: <Home />,
  },
  {
    path: "/contacts",
    Element: <Contacts />,
  },
  {
    path: "/about",
    Element: <About />,
  },
];

function App() {
  return <Router routes={routes} />;
}

export default App;
