const BASE_URL = "https://digitalmoney.digitalhouse.com";



//GET all services, and if there are any, return an empty array.

  export const getAllServices = async () => {
    try {
      const response = await fetch(`${BASE_URL}/service`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      const text = await response.text(); // Leer una sola vez
  
      if (!response.ok) {
        let errorMessage = text;
        try {
          const errorData = JSON.parse(text);
          errorMessage = errorData.message || errorMessage;
        } catch {
          // no es JSON, usamos el texto crudo
        }
        throw new Error(`Error ${response.status}: ${errorMessage}`);
      }
  
      const data = JSON.parse(text);
      return Array.isArray(data) ? data : [];
  
    } catch (error) {
      console.error("Error fetching services:", error.message);
      return [];
    }
  };
  