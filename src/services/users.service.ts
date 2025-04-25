import { UserDataType } from "@/types/user.types";

const BASE_URL = "https://digitalmoney.digitalhouse.com/api";

export const updateUser = async (user_id: string, updatedData: Partial<UserDataType>, token: string) => {
    const response = await fetch(`${BASE_URL}/users/${user_id}`, {
      method: "PATCH",
      headers: {
        Authorization: `${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    });
  
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || `Error ${response.status}`);
    }
  
    return response.json(); // Devuelve el usuario actualizado
  };
  