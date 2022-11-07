import { Education } from "../typings";

export const fetchSkills = async () => {
    const res = await fetch (`${process.env.NEXT_PUBLIC_BASE_URL}/api/getEducations`);

    const data = await res.json();
    const Educations : Education[] = data.Educations;

    return Educations;
}