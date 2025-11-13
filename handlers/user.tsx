import AsyncStorage from "@react-native-async-storage/async-storage";

import { resolveUser, resolveUserList } from "@/network/user";

export type UserInfo = {
  uuid: string,
  id: string,
  email: string,
  name: string
};

export type UserData = {
  email: string,
  id: string, 
  uuid: string,
  name: string,
  rank: number,
  created: string,
};

export async function requestUserInfo(user_id: string | null = null): Promise<UserInfo | null> {
    const session: string | null = await AsyncStorage.getItem("session");

    if (session == null){
        return null;
    }

    const res: UserInfo | null = await resolveUser(session, user_id);

    return res;
}

export async function requestUserList(): Promise<UserData[] | null> {
    const session: string | null = await AsyncStorage.getItem("session");
    
    if (!session){
      return null;
    }
  
    const res: UserData[] | null = await resolveUserList(session);
  
    if (res == null){
      return null;
    }
  
    return res;
  }