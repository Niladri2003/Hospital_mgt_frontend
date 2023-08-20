<<<<<<< HEAD
import './App.css';
import { Card, CardHeader, CardBody, CardFooter ,Text,Image,Stack,Heading,Divider,ButtonGroup,Button} from '@chakra-ui/react'
import Fade from 'react-reveal/Zoom';

function App() {
  return (
    <div>
      
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="aboutus" element={<AboutUs />} />
            <Route path="contactus" element={<ContactUs />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="login" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </BrowserRouter>
      
=======
import "./App.css";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <div className="w-screen min-h-screen bg-[#41b3a3] flex flex-col ">
      <Login />
>>>>>>> b858121b6b989af07dc668151a6c912a4cb3a7c6
    </div>
  );
}

export default App;
