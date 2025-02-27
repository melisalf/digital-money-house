const BASE_URL = "https://digitalmoney.digitalhouse.com/api";

// GET all cards by accountId

export const getAllCards = async ( accountId, token) => {
  console.log( accountId, token)
    try {

      if (!token || !accountId) {
        throw new Error("Token o accountId no válidos");
      }
  
      const response = await fetch(`${BASE_URL}/accounts/${accountId}/cards`, {
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
export const getCardId = async () => {}


// POST 

export const newCard = async () => {}


// DELETE 

export const deleteCardId = async (accountId, card_id, token) => {
  try {
    if (!token || !accountId) {
      throw new Error("Token o accountId no válidos");
    }
    
    console.log("🔹 Enviando DELETE request a la API...");
    console.log(`URL: ${BASE_URL}/accounts/${accountId}/cards/${card_id}`);
    console.log("Token:", token);

    const response = await fetch(`${BASE_URL}/accounts/${accountId}/cards/${card_id}`, {
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
