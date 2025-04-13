const BASE_URL = "https://digitalmoney.digitalhouse.com/api";

//GET all transactions, and if there are any, return an empty array.

export const getAllTransactions = async (token, account_id) => {
  try {
    if (!token || !account_id) {
      throw new Error("Token o account_id no válidos");
    }

    const response = await fetch(`${BASE_URL}/accounts/${account_id}/activity`, {
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

    const transactions = await response.json();
    return Array.isArray(transactions) ? transactions : [];

  } catch (error) {
    console.error("Error fetching transactions:", error.message);
    return [];
  }
};


// GET transaction by Id

export const getTransactionId = async (token, account_id, transaction_id) => {
  try {
    if (!token || !account_id) {
      throw new Error("Token o account_id no válidos");
    }

    const response = await fetch(`${BASE_URL}/accounts/${account_id}/transactions/${transaction_id}`, {
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

    const transaction = await response.json();
    return transaction;

  } catch (error) {
    console.error("Error fetching transactionById:", error.message);
    return [];
  }
}


// POST 

export const newTransaction = async () => {
}

