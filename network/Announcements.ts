import { AnnouncementContent, AnnouncementData, RawAnnouncementData } from "@/handlers/Announcements";
import { httpsURL } from "./Network";

const route: string = "/api/v1/announcements";

export async function resolveAnnouncementList(): Promise<RawAnnouncementData[] | null> {
    const url: string = httpsURL + route + "/list";

    try {
        const res = await fetch(url);

        const json = await res.json();

        if (json.code){
            return null;
        }

        return json.announcements;
    }

    catch (err) {
        console.log("Error while resolving item list?");
        console.log(err);
        return null;
    }
};

export async function resolveAnnouncementContent(uuid: string) {
    const url: string = httpsURL + route + "/resolve?" + new URLSearchParams({
        uuid: uuid
    }).toString() + "&content=true";

    try {
        const res = await fetch(url);

        if (res.headers.get("content-type")?.includes("application/json")){
            return await res.json();
        }

        const data = await res.text();

        return { code: 0, content: data };
    }

    catch (err) {
        console.log("Error while resolving announcement content?");
        console.log(err);
        return null;
    }
};

export async function resolveAnnouncement(uuid: string): Promise<AnnouncementData | null> {
    const url: string = httpsURL + route + "/resolve?" + new URLSearchParams({
        uuid: uuid
    }).toString();

    try {
        const res = await fetch(url);

        const json = await res.json();

        if (json.code){
            return null;
        }

        const { code, ...data } = json;

        return data;
    }

    catch (err) {
        console.log("Error while resolving announcement content?");
        console.log(err);
        return null;
    }
};