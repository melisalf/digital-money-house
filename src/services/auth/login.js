const API_URL = "https://digitalmoney.digitalhouse.com/api";

export const login = async (data) => {

  try {
    const response = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    
    console.log(response);
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Error during login");
    }
    
    return await response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};

