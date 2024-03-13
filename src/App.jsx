import { Footer } from "./components/Footer/Footer";
import AppRoutes from "./routes";
import { GlobalStyled } from "./AppStyled.js";

function App() {
  return (
    <>
      <GlobalStyled />
      <AppRoutes />
      <Footer />
    </>
  );
}

export default App;
