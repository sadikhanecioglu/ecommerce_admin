

export type RealTimeContextProps = {

    token: string | undefined;
    onConnect: (onConnected?: VoidFunction, onError?: (error: any) => void) => void;
    setTokenJWT: (token: string) => void;
    onScribe: (key: string, onMessage: (message: any) => void) => void

}