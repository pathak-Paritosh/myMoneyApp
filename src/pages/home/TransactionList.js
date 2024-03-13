import { useFirestore } from '../../hooks/useFirestore';

import './TransactionList.css';

export default function TransactionList({ transactions }) {

    const { deleteDocument } = useFirestore('transactions');


    return (
        <ul className='transactions'>
            { transactions.map(transaction => (
                <li key={transaction.id}>
                    <p className='transaction-name'>{ transaction.name }</p>
                    <p className='transaction-amount'>Rs { transaction.amount }</p>
                    <button onClick={() => deleteDocument(transaction.id)}>x</button>
                </li>
            )) }
        </ul>
    )
}
