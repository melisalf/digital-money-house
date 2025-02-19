const API_URL = "https://digitalmoney.digitalhouse.com/api";

//Saves user data by email and password, and generate a new account with a unique random cvu and alias.


export const newUser = async (data) => {
  try {
    const response = await fetch(`${API_URL}/users`,{
		method: "POST",
		headers: {
		  "Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	  });

	  console.log(response.data);
	  return response.data;

  } catch (error) {
    if (error.response && error.response.data) {
      throw new Error(error.response.data.message || "Error al crear la cuenta");
    }
    throw error;
  }
};