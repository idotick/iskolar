import { resolveAnnouncement, resolveAnnouncementContent, resolveAnnouncementList } from "@/network/Announcements";
import { unixToDate } from "@/util/Helpers";

export type AnnouncementData = {
    uuid: string,
    title: string,
    author: string,
    created: Date,
    modified: Date,
};

export type RawAnnouncementData = {
    uuid: string,
    title: string,
    author: string,
    created: number,
    modified: number
};

export type AnnouncementContent = {
    uuid: string,
    text: string
};  

export async function requestAnnouncements(): Promise<AnnouncementData[]> {
    const res: RawAnnouncementData[] | null = await resolveAnnouncementList();

    if (!res){
        return [];
    }

    const formatted: AnnouncementData[] = res.map((prev) => { return {
        ...prev,
        created: unixToDate(prev.created),
        modified: unixToDate(prev.modified)
    }});

    return formatted;
};

export async function requestAnnouncement(uuid: string): Promise<AnnouncementData | null> {
    const res: AnnouncementData | null = await resolveAnnouncement(uuid);
    
    return res;
};

export async function requestAnnouncementContent(uuid: string): Promise<string | null> {
    const res = await resolveAnnouncementContent(uuid);

    if (res.code){
        return null;
    }

    return res.content;
};