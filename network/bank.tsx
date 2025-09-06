import { http_url } from "./defaults"

const route: string = "/api/v1/bank"

async function add_balance(session: string, uuid: string, amount: number){
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

        if (json.code) {
            console.log("Failed to request balance credit from server?");
            return -1;
        }

        console.log("Successfully added credit to balance.");

        return 0;
    }

    catch (err) {
        console.log("Error while adding to balance?")
        console.log(err);

        return -2;
    }
}

export { add_balance }