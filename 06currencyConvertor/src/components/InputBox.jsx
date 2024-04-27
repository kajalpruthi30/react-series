import React, {useId} from "react";
function InputBox({
  // 1. To/From
  label,

  // 2. Amount
  amount,
  onAmountChange,

  // 3. Currency
  currency = "",
  onCurrencyChange,

  // 4.
  currencyOptions = [],

}) {
 
  // useId Hook is used to generate a unique ID
  const amountInputId = useId()


  return (
        <div className="bg-white p-3 rounded-lg text-sm flex">

          {/* 1. div(vertical) - having From and Amount */}
          <div className="w-1/2">
              <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">{label}</label>
              <input id={amountInputId} className="outline-none w-full bg-transparent py-1.5" type="number" placeholder="Amount" value={amount} 
              onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}/>
              {/* Firstly check if amount is changed, then change the value -> protects from infinite loop */}
          </div>

          {/* 2. div(vertical) - having Currency Type and currency */}
          <div className="w-1/2 flex flex-wrap justify-end text-right">
              <p className="text-black/40 mb-2 w-full">Currency Type</p>

              <select className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none" value={currency} 
              onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}>

                {/* Loop over all the options inside select */}
                {currencyOptions.map((curr) => (
                  <option key={curr} value={curr}>{curr}</option>
                ))}

              </select>
          </div>
      </div>
  );
}

export default InputBox;
