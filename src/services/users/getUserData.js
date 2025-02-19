const API_URL = "https://digitalmoney.digitalhouse.com/api";

//Get email, firstname, lastname, phone, and dni from a specific user.

export const getUserData = async ( token, user_id) => {
    try {
        const response = await fetch(`${API_URL}/users/${user_id}`, {
            method: "GET",
            headers: {
                Authorization: `${token}`,
                "Content-Type": "application/json",
            },
        });
        if (!res.ok) {
            const errorDetails = await res.json();
            throw new Error(`Error ${res.status}: ${errorDetails.message}`);
        }
        return res.json();
    } catch (error) {
        console.error("Error fetching user data:", error);
        throw error;
    }
};

