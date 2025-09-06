import { http_url } from "./defaults";
import { FoodItem } from '@/handlers/item';

const route = "/api/v1/menu"

async function get_menu_list(): Promise<FoodItem[] | null> {
    const url = http_url + route + "/resolve";

    try {
        const res: Response = await fetch(url);

        const json = await res.json();

        if (json.code){
            console.log("Failed to fetch menu list?");
            return null;
        }

        return json.menu;
    }

    catch (err){
        console.log("Error while fetching menu list?");
        return null
    }
}

async function add_to_menu(session: string, uuid: string){
    const url = http_url + route + "/add?";

    console.log("Posting menu add request to server.");

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
            console.log("Failed to post menu add request.");
            return -1;
        }

        console.log("Successfully posted menu add request.");

        return 0;
    }

    catch (err) {
        console.log("Error while posting menu add request?");
        console.log(err);
        return -2;
    }
}

async function remove_from_menu(session: string, uuid: string){
    const url = http_url + route + "/remove?";

    console.log("Posting menu remove request to server.");

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
            console.log("Failed to post menu remove request.");
            return -1;
        }

        console.log("Successfully posted menu remove request.");

        return 0;
    }

    catch (err) {
        console.log("Error while posting menu remove request?");
        console.log(err);
        return -2;
    }
}

async function clear_menu(session: string){
    const url = http_url + route + "/clear?";

    console.log("Posting menu clear request to server");

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
            console.log("Failed to post menu clear request.");
            return -1;
        }

        console.log("Successfully posted menu clear request.");

        return 0;
    }

    catch (err) {
        console.log("Error while posting menu clear request?");
        console.log(err);
        return -2;
    }
}



export { add_to_menu, get_menu_list, remove_from_menu, clear_menu }