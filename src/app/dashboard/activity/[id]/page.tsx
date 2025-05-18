import ActivityDetail from '@/components/dashboard/activity/ActivityDetail';
import { getAccount } from '@/services/account.service';
import { getTransactionId } from '@/services/transactions.service';
import { getTokenFromCookie } from '@/utils/getTokenFromCookie';


export default async function Page({ params }: { params: { id: string } }) {
  const token = getTokenFromCookie();
  const accountData = await getAccount(token);
  const transaction = await getTransactionId(token, accountData.id, Number(params.id));

  return (
    <div>
      <ActivityDetail transaction={transaction} />
    </div>
  );
}
