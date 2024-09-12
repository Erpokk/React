import { TransacTable } from './Transaction.module.jsx'

const TransactionHistory = ({ items }) => {
    return (
        <TransacTable>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            <tbody>
             {items.map(({ id, type, amount, currency }) => (     
                <tr key={id}> 
                     <td>{type.charAt(0).toUpperCase() + type.slice(1)}</td>
                     <td>{amount}</td>
                     <td>{currency}</td>
                </tr>
             ))}
            </tbody>
        </TransacTable>
    );
};

export default TransactionHistory;