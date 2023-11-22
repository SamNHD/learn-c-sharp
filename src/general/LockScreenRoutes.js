import LockScreenPageWrapper from "../page-components/LockScreen/LockScreenPageWrapper";
import { createRoute, LockScreenPaths } from "./paths";

export const LockScreen = [
    createRoute(LockScreenPaths.lockScreen, LockScreenPageWrapper),
];

