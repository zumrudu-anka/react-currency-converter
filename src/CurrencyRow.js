import React from 'react'

export default function CurrencyRow(props) {
    const{
        currencyOptions,
        selectedCurrency,
        onChangeCurrency,
        onChangeAmount,
        amount
    } = props;
    return (
        <div className ="currency-row">
            <input className="input" type="number" value={amount} onChange = {onChangeAmount}/>
            <select value = {selectedCurrency} onChange = {onChangeCurrency}>
                {currencyOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                ))}
            </select>
        </div>
    )
}
