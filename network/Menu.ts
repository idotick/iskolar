import { httpsURL } from "./Network";

import { FoodItem } from '@/handlers/Item';

const route = "/api/v1/menu"

export async function resolveMenuList(): Promise<FoodItem[] | null> {
    const url: string = httpsURL + route + "/resolve";

    try {
        const res: Response = await fetch(url);

        const json = await res.json();

        if (json.code){
            return null;
        }

        return json.menu;
    }

    catch (err){
        console.log("Error while fetching menu list?");
        return null
    }
}

export async function addMenuItem(session: string, uuid: string){
    const url: string = httpsURL + route + "/add?";

    try {
        const res: Response = await fetch(url + new URLSearchParams({
            cookie: session,
            cookieless: "true"
        }).toString(), {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                uuid: uuid
            })
        });

        const json = await res.json();

        if (json.code){
            return -1;
        }

        return 0;
    }

    catch (err) {
        console.log("Error while posting menu add request?");
        console.log(err);
        return -2;
    }
}

export async function removeMenuItem(session: string, uuid: string){
    const url: string = httpsURL + route + "/remove?";

    try {
        const res: Response = await fetch(url + new URLSearchParams({
            cookie: session,
            cookieless: "true"
        }).toString(), {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                uuid: uuid
            })
        });

        const json = await res.json();

        if (json.code){
            return -1;
        }

        return 0;
    }

    catch (err) {
        console.log("Error while posting menu remove request?");
        console.log(err);
        return -2;
    }
}

export async function clearMenu(session: string){
    const url: string = httpsURL + route + "/clear?";

    try {
        const res: Response = await fetch(url + new URLSearchParams({
            cookie: session,
            cookieless: "true"
        }).toString(), {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
        });

        const json = await res.json();

        if (json.code){
            return -1;
        }

        return 0;
    }

    catch (err) {
        console.log("Error while posting menu clear request?");
        console.log(err);
        return -2;
    }
}