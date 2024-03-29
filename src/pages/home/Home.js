import TransactionForm from './TransactionForm';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useCollection } from '../../hooks/useCollection';
import TransactionList from './TransactionList';

// styles
import './Home.css';

export default function Home() {

    const { user } = useAuthContext();
    const { documents, error } = useCollection(
        'transactions',
        ["uid","==",user.uid]
    )

    return (
        <div className='container'>
            <div className="content">
                { error && <p>{error}</p> }
                { documents && <TransactionList transactions={documents} /> }
            </div>
            <div className="sidebar">
                <TransactionForm uid={user.uid} />
            </div>
        </div>
    )
}
