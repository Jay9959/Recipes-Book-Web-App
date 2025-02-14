import { onAuthStateChanged } from "firebase/auth";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Routers from "./routers/Routers";
import { auth } from "./firebase.config";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const isAuthPage = location.pathname === "/login" || location.pathname === "/signup";

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user && isAuthPage) {
        navigate("/home");
      }
    });
  }, [navigate, isAuthPage]);
  return (
    <>

      return (
      <>
        {!isAuthPage && <Header />}
        <div>
          <Routers />
        </div>
        {!isAuthPage && <Footer />}
      </>
      );
    </>
  )
}

export default App;