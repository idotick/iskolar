import AsyncStorage from "@react-native-async-storage/async-storage";

import { createTransaction } from "@/network/Transactions";

import { OrderItem } from "./Orders";

export async function requestTransaction(uuid: string, items: OrderItem[]): Promise<boolean> {
    const session: string | null = await AsyncStorage.getItem("session");

    if (session == null){
        return false;
    }

    const code: number = await createTransaction(session, uuid, items);

    if (code){
        console.log("Failed to request transaction creation?");
        return false;
    }

    return true;
}
