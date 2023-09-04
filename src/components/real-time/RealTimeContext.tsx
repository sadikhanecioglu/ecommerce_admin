import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { RealTimeContextProps } from "./types";
import { useAuthContext } from "src/auth/useAuthContext";
import {useSnackbar} from "../snackbar";
import {HOST_SOCKET_KEY} from '../../config'
import { useDispatch, useSelector } from "src/redux/store";
import { getUnreadNotificationCount } from "src/redux/slices/notification";
import { getTerms, getYears } from "src/redux/slices/school";
import { useRouter } from "next/router";

type MessageScribes = {

}

const initialState: RealTimeContextProps = {
  onConnect: () => { },
  token: undefined,
  setTokenJWT: () => { },
  onScribe: () => { }
}

export const RealTimeContext = createContext(initialState);

export const useRealTime = () => {
  const context = useContext(RealTimeContext);
  if (!context) throw new Error('useRealTime must be use inside RealTimeContext');
  return context;
}

type RealTimeProviderProps = {
  children: React.ReactNode;
};


export function RealTimeProvider({ children }: RealTimeProviderProps) {

  const scribeList = new Map<string, any[]>();

  //const [scribeList, setScribeList] = useState<Map<string, any[]>>(new Map<string, any[]>())
  const [newToken, setNewToken] = useState<string | undefined>()
  const [socket, setSocket] = useState<any | undefined>()
  const [isReady, setIsReady] = useState(false);
  const [initializeStatus, setInitializeStatus] = useState(false)
  const [val, setVal] = useState(null);
  const ws = useRef(null);
  const { isAuthenticated ,user} = useAuthContext()
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();


  const {push} = useRouter()
  const showNotification = (data: any) => {
    
    const options: NotificationOptions = {
      body: data.message,
      icon: 'http://localhost:3000/assets/logo-mini.png',
      dir: 'ltr',
    };
    new Notification(data.type, options)
    enqueueSnackbar(data.message,{variant:'info'})
  }

  useEffect(() => {


    if (isAuthenticated) {
      //login
      const accessToken = typeof window !== 'undefined' ? localStorage.getItem('accessToken') : '';
      if (!accessToken) throw new Error('RealTime need authorized token')
      const websocket = new WebSocket(`${HOST_SOCKET_KEY}?token=${accessToken}`);
      websocket.onopen = (ev) => {
        console.log("connected socket", ev);
        scribeList.set("NEW_NOTIFICATION", [showNotification])
      }

      websocket.onerror = (error) => {

      }

      websocket.onmessage = (event) => {
        // console.log(event.data);
        // const data = JSON.parse(event.data);
        ReceiverMessage(event.data);
      }

      //get unread notification count
      dispatch(getUnreadNotificationCount());
      //dispatch(getTerms());

      return () => {
        websocket.close();
      }
    }


  }, [isAuthenticated])



  const initialize = useCallback(async () => {

    const accessToken = typeof window !== 'undefined' ? localStorage.getItem('accessToken') : '';
    if (accessToken) {
      setNewToken(accessToken)

    }

  }, [])

  useEffect(() => {
    initialize();
  }, [initialize])

  useEffect(() => {

    if (!("Notification" in window)) {
      console.log("Browser does not support desktop notification");
    } else {
      console.log("Notifications are supported");
      Notification.requestPermission();
    }


  }, [])

  const ReceiverMessage = (message: any) => {

    const m = JSON.parse(message);
    if (scribeList && scribeList.has(m.key)) {
      const funcs = scribeList.get(m.key)
      if (funcs) {
        for (let index = 0; index < funcs.length; index++) {
          const fns = funcs[index];
          fns(m.data)
        }
      }
    }

    console.log("ReceiverMessage", message)

  }

  const onConnect = useCallback((onConnected?: VoidFunction, onError?: (error: any) => void) => {

    debugger;
    const accessToken = typeof window !== 'undefined' ? localStorage.getItem('accessToken') : '';
    if (!accessToken) throw new Error('RealTime need authorized token')
    const websocket = new WebSocket(`ws://127.0.0.1:8000/ws/notification/?token=${accessToken}`);

    websocket.onopen = (ev) => {
      console.log("connected socket", ev);
      if (onConnected) {
        onConnected();
      }
    }

    websocket.onerror = (error) => {
      if (onError) {
        onError(error);
      }
    }

    websocket.onmessage = (event) => {
      console.log(event.data);
      const data = JSON.parse(event.data);
      ReceiverMessage(event.data);
    }

    setSocket(socket);

  }, [])

  const setTokenJWT = useCallback((token: string) => {
    debugger;
    setNewToken(token);

  }, [])

  const onScribe = useCallback((key: string, onMessage: (message: string) => void) => {
    debugger;
    if (scribeList.has(key)) {
      let fns = scribeList.get(key);
      if (fns) {
        fns.push(onMessage)
      } else {
        fns = Object.entries(onMessage)
      }
      scribeList.set(key, fns);
    } else {
      scribeList.set(key, Object.entries(onMessage))
    }

  }, [])

  return <RealTimeContext.Provider value={{
    onConnect,
    setTokenJWT,
    token: newToken,
    onScribe
  }}>{children}</RealTimeContext.Provider>

}