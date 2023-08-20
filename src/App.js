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
      
    </div>
  );
}

export default App;
