import AsyncStorage from "@react-native-async-storage/async-storage";

import { remove_from_menu, get_menu_list } from "@/network/menu";

async function request_item_removal(uuid: string): Promise<boolean> {
  const session: string | null = await AsyncStorage.getItem("session");

  if (session == null){
    console.log("Non-existent session?");
    return false;
  }

  const res: number = await remove_from_menu(session, uuid);

  if (res){
    console.log("Failed to remove item from menu?");
    return false;
  }

  console.log("Successfully removed item from menu.");

  return true;
}

async function request_menu_list(){
  const res = await get_menu_list();

  if (res == null) {
    console.log("Failed to request menu list");
    return null;
  }

  console.log("Successfully requested menu list.");

  return res;
}

export { request_item_removal, request_menu_list }