import { http_url, ws_url } from "./defaults";

import { OrderData, OrderItem } from "@/handlers/orders";

const route = "/api/v1/orders";

async function get_monitor_socket(session: string, uuid: string): Promise<WebSocket | null>{
    const url = ws_url + route + "/monitor?" + new URLSearchParams({
        cookie: session,
        cookieless: "true"
    }).toString();
    
    console.log("Sent monitor request to server.");
    
    try {
        const socket: WebSocket = new WebSocket(url);

        console.log("Successfully sent monitor request to server.");

        return socket;
    }

    catch (err){
        console.log("Error while establishing a socket connection for monitoring orders?");
        console.log(err);

        return null;
    }
}

async function create_order(session: string, order: Array<OrderItem>): Promise<string | null> {
    const url: string = http_url + route + "/create"

    console.log("Requested order creation from the server; ")

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
            console.log("Server failed to create new order?");

            return null;
        }

        console.log("Server created new order.");
    
        return json.oid;
    }

    catch (err: any) {
        console.log("Error while creating new order?");
        console.log(err);

        return null;
    }
}

async function resolve_order(session: string, oid: string): Promise<OrderData | null> {
    const url: string = http_url + route + "/resolve?" + new URLSearchParams({
        cookie: session,
        cookieless: "true",
        oid: oid
    }).toString();

    console.log("Requested order resolve from the server; ")

    try {
        const res = await fetch(url);

        const json: any = await res.json();

        if (json.code){
            console.log("Server failed to resolve order?");

            return null;
        }

        console.log("Server resolved order.");
    
        return { owner: json.uuid, items: json.items.map((item: any) => ({amount: item.amount, id: item.uuid})) }
    }

    catch (err: any) {
        console.log("Error while creating new order?");
        console.log(err);

        return null;
    }
}

async function update_order(session: string, order_id: string, status: number) {
    const url: string = http_url + route + "/update?" + new URLSearchParams({
        cookie: session,
        cookieless: "true"
    }).toString();

    console.log("Requested order status update from the server. ")

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
            console.log("Server failed to update order status?");

            return -1;
        }

        console.log("Server updated status.");
    
        return 0;

    } catch (err: any) {
        console.log("Error while creating new order?");
        console.log(err);

        return -2;
    }
}


export { get_monitor_socket, create_order, resolve_order, update_order }