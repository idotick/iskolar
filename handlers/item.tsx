import AsyncStorage from "@react-native-async-storage/async-storage";

import { addMenuItem } from "@/network/menu";

import { createItem, destroyItem, resolveItemList } from "@/network/items";

export type FoodItem = {
    uuid: string,
    name: string,
    type: string,
    description: string,
    price: number,
};

export async function request_item_to_menu(uuid: string): Promise<boolean>{
    const session: string | null = await AsyncStorage.getItem("session");
  
    if (session == null){
      return false;
    }
  
    const res: number = await addMenuItem(session, uuid);
  
    if (res){
      return false;
    }
  
    return true;
  }
  
  export async function request_item_creation(name: string, description: string, type: string, price: number): Promise<boolean> {
    const session: string | null = await AsyncStorage.getItem("session");
  
    if (session == null){
      return false;
    }
  
    const item = {
      name: name,
      description: description,
      type: type,
      price: price
    };
  
    const res: number = await createItem(session, item);
  
    if (res){
      return false;
    }

    return true;
  }
  
  export async function requestItemDeletion(uuid: string): Promise<boolean> {
    const session: string | null = await AsyncStorage.getItem("session");
  
    if (session == null){
      return false;
    }
  
    const res: number = await destroyItem(session, uuid);
  
    if (res){
      return false;
    }

    return true;
  }
  
  export async function requestItemList(){
    const res = await resolveItemList();
  
    if (res == null) {
      return null;
    }

  
    return res;
  }
  