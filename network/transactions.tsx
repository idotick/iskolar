import { OrderItem } from "@/handlers/orders";

import { http_url } from "./defaults";

const route: string = "/api/v1/transactions"

function pack_items_to_text(items: OrderItem[]){
    let packed_text: string = "";

    items.forEach((item: OrderItem) => {
        packed_text += item.id + "," + item.amount.toString();
    });

    return packed_text;
}

async function create_transaction(session: string, uuid: string, items: OrderItem[]){
    const url: string = http_url + route + "/add?" + new URLSearchParams({
        cookie: session,
        cookieless: "true"
    }).toString();

    const packed: string = pack_items_to_text(items);

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
            console.log("Failed to post transaction creation request to server?");
            return -1;
        }

        console.log("Successfully posted transaction creation request to server.");

        return 0;
    }

    catch (err) {
        console.log("Error while posting transaction creation request to server?");
        console.log(err);

        return -2;
    }
}

export { create_transaction }