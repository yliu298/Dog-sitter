import { useState, useContext, createContext, FunctionComponent, useCallback, useEffect } from 'react';
import { io, Socket } from 'socket.io-client';

import { useAuth } from '../context/useAuthContext';

interface ISocketContext {
  socket: Socket | undefined;
  initSocket: () => void;
}

export const SocketContext = createContext<ISocketContext>({
  socket: undefined,
  initSocket: () => null,
});

export const SocketProvider: FunctionComponent = ({ children }): JSX.Element => {
  const [socket, setSocket] = useState<Socket | undefined>(undefined);
  const { loggedInUser } = useAuth();

  useEffect(() => {
    if (loggedInUser?._id === undefined || socket === undefined) return;

    socket.emit('comes-online', loggedInUser._id);
  }, [loggedInUser, socket]);

  const initSocket = useCallback(() => {
    console.log('trying to connect');
    setSocket(
      io('/', {
        withCredentials: true,
      }),
    );
  }, []);

  return <SocketContext.Provider value={{ socket, initSocket }}>{children}</SocketContext.Provider>;
};

export function useSocket(): ISocketContext {
  const context = useContext(SocketContext);
  if (context === undefined) {
    throw new Error('useSocket must be used within a SocketProvider');
  }
  return context;
}
