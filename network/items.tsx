import { OrderItem } from "@/handlers/orders";
import { http_url } from "./defaults";

import { FoodItem } from "@/handlers/item";

const route = "/api/v1/items"

async function create_item(session: string, item: any): Promise<number> {
    const url: string = http_url + route + "/add?";

    console.log("Requesting server to create item.");
    
    try {
        const res: Response= await fetch(url + new URLSearchParams({
            cookie: session,
            cookieless: "true"
        }).toString(), {
            method: "POST",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: item.name,
                description: item.description,
                price: item.price,
                type: item.type
            }),
        })

        const json = await res.json();

        if (json.code){
            console.log("Failed to create item.");
            return -1;
        }
    }

    catch (err) {
        console.log("Error while requesting item creation?");
        return -2;
    }
        
    console.log("Successfully created item.");

    return 0;
}

async function destroy_item(session: string, uuid: string): Promise<number> {
    const url: string = http_url + route + "/delete?";

    console.log("Requesting server to destroy item.");
    
    try {
        const res: Response= await fetch(url + new URLSearchParams({
            cookie: session,
            cookieless: "true"
        }).toString(), {
            method: "POST",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                uuid: uuid
            }),
        })

        const json = await res.json();

        if (json.code){
            console.log("Failed to destroy item.");
            return -1;
        }
    }

    catch (err) {
        console.log("Error while requesting item destruction?");
        return -2;
    }
        
    console.log("Successfully destroyed item.");

    return 0;
}

async function get_item_list(): Promise<Array<FoodItem> | null> {
    const url: string = http_url + route + "/list";

    console.log("Requested item list from server.")

    try {
        const res = await fetch(url);

        const json = await res.json();

        if (json.code){
            console.log("Failed to acquire item list?");
            return null
        }

        console.log("Successfully acquired item list.");

        return json.items;
    }

    catch (err) {
        console.log("Error while requesting item list?");
        console.log(err);
        return null
    }
}

async function resolve_item(id: string): Promise<FoodItem | null>{
    const url: string = http_url + route + "/resolve?" + new URLSearchParams({
        uuid: id
    });

    console.log("Requested item resolve from server.")

    try {
        const res = await fetch(url);

        const json = await res.json();

        if (json.code){
            console.log("Failed to resolve item?");
            return null
        }

        console.log("Successfully resolved item.");

        return { uuid: json.uuid, name: json.name, description: json.description, price: json.price, type: json.type };
    }

    catch (err) {
        console.log("Error while resolving item?");
        console.log(err);
        return null
    }
}

async function resolve_items(items: OrderItem[]): Promise<FoodItem[] | null>{
    console.log("Requested multiple item resolve from server.");

    try {
        const requests = items.map((item: OrderItem) => {
            const url: string =  http_url + route + "/resolve?" + new URLSearchParams({ uuid: item.id }).toString()
            return fetch(url);
        }
        );

        const responses = await Promise.all(requests);

        const errors = responses.filter((response) => !response.ok);

        if (errors.length > 0) {
            throw errors.map((response) => Error(response.statusText));
        }

        const json = await Promise.all(responses.map((response) => response.json()));

        let valid: boolean = true;

        const resolved = json.map((data) => {
            if (data.code){
                valid = false;
                return data;
            }
            

            return { uuid: data.uuid, name: data.name, description: data.description, price: data.price }
        })

        if (!valid){
            console.log("Failed to resolve multiple items?");
            return null;
        }

        console.log("Successfully resolved items.");

        return resolved;
    }

    catch (err) {
        console.log("Error while resolving items?");
        console.log(err);
        return null
    }
}

export { create_item, destroy_item, get_item_list, resolve_item, resolve_items }