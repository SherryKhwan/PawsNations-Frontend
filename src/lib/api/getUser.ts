import { User } from "@/types/data";
import requests from "@/utils/http";

export default async function getUser(userId: string) {
  try {
    const users = await requests.get<User>(`/users/user/${userId}/profile`);
    return users.data;
  } catch (e) {
    console.log(e);
  }
}
