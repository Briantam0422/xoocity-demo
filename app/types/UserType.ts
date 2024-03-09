import type { Dayjs } from "dayjs";
export type UserType = {
    id?: number;
    email?: string;
    email_verified_at?: Dayjs;
    first_name: string;
    last_name: string;
    gender: string;
    birthday: Dayjs;
    country: string;
    city?: string;
    address?: string;
    profile_intro?: string;
    avatar_path?: string;
}