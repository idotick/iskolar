import { OrderItem } from "@/handlers/Orders";

import { httpsURL } from "./Network";

const route: string = "/api/v1/transactions"

function packItemData(items: OrderItem[]){
    let packed_text: string = "";

    items.forEach((item: OrderItem) => {
        packed_text += item.id + "," + item.amount.toString();
    });

    return packed_text;
}

export async function createTransaction(session: string, uuid: string, items: OrderItem[]){
    const url: string = httpsURL + route + "/add?" + new URLSearchParams({
        cookie: session,
        cookieless: "true"
    }).toString();

    const packed: string = packItemData(items);

    console.log("Posted transaction creation request to server.");

    try {
        const res: Response = await fetch(url, {
            method: "POST",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                uuid: uuid,
                items: packed
            }),
        })

        const json = await res.json();

        if (json.code){
            return -1;
        }

        return 0;
    }

    catch (err) {
        console.log("Error while posting transaction creation request to server?");
        console.log(err);

        return -2;
    }
}