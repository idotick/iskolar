
import AsyncStorage from "@react-native-async-storage/async-storage";

import { loginUser, LoginResponse, logoutUser, LogoutResponse, validateUser, ValidateResponse } from "@/network/auth";

import { AuthReceipt, registerUser, resolveUser } from "@/network/user";

import { UserInfo } from "./user"
import { attachFullName, validateEmail, validateInitial, validateName, validatePassword, validateUserID } from "@/util/helpers";

export type RegistrationData = {
    firstName: string,
    midInitial: string,
    lastName: string,
    email: string,
    userID: string,
    password: string
};

export type LoginData = {
    email: string,
    password: string
};

export function validateRegistrationData(data: RegistrationData){
    if (!validateEmail(data.email)){
        return false;
    }

    if (!validatePassword(data.password)){
        return false;
    }

    if (!validateUserID(data.userID)){
        return false;
    }

    if (!validateName(data.firstName) && !validateInitial(data.midInitial) && !validateName(data.lastName)){
        return false;
    }

    return true;
}

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

export async function requestLogin(data: LoginData): Promise<number>{
    const res = await loginUser(data.email, data.password);

    if (res.code == 1){  
      const fix: LogoutResponse = await logoutUser("");
  
      if (fix.code){
        return -3;
      }

      return requestLogin(data);
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

export async function requestRegister(data: RegistrationData): Promise<number>{
    if (!validateRegistrationData(data)){
      return 1;
    }

    const name: string = attachFullName(data.firstName, data.midInitial, data.lastName)
  
    const res: AuthReceipt | null = await registerUser(data.userID, data.email, name, data.password);

    if (!res){
      return -1;
    }

    if (res.code == 1){
      const fix = await logoutUser("");
  
      if (fix.code){
        return -3;
      }

      return requestRegister(data);
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

export async function requestLogout(): Promise<number>{
    const session: string | null = await AsyncStorage.getItem("session");
  
    if (session == null){
      return -2;
    }
  
    const res: LogoutResponse = await logoutUser(session);
    
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