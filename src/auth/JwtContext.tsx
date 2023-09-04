import { createContext, useEffect, useReducer, useCallback } from 'react';
// utils
import axios from '../utils/axios';

import { isValidToken, setSession, setRefreshSession, setUserSession } from './utils';
import { setAdminCurrentBranch, setCurrentSchool, setSelectedUserType } from 'src/components/app-settings/utils';
import { ISomsUser } from 'src/@types/user';

//import { ActionMapType, AuthStateType, AuthUserType, JWTContextType } from './types';

// ----------------------------------------------------------------------

// NOTE:
// We only build demo at basic level.
// Customer will need to do some extra handling yourself if you want to extend the logic and other features...

// ----------------------------------------------------------------------
export type ActionMapType<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
  ? {
    type: Key;
  }
  : {
    type: Key;
    payload: M[Key];
  };
};
export type AuthUserType = null | Record<string, any>;

export type AuthStateType = {
  isAuthenticated: boolean;
  isInitialized: boolean;
  isSuccessRegister:boolean;
  user: AuthUserType;

};

export type JWTContextType = {
  method: 'jwt';
  isAuthenticated: boolean;
  isInitialized: boolean;
  isSuccessRegister:boolean;
  user: AuthUserType;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, first_name: string, last_name: string,phone_number:string,gender:string,address:string,country:string,user_type:string,bio:string,year_of_experience:number,qualification:string) => Promise<void>;
  logout: () => Promise<void>;
  loginWithGoogle?: (token: string) => void;
  loginWithOutlook?: (token: string) => void;
};


enum Types {
  INITIAL = 'INITIAL',
  LOGIN = 'LOGIN',
  REGISTER = 'REGISTER',
  LOGOUT = 'LOGOUT',
  SUCCESS_REGISTER= 'SUCCESS_REGISTER'
}

type Payload = {
  [Types.INITIAL]: {
    isAuthenticated: boolean;
    user: AuthUserType;
  };
  [Types.LOGIN]: {
    user: AuthUserType;
  };
  [Types.REGISTER]: {
    user: AuthUserType;
  };
  [Types.LOGOUT]: undefined;
  [Types.SUCCESS_REGISTER]: undefined;
};

type ActionsType = ActionMapType<Payload>[keyof ActionMapType<Payload>];

// ----------------------------------------------------------------------

const initialState: AuthStateType = {
  isInitialized: false,
  isAuthenticated: false,
  user: null,
  isSuccessRegister: false
};

const reducer = (state: AuthStateType, action: ActionsType) => {
  if (action.type === Types.INITIAL) {
    return {
      isInitialized: true,
      isAuthenticated: action.payload.isAuthenticated,
      user: action.payload.user,
      isSuccessRegister: false

    };
  }
  if (action.type === Types.LOGIN) {
    return {
      ...state,
      isAuthenticated: true,
      user: action.payload.user,

    };
  }
  if (action.type === Types.REGISTER) {
    return {
      ...state,
      isAuthenticated: true,
      user: action.payload.user,

    };
  }
  if (action.type === Types.LOGOUT) {
    return {
      ...state,
      isAuthenticated: false,
      user: null,

    };
  }
  if(action.type === Types.SUCCESS_REGISTER){
    return {
      ...state,
      isSuccessRegister:true
    }
  }

  return state;
};

// ----------------------------------------------------------------------

export const AuthContext = createContext<JWTContextType | null>(null);

// ----------------------------------------------------------------------

type AuthProviderProps = {
  children: React.ReactNode;
};

