import { useEffect, useState } from "react"
import { useFirestore } from "../../hooks/useFirestore";

// styles
import './TransactionForm.css';

export default function TransactionForm({ uid }) {
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');

    const { addDocument, response } = useFirestore('transactions')

    const handleSubmit = (e) => {
        e.preventDefault();
        addDocument({ name, amount, uid })
    } 

    useEffect(() => {
        if(response.success){
            setName('');
            setAmount('');
        }
    }, [response.success])

    return (
        <>
            <h3>Add a Transaction</h3>
            <div className="transaction-form">
            <form onSubmit={handleSubmit}>
                <div className="input-field-div">
                    <label htmlFor="transaction-name">Transaction name:</label>
                    <input 
                        type="text" 
                        required
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        id="transaction-name"
                    />
                </div>
                <div className="input-field-div">
                    <label htmlFor="transaction-amount">Amount (rs):</label>
                    <input 
                        type="number" 
                        required
                        onChange={(e) => setAmount(e.target.value)}
                        value={amount}
                        id="transaction-amount"
                    />
                </div>
                <div className="input-field-div add-btn">
                    <button className="add-transaction-btn">Add transaction</button>
                </div>
            </form>
            </div>
        </>
    )
}
