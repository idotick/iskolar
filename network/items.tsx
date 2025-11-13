import { OrderItem } from "@/handlers/orders";
import { httpURL } from "./defaults";

import { FoodItem } from "@/handlers/item";

const route = "/api/v1/items"

export async function createItem(session: string, item: any): Promise<number> {
    const url: string = httpURL + route + "/add?";
    
    try {
        const res: Response = await fetch(url + new URLSearchParams({
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
            return -1;
        }
    }

    catch (err) {
        return -2;
    }

    return 0;
}

export async function destroyItem(session: string, uuid: string): Promise<number> {
    const url: string = httpURL + route + "/delete?";
    
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
            return -1;
        }
    }

    catch (err) {
        return -2;
    }

    return 0;
}

export async function resolveItemList(): Promise<Array<FoodItem> | null> {
    const url: string = httpURL + route + "/list";

    try {
        const res = await fetch(url);

        const json = await res.json();

        if (json.code){
            return null
        }

        return json.items;
    }

    catch (err) {
        console.log("Error while resolving item list?");
        console.log(err);
        return null
    }
}

export async function resolveItem(id: string): Promise<FoodItem | null>{
    const url: string = httpURL + route + "/resolve?" + new URLSearchParams({
        uuid: id
    });

    try {
        const res = await fetch(url);

        const json = await res.json();

        if (json.code){
            return null
        }

        return { uuid: json.uuid, name: json.name, description: json.description, price: json.price, type: json.type };
    }

    catch (err) {
        console.log("Error while resolving item?");
        console.log(err);
        return null
    }
}

export async function resolveItems(items: OrderItem[]): Promise<FoodItem[] | null>{
    try {
        const requests = items.map((item: OrderItem) => {
            const url: string =  httpURL + route + "/resolve?" + new URLSearchParams({ uuid: item.id }).toString()
            return fetch(url);
        });

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
            return null;
        }

        return resolved;
    }

    catch (err) {
        console.log("Error while resolving items?");
        console.log(err);
        return null
    }
}