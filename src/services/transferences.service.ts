import { TransactionType } from "@/types/transaction.types";
import { NewDepositType } from "@/types/transference.types";

const BASE_URL = "https://digitalmoney.digitalhouse.com/api";

// POST 

export const newTransference = async () => {
}

// POST  deposit

export const newDeposit = async (token: string, account_id: number, data: NewDepositType) => {
    try {
        if (!token || !account_id) {
          throw new Error("Token o account_id no válidos");
        }
        
        console.log("🔹 Enviando POST request a la API...");
        console.log(`URL: ${BASE_URL}/accounts/${account_id}/deposits`);
        console.log("Token:", token);
    
        const response = await fetch(`${BASE_URL}/accounts/${account_id}/deposits`, {
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
          throw new Error(`Error ${response.status}: ${errorData.message || "No se pudo realizar el deposito"}`);
        }
        const deposit: TransactionType = await response.json();
        return deposit;
        console.log("✅ Deposito realizado con exito");
    
      } catch (error) {
        console.error("Error new deposit:", error);
        throw error;
      }
}

// GET

export const getAllTransferences = async () => {
}


