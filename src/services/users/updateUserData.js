const BASE_URL = "https://digitalmoney.digitalhouse.com/api";

//Update email, password, firstname, lastname, phone, or dni from a specific user.

const updateUser = async (user, userId, token2) => {
    try {
        const response = await axios.patch(`${BASE_URL}/users/${userId}`, user, {
            headers: {
                Authorization: token2,
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error updating user:", error);
        throw error;
    }
};

export default updateUser;