import { LoginBodyType, LoginResponseType } from "@/types/auth.types";

const BASE_URL = "https://digitalmoney.digitalhouse.com/api";

// POST login

export const login = async (data: LoginBodyType): Promise<LoginResponseType> => {
  try {
    const response = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Error during login");
    }

    return await response.json();
  } catch (error: any) {
    throw new Error(error.message);
  }
}


// export const login = async (data) => {

//   try {
//     const response = await fetch(`${BASE_URL}/login`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     });
    
//     console.log(response);
//     if (!response.ok) {
//       const errorData = await response.json();
//       throw new Error(errorData.error || "Error during login");
//     }
    
//     return await response.json();
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };


// POST 

export const logout = async () => {

}

