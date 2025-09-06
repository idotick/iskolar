import AsyncStorage from "@react-native-async-storage/async-storage";

import { add_balance } from "@/network/bank";


async function request_balance_add(uuid: string, amount: number): Promise<number>{
    const session: string | null = await AsyncStorage.getItem("session");
  
    console.log("Requested balance addition.");
    
    if (!session){
      console.log("Non-existent session while adding to balance?");
  
      return -2;
    }
  
    const code = await add_balance(session, uuid, amount);
  
    if (code) {
        console.log("Failed to request balance addition?");
        return -1;
    }
    
    console.log("Successfully added to balance.");
  
    return 0;
}

export { request_balance_add }