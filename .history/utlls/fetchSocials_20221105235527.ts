import { Social } from "../typings";

export const fetchSkills = async () => {
    const res = await fetch (`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`);

    const data = await res.json();
    const socials : Social[] = data.socials;

    return socials;
}