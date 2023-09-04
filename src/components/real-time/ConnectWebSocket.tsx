import { useEffect } from "react";
import { useAuthContext } from "src/auth/useAuthContext";
import { useRealTime } from "./RealTimeContext";


type ConnectWebSocketProps = {
    children: React.ReactNode;
}

export default function ConnectWebSocket({ children }: ConnectWebSocketProps) {

    // const { isAuthenticated, isInitialized } = useAuthContext();
    // const { onConnect } = useRealTime()

    // const onConnected = () => {

    // }


}