export function AuthProvider({ children }: AuthProviderProps) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const initialize = useCallback(async () => {
    try {

      const accessToken = typeof window !== 'undefined' ? localStorage.getItem('accessToken') : '';
      const refreshToken = typeof window !== 'undefined' ? localStorage.getItem('refreshToken') : '';
      const userSession = typeof window !== 'undefined' ? localStorage.getItem('userSession') : '';



      if (accessToken && refreshToken && userSession && isValidToken(accessToken)) {

        setSession(accessToken);

        const response = await axios.post('/api/v1/auth/token/refresh', {
          refresh: refreshToken
        });

        const { access } = response.data;

        setSession(access);
        //useWebSockets(access);
        const user = JSON.parse(userSession);

        dispatch({
          type: Types.INITIAL,
          payload: {
            isAuthenticated: true,
            user,
          },
        });
      }
      else {
        dispatch({
          type: Types.INITIAL,
          payload: {
            isAuthenticated: false,
            user: null,
          },
        });
      }

    } catch (error) {
      console.error(error);
      dispatch({
        type: Types.INITIAL,
        payload: {
          isAuthenticated: false,
          user: null,
        },
      });
    }
  }, []);

  useEffect(() => {
    initialize();
  }, [initialize]);

  // LOGIN
  const login = async (email: string, password: string) => {

    const response = await axios.post('/api/v1/auth/token', {
      email,
      password,
    });
    const { data, status, message } = response.data;

    if (!status) {
      throw new Error(message);
    }
    const { access, refresh, user } = data;

    setSession(access);
    setRefreshSession(refresh);

    //user.photoURL = "https://api-dev-minimal-v4.vercel.app/assets/images/avatars/avatar_default.jpg";
    if(user.id == 2)
      user.is_superuser = true
    else
    user.is_superuser = false

    setUserSession(user);
    dispatch({
      type: Types.LOGIN,
      payload: {
        user: user,
      },
    });
  };

    // LOGIN
  const loginWithGoogle = async (token: string) => {

      const response = await axios.post('/api/v1/auth/google-login/', {
        access_token:token,
      });
      const { data, status, message } = response.data;
  
      if (!status) {
        throw new Error(message);
      }
      const { access, refresh, user } = data;
  
      setSession(access);
      setRefreshSession(refresh);
  
      //user.photoURL = "https://api-dev-minimal-v4.vercel.app/assets/images/avatars/avatar_default.jpg";
      setUserSession(user);
      dispatch({
        type: Types.LOGIN,
        payload: {
          user: user,
        },
      });
    };

    const loginWithOutlook = async (token: string) => {

      const response = await axios.post('/api/v1/auth/microsoft-login/', {
        access_token:token,
      });
      const { data, status, message } = response.data;
  
      if (!status) {
        throw new Error(message);
      }
      const { access, refresh } = data;
      
      setSession(access);
      setRefreshSession(refresh);
      
      const microsoftUser:ISomsUser = {
        id: 1,
        first_name: data.givenName,
        last_name: data.surname,
        role: [],
        last_login: '',
        is_active: true,
        date_joined: '',
        email: data.mail,
        phone_number: '',
        gender: '',
        address: '',
        country: '',
        detail: '',
        student_id: 1,
        photoURL: "https://api-dev-minimal-v4.vercel.app/assets/images/avatars/avatar_default.jpg",
        identity_number: 0
      }

      microsoftUser.photoURL = "https://api-dev-minimal-v4.vercel.app/assets/images/avatars/avatar_default.jpg";
      setUserSession(microsoftUser);
      dispatch({
        type: Types.LOGIN,
        payload: {
          user: microsoftUser,
        },
      });
    };

  // REGISTER
  const register = async (email: string, password: string, first_name: string, last_name: string,phone_number:string,gender:string,address:string,country:string,user_type:string,bio:string,year_of_experience:number,qualification:string) => {
    const response = await axios.post('/api/v1/auth/register-user', {
      email,
      password,
      first_name,
      last_name,
      phone_number,
      gender,
      address,
      country,
      user_type,
      bio,
      year_of_experience,
      qualification
    });

    const { status,message, data } = response.data;

    debugger;

    if (!status) {
      debugger;
      let newMessage = '' 
      for (const key in message){ newMessage += `${key}: ${message[key].join()} \n`}
      throw new Error(newMessage);
    }

    //setSession(data.token.access);
    //setRefreshSession(data.token.refresh);
    //data.photoURL = "https://api-dev-minimal-v4.vercel.app/assets/images/avatars/avatar_default.jpg";
    //setUserSession(data);
    setSession(null);
    dispatch({
      type: Types.SUCCESS_REGISTER,
  
    });
  };

  // LOGOUT
  const logout = async () => {
    setSession(null);
    setCurrentSchool(null);
    setAdminCurrentBranch(null);
    setSelectedUserType(null);
    setUserSession(null);

    dispatch({
      type: Types.LOGOUT,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        method: 'jwt',
        login,
        loginWithGoogle,
        loginWithOutlook,
        logout,
        register,
        
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
