const BASE_URL = "https://digitalmoney.digitalhouse.com/api";

// GET all cards by account_id

export const getAllCards = async ( account_id, token) => {
  console.log( account_id, token)
    try {

      if (!token || !account_id) {
        throw new Error("Token o account_id no válidos");
      }
  
      const response = await fetch(`${BASE_URL}/accounts/${account_id}/cards`, {
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
  
      const cards = await response.json();
      return Array.isArray(cards) ? cards : [];
  
    } catch (error) {
      console.error("Error fetching cards:", error.message);
      return [];
    }
  }; 

// GET card by Id
export const getCardId = async (account_id, card_id, token) => {
  try {
    if (!token || !account_id) {
      throw new Error("Token o account_id no válidos");
    }
    
    console.log("🔹 Enviando GET request a la API...");
    console.log(`URL: ${BASE_URL}/accounts/${account_id}/cards/${card_id}`);
    console.log("Token:", token);

    const response = await fetch(`${BASE_URL}/accounts/${account_id}/cards/${card_id}`, {
      method: 'GET',
      headers: {
        Authorization: `${token}`,
        "Content-Type": "application/json",
      },
    });

    console.log("🔹 Respuesta de la API:", response);

    if (!response.ok) {
      const errorData = await response.json();
      console.error("⚠️ Error en la respuesta de la API:", errorData);
      throw new Error(`Error ${response.status}: ${errorData.message || "No se pudo seleccionar la tarjeta"}`);
    }

    console.log("✅ Tarjeta seleccionada correctamente");

  } catch (error) {
    console.error("Error select card:", error);
    throw error;
  }
}


// POST 

export const newCard = async (account_id, token, data) => {
  try {
    if (!token || !account_id) {
      throw new Error("Token o account_id no válidos");
    }
    
    console.log("🔹 Enviando POST request a la API...");
    console.log(`URL: ${BASE_URL}/accounts/${account_id}/cards`);
    console.log("Token:", token);

    const response = await fetch(`${BASE_URL}/accounts/${account_id}/cards`, {
      method: 'POST',
      headers: {
        Authorization: `${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    console.log("🔹 Respuesta de la API:", response);

    if (!response.ok) {
      const errorData = await response.json();
      console.error("⚠️ Error en la respuesta de la API:", errorData);
      throw new Error(`Error ${response.status}: ${errorData.message || "No se pudo agregar la tarjeta"}`);
    }

    console.log("✅ Tarjeta agregada con exito");

  } catch (error) {
    console.error("Error new card:", error);
    throw error;
  }
}


// DELETE 

export const deleteCardId = async (account_id, card_id, token) => {
  try {
    if (!token || !account_id) {
      throw new Error("Token o account_id no válidos");
    }
    
    console.log("🔹 Enviando DELETE request a la API...");
    console.log(`URL: ${BASE_URL}/accounts/${account_id}/cards/${card_id}`);
    console.log("Token:", token);

    const response = await fetch(`${BASE_URL}/accounts/${account_id}/cards/${card_id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `${token}`,
        "Content-Type": "application/json",
      },
    });

    console.log("🔹 Respuesta de la API:", response);

    if (!response.ok) {
      const errorData = await response.json();
      console.error("⚠️ Error en la respuesta de la API:", errorData);
      throw new Error(`Error ${response.status}: ${errorData.message || "No se pudo eliminar la tarjeta"}`);
    }

    console.log("✅ Tarjeta eliminada correctamente");

  } catch (error) {
    console.error("Error deleting card:", error);
    throw error;
  }
};
