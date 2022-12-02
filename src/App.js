import { ThemeProvider } from "styled-components";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  useLocation,
} from "react-router-dom";
import { useLayoutEffect} from "react";
import { GlobalStyle } from "./Components/Global";

//auth imports
import { AuthProvider } from "./Contexts/AuthContext";



//Components
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import LoginSection from "./Components/Auth/Login";
import SignUp from "./Components/Auth/SignUp";
import Profile from "./Components/User/Profile";

function App() {
  

  //function of scroll to top
  const Wrapper = ({ children }) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children;
  };

  //toggle sidebar
  

  

  //theme
  const theme = {
    colors: {
      primarybg: "#ECEFFF",
      secondarybg: "#FCFFDF",
      primaryColor: "#3F9DA7",
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Router>
        <Wrapper>
          {" "}
          <AuthProvider>
            <Navbar   />

            <Routes>
              <Route path="/stem" element={<Home />} />
              <Route path="/stem/register" element={<SignUp />} />
              <Route path="/stem/login" element={<LoginSection />} />
              <Route path="/stem/event/:event" element={<Home />} />
              <Route path="/stem/profile/:id" element={<Home />} />
              <Route path="/stem/profile" element={<Profile />} />
            </Routes>
            <Outlet />
            <Footer />
          </AuthProvider>
        </Wrapper>
      </Router>
    </ThemeProvider>
  );
}

export default App;
