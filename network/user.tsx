import { http_url } from "./defaults";
import { sha512 } from "js-sha512";

import { UserInfo } from "@/handlers/session";
import { UserData } from "@/handlers/user";

const route: string = "/api/v1/users";

async function register_user(id: string, email: string, name: string, password: string): Promise<string | null> {
    const url: string = http_url + route + "/registe";
    
    const hash: string = sha512(password);

    console.log("Posted register request.");

    try {
        const res: Response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: id,
                email: email,
                name: name,
                hash: hash
            }),
        });
        
        const json: any = await res.json();

        if (json.code){
            console.log(json.code);
            console.log("Failed to post register request?");

            return null;
        }

        console.log("Successfully posted register request.");

        return json.cookie;
        
    } catch (err) {
        console.log("Error while posting register request?");

        console.log(err);

        return null;
    }
}

async function resolve_user(session: string, user_id: string | null = null): Promise<UserInfo | null> {
    let url: string;

    if (user_id == null){
        url = http_url + route + "/resolve?" + new URLSearchParams({
            cookie: session,
            cookieless: "true",
        });
    }

    else {
        url = http_url + route + "/resolve?" + new URLSearchParams({
            cookie: session,
            cookieless: "true",
            uuid: user_id
        });
    }

    try {
        const res: Response = await fetch(url);

        const json: any = await res.json();

        if (json.code){
            console.log("Failed to send user resolve request?");
            return null;
        }

        console.log("Successfully fetched user resolve info.");
        
        return {uuid: json.uuid, id: json.id, email: json.email, name: json.name};
        
    } catch (err) {
        console.log("Error while sending user resolve request?");
        console.log(err);
        return null;
    }
}

async function get_user_list(session: string): Promise<UserData[] | null> {
    const url: string = http_url + route + "/list" + "?" + new URLSearchParams({
            cookie: session,
            cookieless: "true"
    }).toString();

    console.log("Requested server to list users.");

    try {
        const res: Response = await fetch(url);
    
        const json: any = await res.json();
    
        if (json.code){
            console.log("Failed to request user list?");
            return null;
        }

        return json.users;

    } catch (err) {
        console.log("Error while requesting user list?");

        console.log(err);

        return null;
    }
    
}

export { register_user, resolve_user, get_user_list };