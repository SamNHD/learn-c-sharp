import LoginPageWrapper from "../pages/Login/LoginPageWrapper";
import { createRoute, LoginPaths } from "./paths";


export const Login = [createRoute(LoginPaths.login, LoginPageWrapper)];

