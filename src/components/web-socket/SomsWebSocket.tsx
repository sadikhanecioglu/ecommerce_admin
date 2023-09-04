import * as React from 'react';

export default function useWebSockets  (token:string) {

    const websocket = new WebSocket(`ws://127.0.0.1:8000/ws/notification/?token=${token}`);

    websocket.onopen = () => {
      console.log('connected');
    }
    websocket.onerror = (error) => console.log(error);

    websocket.onmessage = (event) => {
      console.log(event.data);
      const data = JSON.parse(event.data);
    }
  

  
}