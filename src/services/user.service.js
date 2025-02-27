const BASE_URL = "https://digitalmoney.digitalhouse.com/api";

// GET user email, firstname, lastname, phone, and dni from a specific user.

export const getUser = async ( token, user_id) => {
    try {
        const response = await fetch(`${BASE_URL}/users/${user_id}`, {
            method: "GET",
            headers: {
                Authorization: `${token}`,
                "Content-Type": "application/json",
            },
        });
        if (!response.ok) {
            const errorDetails = await response.json();
            throw new Error(`Error ${response.status}: ${errorDetails.message}`);
        }
        return response.json();
    } catch (error) {
        console.error("Error fetching user data:", error);
        throw error;
    }
};

// POST 

export const newUser = async (data) => {
    try {
      const response = await fetch(`${BASE_URL}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      // ⚠️ IMPORTANTE: Convertir la respuesta a JSON
      const responseData = await response.json();
      console.log(responseData)
  
      if (!response.ok && response.status === 409) {
        throw new Error("Error: El email ya se encuentra registrado.");
      }
      
      // Si la respuesta no es exitosa, lanzar un error
      if (!response.ok && response.status !== 409) {
        throw new Error(responseData.message || "Error al crear la cuenta");
      }
  
      return responseData; // Devolver los datos correctamente
  
    } catch (error) {
      console.error("Error en la creación del usuario:", error.message);
      throw error;
    }
  };

// PUT 

export const updateUser =async () => {

}