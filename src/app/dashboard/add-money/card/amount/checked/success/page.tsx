// import SuccessMessage from '@/components/common/SuccessMessage';
// import { getAccount } from '@/services/account.service';
// import { getTokenFromCookie } from '@/utils/getTokenFromCookie';

// const AddMoneySuccessPage = async () => {
//   const token = getTokenFromCookie();
//   const accountData = await getAccount(token);
//   const showAddMoneyPage = true;
  
//   return (
//     <div>
//       <SuccessMessage
//       operationType='addMoney'
//       showAddMoneyPage = {showAddMoneyPage}
//       accountData = {accountData}
//       />
//     </div>
//   )
// }

// export default AddMoneySuccessPage

"use client";

import { useTransaction } from "@/context/transactionContext";
import SuccessOperation from "@/components/common/SuccessOperation";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const SuccessTransactionPage = () => {
  const { transaction } = useTransaction();
  const router = useRouter();

  useEffect(() => {
    if (!transaction) {
      // Si no hay datos, redirigir al dashboard
      router.push("/dashboard");
    }
  }, [transaction, router]);

  if (!transaction) return null;

  return <SuccessOperation transaction={transaction} operationType="payService" />;
};

export default SuccessTransactionPage;
