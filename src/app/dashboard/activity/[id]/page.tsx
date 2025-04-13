import ActivityDetail from '@/components/dashboard/activity/ActivityDetail';
import { getAccount } from '@/services/account.service';
import { getTransactionId } from '@/services/transactions.service';
import { getTokenFromCookie } from '@/utils/getTokenFromCookie'


const ActivityDetailPage = async ({params} : {params: {id: string}}) => {

    const token = getTokenFromCookie();
    const accountData = await getAccount(token);
    const transaction_id = params.id
    const transaction = await getTransactionId(token, accountData.id, Number(transaction_id))
    console.log(transaction);

    return (
    <div>
        <ActivityDetail
        transaction = {transaction}
        />
    </div>
    )
}

export default ActivityDetailPage