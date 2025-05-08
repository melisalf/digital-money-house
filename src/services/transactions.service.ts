import { NewTransactionType, TransactionType } from "@/types/transaction.types";

const BASE_URL = "https://digitalmoney.digitalhouse.com/api";

//GET all transactions, and if there are any, return an empty array.

export const getAllTransactions = async (
  token: string,
  account_id: number
): Promise<TransactionType[]> => {
  try {
    if (!token || !account_id) {
      throw new Error("Token o account_id no válidos");
    }

    const response = await fetch(`${BASE_URL}/accounts/${account_id}/activity`, {
      method: "GET",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorDetails = await response.json();
      throw new Error(`Error ${response.status}: ${errorDetails.message}`);
    }

    const transactions = await response.json();
    return Array.isArray(transactions) ? transactions : [];
  } catch (error: any) {
    console.error("Error fetching transactions:", error.message);
    return [];
  }
}
// export const getAllTransactions = async (token, account_id) => {
//   try {
//     if (!token || !account_id) {
//       throw new Error("Token o account_id no válidos");
//     }

//     const response = await fetch(`${BASE_URL}/accounts/${account_id}/activity`, {
//       method: "GET",
//       headers: {
//         Authorization: `${token}`,
//         "Content-Type": "application/json",
//       },
//     });

//     if (!response.ok) {
//       const errorDetails = await response.json();
//       throw new Error(`Error ${response.status}: ${errorDetails.message}`);
//     }

//     const transactions = await response.json();
//     return Array.isArray(transactions) ? transactions : [];

//   } catch (error) {
//     console.error("Error fetching transactions:", error.message);
//     return [];
//   }
// };


// GET transaction by Id

export const getTransactionId = async (
  token: string,
  account_id: number,
  transaction_id: number
): Promise<TransactionType> => {
  try {
    if (!token || !account_id) {
      throw new Error("Token o account_id no válidos");
    }

    const response = await fetch(`${BASE_URL}/accounts/${account_id}/transactions/${transaction_id}`, {
      method: "GET",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorDetails = await response.json();
      throw new Error(`Error ${response.status}: ${errorDetails.message}`);
    }

    return await response.json();
  } catch (error: any) {
    console.error("Error fetching transaction:", error);
    throw error;
  }
}

// export const getTransactionId = async (token, account_id, transaction_id) => {
//   try {
//     if (!token || !account_id) {
//       throw new Error("Token o account_id no válidos");
//     }

//     const response = await fetch(`${BASE_URL}/accounts/${account_id}/transactions/${transaction_id}`, {
//       method: "GET",
//       headers: {
//         Authorization: `${token}`,
//         "Content-Type": "application/json",
//       },
//     });

//     if (!response.ok) {
//       const errorDetails = await response.json();
//       throw new Error(`Error ${response.status}: ${errorDetails.message}`);
//     }

//     const transaction = await response.json();
//     return transaction;

//   } catch (error) {
//     console.error("Error fetching transactionById:", error.message);
//     return [];
//   }
// }


// POST new transaction

export const newTransaction = async (
  token: string,
  account_id: number,
  data: NewTransactionType,
 
): Promise<TransactionType> => {
  try {
    const response = await fetch(`${BASE_URL}/accounts/${account_id}/transactions`, {
      method: "POST",
      headers: {
        Authorization: `${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Error al crear transacción");
    }

    const transaction: TransactionType = await response.json();
    return transaction;
  } catch (error) {
    console.error("Error al crear transacción:", error);
    throw error;
  }
};

// export const newTransaction = async (token, account_id, data) => {
//   try {
//     if (!token || !account_id) {
//       throw new Error("Token o account_id no válidos");
//     }
    
//     console.log("🔹 Enviando POST request a la API...");
//     console.log(`URL: ${BASE_URL}/accounts/${account_id}/transactions`);
//     console.log("Token:", token);

//     const response = await fetch(`${BASE_URL}/accounts/${account_id}/transactions`, {
//       method: 'POST',
//       headers: {
//         Authorization: `${token}`,
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     });

//     console.log("🔹 Respuesta de la API:", response);

//     if (!response.ok) {
//       const errorData = await response.json();
//       console.error("⚠️ Error en la respuesta de la API:", errorData);
//       throw new Error(`Error ${response.status}: ${errorData.message || "No se pudo realizar el pago"}`);
//     }

//     console.log("✅ Pago realizado con exito");

//   } catch (error) {
//     console.error("Error pay services:", error);
//     throw error;
//   }
// }

