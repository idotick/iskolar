import { useState, useEffect } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { ActivityIndicator, View, Image} from "react-native";

import { Redirect } from "expo-router";

import { login_user, LoginResponse, logout_user, LogoutResponse, validate_user, ValidateResponse } from "@/network/auth";

import { AuthReceipt, register_user, resolve_user } from "@/network/user";

import { UserInfo } from "./user"


async function validate_session(): Promise<number> {
  const session: string | null = await AsyncStorage.getItem('session');

  if (session == null){
    return 1;
  }

  const res: ValidateResponse = await validate_user(session);

  if (res.code){
    AsyncStorage.removeItem('session');

    return 1;
  }

  return 0;
}

async function request_login(email: string, password: string): Promise<number>{
    const res = await login_user(email, password);

    if (res.code == 1){  
      const logout_res: LogoutResponse = await logout_user("");
  
      if (logout_res.code){
        return -3;
      }

      return request_login(email, password);
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

async function request_registration(id: string, name: string, email: string, password: string): Promise<number>{
  
    const res: AuthReceipt | null = await register_user(id, email, name, password);

    if (!res){
      return -1;
    }

    if (res.code == 1){
      const code = await logout_user("");
  
      if (code){
        return -3;
      }

      return request_registration(id, name, email, password);
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

async function request_logout(): Promise<number>{
    const session: string | null = await AsyncStorage.getItem("session");
  
    if (session == null){
      return -2;
    }
  
    const res: LogoutResponse = await logout_user(session);
    
    return res.code;
}

async function request_resolve(): Promise<UserInfo | null> {
  const session: string | null = await AsyncStorage.getItem("session");

  if (session == null){
      return null;
  }

  const res: UserInfo | null = await resolve_user(session);

  if (res == null){
      return null;
  }

  return res;
}

export { UserInfo, validate_session, request_login, request_logout, request_registration, request_resolve }