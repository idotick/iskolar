import { httpsURL, wsURL } from "./defaults";

import { OrderData, OrderItem } from "@/handlers/orders";

const route = "/api/v1/orders";

export async function resolveMonitor(session: string, uuid: string): Promise<WebSocket | null>{
    const url: string = wsURL + route + "/monitor?" + new URLSearchParams({
        cookie: session,
        cookieless: "true"
    }).toString();
    
    try {
        const socket: WebSocket = new WebSocket(url);

        return socket;
    }

    catch (err){
        console.log("Error while establishing a socket connection for monitoring orders?");
        console.log(err);

        return null;
    }
}

export async function createOrder(session: string, order: Array<OrderItem>): Promise<string | null> {
    const url: string = httpsURL + route + "/create"

    const formatted_order = order.map((item) => {
        return {uuid: item.id, amount: item.amount};
    });

    try {
        const res = await fetch(url, 
         {
            method: "POST",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                items: formatted_order
            }),
        });
    
        const json: any = await res.json();

        if (json.code){
            return null;
        }
    
        return json.oid;
    }

    catch (err: any) {
        console.log(err);

        return null;
    }
}

export async function resolveOrder(session: string, oid: string): Promise<OrderData | null> {
    const url: string = httpsURL + route + "/resolve?" + new URLSearchParams({
        cookie: session,
        cookieless: "true",
        oid: oid
    }).toString();

    try {
        const res = await fetch(url);

        const json: any = await res.json();

        if (json.code){
            return null;
        }
    
        return { owner: json.uuid, items: json.items.map((item: any) => ({amount: item.amount, id: item.uuid})) }
    }

    catch (err: any) {
        console.log("Error while creating new order?");
        console.log(err);

        return null;
    }
}

export async function updateOrder(session: string, order_id: string, status: number) {
    const url: string = httpsURL + route + "/update?" + new URLSearchParams({
        cookie: session,
        cookieless: "true"
    }).toString();

    try {
        const res = await fetch(url, 
         {
            method: "POST",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                oid: order_id,
                status: status,
            }),
        });

        const json: any = await res.json();

        if (json.code){
            return -1;
        }
    
        return 0;

    } catch (err: any) {
        console.log("Error while creating new order?");
        console.log(err);

        return -2;
    }
}