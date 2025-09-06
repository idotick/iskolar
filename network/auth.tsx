import { http_url } from "./defaults";
import { sha512 } from "js-sha512";

const route: string = "/api/v1/auth"

async function login_user(email: string, password: string): Promise<any | null> {
    
    const url = http_url + route + "/login";

    const hash: string = sha512(password);

    console.log("Requested server to login user.");

    try {
        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                hash: hash
            }),
        });
    
        const json = await res.json();

        if (json.code == 1){
            return { code: -1 }
        }

        if (json.code == 2){
            return { code: 2}
        }

        if (json.code == 3){
            return { code: 1 }
        }

        if (json.code == 4){
            return { code: -3 }
        }

        console.log("Successfully posted login request.");

        return { cookie: json.cookie, code: json.code };

    } catch (err) {
        console.log("Error while posting login request?");
        console.log(err)

        return { code: -2 };
    }
}

async function logout_user(session: string): Promise<number> {
    const url: string = http_url + route + "/logout" + "?"  + new URLSearchParams({
        cookie: session,
        cookieless: "true"
    }).toString();

    console.log("Requested server to destroy session. ");

    try {
        const res: Response = await fetch(url, {
            method: "POST",
        });
    
        const json: any = await res.json();

        if (json.code == 1){
            console.log("Server doesn't recognize session.");
            return 1;
        }
    
        if (json.code){
            console.log("Server failed to destroy session?");
    
            return -1;
        }
    
        console.log("Server destroyed session.");

        return 0;
    } catch (err) {
        console.log("Error while requesting the server to destroy session?");

        return -2;
    }
}

async function validate_user(session: string){
    const url: string = http_url + route + "/validate" + "?" + new URLSearchParams({
        cookie: session,
        cookieless: "true"
    }).toString();

    console.log("Requested server to validate.");

    try {
        const res: Response = await fetch(url);
    
        const json: any = await res.json();
    
        if (json.code){
            return -1;
        }
    } catch (err) {
        console.log("Error while validating session to server?");

        console.log(err);

        return -2;
    }
    

    return 0;
}

export { login_user, validate_user, logout_user };