import AsyncStorage from "@react-native-async-storage/async-storage";

import { get_user_list, resolve_user } from "@/network/user";

type UserInfo = {
  uuid: string,
  id: string,
  email: string,
  name: string
};

type UserData = {
  email: string,
  id: string, 
  uuid: string,
  name: string,
  rank: number,
  created: string,
};

async function request_user_info(user_id: string | null = null): Promise<UserInfo | null> {
    const session: string | null = await AsyncStorage.getItem("session");

    if (session == null){
        console.log("Non-existent session while resolving user ID info?");
        return null;
    }

    const res: UserInfo | null = await resolve_user(session, user_id);

    return res;
}

async function request_user_list(): Promise<UserData[] | null> {
    const session: string | null = await AsyncStorage.getItem("session");
  
    console.log("Requested user list.");
    
    if (!session){
      console.log("Non-existent session requesting user list?");
  
      return null;
    }
  
    const res: UserData[] | null = await get_user_list(session);
  
    if (res == null){
      console.log("Failed to request user list?");
      return null;
    }
  
    console.log("Successfully requested user list.");
  
    return res;
}
export { UserInfo, UserData, request_user_info, request_user_list}