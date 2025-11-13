import AsyncStorage from "@react-native-async-storage/async-storage";

import { addCredit } from "@/network/bank";


async function requestCredit(uuid: string, amount: number): Promise<number>{
    const session: string | null = await AsyncStorage.getItem("session");
    
    if (!session){
      return -2;
    }
  
    const code = await addCredit(session, uuid, amount);
  
    if (code) {
        return -1;
    }
  
    return 0;
}