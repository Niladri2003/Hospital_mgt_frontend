import signupImg from "../assets/signup.png";
import Template from "../components/Auth/Template";

function Signup() {
  return (
    <Template
      title="Your Wellness, Our Priority: Empowering Health through Technology"
      description1=""
      description2="Nurturing Health, Inspiring Lives: Join Us on Your Wellness Journey"
      image={signupImg}
      formType="signup"
    />
  );
}

export default Signup;
