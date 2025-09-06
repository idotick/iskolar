import { get_monitor_socket, resolve_order } from "@/network/orders";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { create_order, update_order } from "@/network/orders";
import { request_resolve, UserInfo } from "./session";

type OrderInfo = { 
    type: string,
    id: string,
    status: number
};

type OrderData = {
    owner: string,
    items: OrderItem[],
}

type OrderItem = {
    id: string,
    amount: number
};

type ResolvedOrder = {
    owner_name: string,
    id: string,
    items: ItemData[],
    status: number
};

type ItemData = {
    name: string,
    description: string,
    amount: number
    cost: number,
};


async function start_monitoring(){
    const session: string | null = await AsyncStorage.getItem("session");

    if (session == null){
        console.log("Non-existent session while trying to start monitoring?");
        return null;
    }

    const user_info: UserInfo | null = await request_resolve();

    if (user_info == null){
        console.log("Failed to request user information while trying to start monitoring?");
        return null;
    }

    const uuid: string = user_info.uuid;

    const socket: WebSocket | null = await get_monitor_socket(session, uuid);

    if (socket == null){
        console.log("Failed to request monitor socket?");
        return null;
    }

    console.log("Succesfully started monitoring.");

    return socket;
}

async function request_order(order: OrderItem[]): Promise<string | null>{
    const session: string | null = await AsyncStorage.getItem("session");
  
    console.log("Requested order creation.");
    
    if (!session){
      console.log("Non-existent session while ordering?");
  
      return null;
    }
  
    const res = await create_order(session, order);
  
    if (res == null){
      console.log("Failed to create order.");
      return null;
    }
  
    console.log("Successfully created order no. " + res + ".");
  
    return res;
}

async function request_order_data(order_id: string) {
    const session: string | null = await AsyncStorage.getItem("session");
  
    console.log("Requested order data resolve.");
    
    if (!session){
      console.log("Non-existent session while resolving order data?");
  
      return null;
    }

    const res: OrderData | null = await resolve_order(session, order_id);

    if (res == null){
        console.log("Unable to request order data?");
        
        return null;
    }

    return res;
}
  

async function request_update_order(order_id: string, status: number) {
    const session: string | null = await AsyncStorage.getItem("session");
  
    console.log("Requested order status update.");
    
    if (!session){
      console.log("Non-existent session while updating order status?");
  
      return null;
    }
  
    const code = await update_order(session, order_id, status);
  
    if (code){
      console.log("Failed to update status.");
  
      return code;
    }
  
    console.log("Successfully updated order.");
  
    return code;
}
  

export { OrderInfo, OrderItem, OrderData, ResolvedOrder, ItemData, start_monitoring, request_order, request_order_data, request_update_order }