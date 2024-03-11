import "./App.css";
import { Footer } from "./components/Footer/Footer";
import AppRoutes from "./routes";

function App() {
  return (
    <>
      <div className="wrapper">
        <div className="container">
          <AppRoutes />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
