import { useState, useEffect } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { ActivityIndicator, View, Image} from "react-native";

import { Redirect } from "expo-router";

import { login_user, logout_user, validate_user } from "@/network/auth";

import { register_user, resolve_user } from "@/network/user";

import { UserInfo } from "./user"

async function validate_session(): Promise<boolean> {
  const session: string | null = await AsyncStorage.getItem('session');

  if (session == null){
    return false;
  }

  const res: number = await validate_user(session);

  if (res == -2){
    return true;
  }

  if (res){
    AsyncStorage.removeItem('session');

    return false;
  }

  return true;
}

async function request_login(email: string, password: string): Promise<number>{
    const res = await login_user(email, password);
  
    if (res.code == -1){
      const session: string | null = await AsyncStorage.getItem("session");
  
      if (session == null){
        const code = await logout_user("");
  
        if (code){
          return -3;
        }

        return -2;
      }

      return 0;
    }
    
    if (res.code == -2){
        return -1;
    }

    if (res.code == 1){
        return 1;
    }

    if (res.code == 2){
        return 2;
    }

    if (res.code){
        return -1;
    }

  
    AsyncStorage.setItem("session", res.cookie);
  
    return 0;
}

async function request_registration(id: string, name: string, email: string, password: string, password_confirm: string): Promise<number>{
    if (password != password_confirm){
      return 1;
    }
  
    const res: any = await register_user(id, email, name, password);

    if (res.code == -1){
      return -1;
    }

    if (res.code == -2){
      return -2;
    }

    if (res.code == 2){
      return 2;
    }

    if (res.code == 3){
      return 3;
    }
  
    if (res.code){
      return res.code;
    }

    const cookie: string = res.cookie;
  
    AsyncStorage.setItem("session", cookie);
  
    return 0;
}

async function request_logout(): Promise<boolean>{
    const session: string | null = await AsyncStorage.getItem("session");
  
    if (session == null){
      return true;
    }
  
    const code: number = await logout_user(session);
    
    if (code == 1){
      return true;
    }

    if (code){
      return false;
    }
  
    return true;
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