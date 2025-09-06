import { create_transaction } from "@/network/transactions";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { OrderItem } from "./orders";

async function request_transaction(uuid: string, items: OrderItem[]): Promise<boolean> {
    const session: string | null = await AsyncStorage.getItem("session");

    if (session == null){
        console.log("Non-existent session while requesting transaction creation?");
        return false;
    }

    const code: number = await create_transaction(session, uuid, items);

    if (code){
        console.log("Failed to request transaction creation?");
        return false;
    }

    console.log("Successfully requested transaction creation.");

    return true;
}

export { request_transaction }