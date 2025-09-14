import { http_url } from "./defaults";
import { sha512 } from "js-sha512";

const route: string = "/api/v1/auth"

export type LoginResponse = {
    code: -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3,
    cookie?: string,
};

export type LogoutResponse = {
    code: -2 | -1 | 0 | 1 | 2
};

export type ValidateResponse = {
    code: -2 | -1 | 0 | 1
};

async function login_user(email: string, password: string): Promise<LoginResponse> {
    const url = http_url + route + "/login";

    const hash: string = sha512(password);

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

        if (json.code){
            return { code: json.code };
        }

        return { cookie: json.cookie, code: json.code };

    } catch (err) {
        console.log("Error while posting login request?");
        console.log(err)

        return { code: -1 };
    }
}

async function logout_user(session: string): Promise<LogoutResponse> {
    const url: string = http_url + route + "/logout" + "?"  + new URLSearchParams({
        cookie: session,
        cookieless: "true"
    }).toString();

    try {
        const res: Response = await fetch(url, {
            method: "POST",
        });
    
        const json: any = await res.json();

        return { code: json.code };

    } catch (err) {
        console.log("Error while requesting the server to destroy session?");

        return { code: -1 };
    }
}

async function validate_user(session: string){
    const url: string = http_url + route + "/validate" + "?" + new URLSearchParams({
        cookie: session,
        cookieless: "true"
    }).toString();

    try {
        const res: Response = await fetch(url);
    
        const json: any = await res.json();
    
        return { code: json.code };

    } catch (err) {
        console.log("Error while validating session to server?");

        console.log(err);

        return { code: -1 };
    }
    
}

export { login_user, validate_user, logout_user };