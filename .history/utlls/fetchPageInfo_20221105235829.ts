import { PageInfo } from "../typings";

export const fetchSkills = async () => {
    const res = await fetch (`${process.env.NEXT_PUBLIC_BASE_URL}/api/getpageInfo`);

    const data = await res.json();
    const pageInfo : PageInfo[] = data.pageInfo;

    return pageInfo;
}