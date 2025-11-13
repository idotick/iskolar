
import AsyncStorage from "@react-native-async-storage/async-storage";

import { logInUser, LoginResponse, logOutUser, LogoutResponse, validateUser, ValidateResponse } from "@/network/auth";

import { AuthReceipt, registerUser, resolveUser } from "@/network/user";

import { UserInfo } from "./user"

export async function validateSession(): Promise<number> {
  const session: string | null = await AsyncStorage.getItem('session');

  if (session == null){
    return 1;
  }

  const res: ValidateResponse = await validateUser(session);

  if (res.code){
    AsyncStorage.removeItem('session');

    return 1;
  }

  return 0;
}

export async function requestLogIn(email: string, password: string): Promise<number>{
    const res = await logInUser(email, password);

    if (res.code == 1){  
      const fix: LogoutResponse = await logOutUser("");
  
      if (fix.code){
        return -3;
      }

      return requestLogIn(email, password);
    }
    
    if (res.code){
      return res.code;
    }

    if (!res.cookie){
      return -4;
    }
  
    AsyncStorage.setItem("session", res.cookie);
  
    return 0;
}

export async function requestRegister(id: string, name: string, email: string, password: string): Promise<number>{
  
    const res: AuthReceipt | null = await registerUser(id, email, name, password);

    if (!res){
      return -1;
    }

    if (res.code == 1){
      const fix = await logOutUser("");
  
      if (fix.code){
        return -3;
      }

      return requestRegister(id, name, email, password);
    }

    if (res.code){
      return -2;
    }

    if (!res.cookie){
      return -4;
    }

    const cookie: string | null = res.cookie;

    AsyncStorage.setItem("session", cookie);
  
    return 0;
}

export async function requestLogOut(): Promise<number>{
    const session: string | null = await AsyncStorage.getItem("session");
  
    if (session == null){
      return -2;
    }
  
    const res: LogoutResponse = await logOutUser(session);
    
    return res.code;
}

export async function requestResolve(): Promise<UserInfo | null> {
  const session: string | null = await AsyncStorage.getItem("session");

  if (session == null){
      return null;
  }

  const res: UserInfo | null = await resolveUser(session);

  if (res == null){
      return null;
  }

  return res;
}