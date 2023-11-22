import WaitingRoomWrapper from "../page-components/WaitingRoom/WaitingRoomWrapper";
import { createRoute, Paths } from "./paths";
export const WaitingRoutes = [
    createRoute(Paths.WaitingQueueTV, WaitingRoomWrapper),
];