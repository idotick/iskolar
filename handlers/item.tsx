import AsyncStorage from "@react-native-async-storage/async-storage";

import { add_to_menu } from "@/network/menu";

import { create_item, destroy_item, get_item_list } from "@/network/items";

type FoodItem = {
    uuid: string,
    name: string,
    type: string,
    description: string,
    price: number,
};

async function request_item_to_menu(uuid: string): Promise<boolean>{
    const session: string | null = await AsyncStorage.getItem("session");
  
    if (session == null){
      console.log("Non-existent session?");
      return false;
    }
  
    const res: number = await add_to_menu(session, uuid);
  
    if (res){
      console.log("Failed to transfer item to menu?");
      return false;
    }
  
    console.log("Successfully added item to menu.");
  
    return true;
  }
  
  async function request_item_creation(name: string, description: string, type: string, price: number): Promise<boolean> {
    const session: string | null = await AsyncStorage.getItem("session");
  
    if (session == null){
      console.log("Non-existent session?");
      return false;
    }
  
    const item = {
      name: name,
      description: description,
      type: type,
      price: price
    };
  
    const res: number = await create_item(session, item);
  
    if (res){
      console.log("Failed to create item?");
      return false;
    }
  
    console.log("Successfully created item.");
  
    return true;
  }
  
  async function request_item_destruction(uuid: string): Promise<boolean> {
    const session: string | null = await AsyncStorage.getItem("session");
  
    if (session == null){
      console.log("Non-existent session?");
      return false;
    }
  
    const res: number = await destroy_item(session, uuid);
  
    if (res){
      console.log("Failed to destroy item?");
      return false;
    }
  
    console.log("Successfully destroyed item.");
  
    return true;
  }
  
  async function request_item_list(){
    const res = await get_item_list();
  
    if (res == null) {
      console.log("Failed to request item list");
      return null;
    }
  
    console.log("Successfully requested item list.");
  
    return res;
  }
  

export { FoodItem, request_item_creation, request_item_destruction, request_item_list, request_item_to_menu}