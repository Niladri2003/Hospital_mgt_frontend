import "./App.css";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Image,
  Stack,
  Heading,
  Divider,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import Fade from "react-reveal/Zoom";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Bloges from "./pages/Bloges";
import NoPage from "./pages/NoPage";
import VarifyOtp from "./pages/VarifyOtp";
import ForgotPass from "./pages/ForgotPass";

function App() {
  return (
    <div className="bg-green-500 w-screen min-h-screen flex flex-col">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="blogs" element={<Bloges />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="*" element={<NoPage />} />
        <Route path="forgot-password" element={<ForgotPass />} />
        <Route path="verify-otp" element={<VarifyOtp />} />
      </Routes>
    </div>
  );
}

export default App;
