import { resolveMonitor, resolveOrder } from "@/network/orders";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { createOrder, updateOrder } from "@/network/orders";

import { UserInfo } from "./user";
import { requestResolve } from "./session";

export type OrderInfo = { 
    type: string,
    id: string,
    status: number
};

export type OrderData = {
    owner: string,
    items: OrderItem[],
}

export type OrderItem = {
    id: string,
    amount: number
};

export type ResolvedOrder = {
    owner_name: string,
    id: string,
    items: ItemData[],
    status: number
};

export type ItemData = {
    name: string,
    description: string,
    amount: number
    cost: number,
};


export async function startMonitoring(){
    const session: string | null = await AsyncStorage.getItem("session");

    if (session == null){
        return null;
    }

    const userInfo: UserInfo | null = await requestResolve();

    if (userInfo == null){
        return null;
    }

    const uuid: string = userInfo.uuid;

    const socket: WebSocket | null = await resolveMonitor(session, uuid);

    if (socket == null){
        return null;
    }

    return socket;
}

export async function requestOrder(order: OrderItem[]): Promise<string | null>{
    const session: string | null = await AsyncStorage.getItem("session");

    if (!session){
      return null;
    }
  
    const res = await createOrder(session, order);
  
    return res;
}

export async function requestOrderData(orderID: string) {
    const session: string | null = await AsyncStorage.getItem("session");
    
    if (!session){
      return null;
    }

    const res: OrderData | null = await resolveOrder(session, orderID);

    if (res == null){
        return null;
    }

    return res;
}
  

export async function requestOrderUpdate(order_id: string, status: number) {
    const session: string | null = await AsyncStorage.getItem("session");
  
    if (!session){
      return null;
    }
  
    const code = await updateOrder(session, order_id, status);
  
    if (code){
      return code;
    }
  
    return code;
}