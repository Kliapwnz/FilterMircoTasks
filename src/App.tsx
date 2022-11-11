import React, {useState} from 'react';
import './App.css';

function App() {
    const [money, setMoney] = useState([
        {banknote: 'Dollars', value: 100, number: ' a1234567890'},
        {banknote: 'Dollars', value: 50, number: ' z1234567890'},
        {banknote: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknote: 'Dollars', value: 100, number: ' e1234567890'},
        {banknote: 'Dollars', value: 50, number: ' c1234567890'},
        {banknote: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknote: 'Dollars', value: 50, number: ' x1234567890'},
        {banknote: 'RUBLS', value: 50, number: ' v1234567890'},
    ])
    return (
       <ul>
           {money.map((objFromMoneyArr, index)=>{
               return (
                   <li key={index}>
                       <span>{objFromMoneyArr.banknote}</span>
                       <span>{objFromMoneyArr.value}</span>
                       <span>{objFromMoneyArr.number}</span>
                   </li>
               )
           })}
       </ul>
    );
}

export default App;
