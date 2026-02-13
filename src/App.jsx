import Footer from "./components/Footer";
import Header from "./components/Header";
// import { BACKGROUND_URL } from "./utils/constants.js";
import BACKGROUND_URL from "./assets/landing_cover_latest.jpg"
import { Outlet } from "react-router-dom";;
function App() {
  return (
    
      <div
        className="min-h-screen flex flex-col bg-cover bg-center bg-no-repeat bg-fixed relative"
        style={{ backgroundImage: `url(${BACKGROUND_URL})` }}
      >
        <div className="absolute inset-0 bg-black/40 z-0"></div>
        <Header />
        <main className="grow relative z-10">
          <Outlet />
        </main>
        <Footer />
      </div>
  );
}

export default App;
