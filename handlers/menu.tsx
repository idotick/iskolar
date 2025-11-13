import AsyncStorage from "@react-native-async-storage/async-storage";

import { removeMenuItem, resolveMenuList } from "@/network/menu";

export async function requestItemRemoval(uuid: string): Promise<boolean> {
  const session: string | null = await AsyncStorage.getItem("session");

  if (session == null){
    return false;
  }

  const res: number = await removeMenuItem(session, uuid);

  if (res){
    return false;
  }

  return true;
}

export async function requestMenuList(){
  const res = await resolveMenuList();

  if (res == null) {
    return null;
  }


  return res;
}
