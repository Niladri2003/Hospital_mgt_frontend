import { toast } from "react-hot-toast";

import { setLoading, setToken } from "../../slices/authSlice";
import { apiConnector } from "../apiconnector";
import { endpoints } from "../apis";

const {
  SENDOTP_API,
  SIGNUP_API,
  LOGIN_API,
  RESETPASSWORD_API,
  RESETPASSTOKEN_API,
} = endpoints;
