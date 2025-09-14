import { http_url } from "./defaults"

const route: string = "/api/v1/bank"

export type CreditResponse = {
    code: -1 | 0 | 1
};

export type BalanceResponse = {
    code: -1 | 0 | 1,
    balance?: number
};  

export async function add_credit(session: string, uuid: string, amount: number): Promise<CreditResponse> {
    const url = http_url + route + "/credit?" + new URLSearchParams({
        cookie: session,
        cookieless: "true"
    }).toString();

    try {
        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                uuid: uuid,
                amount: amount,
            }),
        });

        const json = await res.json();

        return { code: json.code };
    }

    catch (err) {
        return { code: -1 };
    }
}

export async function get_balance(session: string): Promise<BalanceResponse> {
    const url: string = http_url + route + "/balance" + "?" + new URLSearchParams({
        cookie: session,
        cookieless: "true"
    }).toString();

    try {
        const res: Response = await fetch(url);

        const json: any = await res.json();

        if (json.code){
            return { code: json.code };
        }

        return { code: json.code, balance: json.balance };

    } catch (err){
        return { code: -1 };
    }
}
