import { useState } from 'react'
import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import './App.css'

function App() {

  const [fromAmount, setFromAmount] = useState()
  const [fromCurr, setFromCurr] = useState("usd")
  const [toCurr, setToCurr] = useState("inr")
  const [toAmount, setToAmount] = useState()

  // Collected the json data from the custom hook
  // collected all the currencies of one given 'fromCurr' 
  const currencyInfo = useCurrencyInfo(fromCurr)

  // Taken only keys(currencies) that act as options from the json data obtained earlier
  const options = Object.keys(currencyInfo)

  // On click on swap button, swap the currencies
  const swap = () => {
    setFromCurr(toCurr)
    setToCurr(fromCurr)
  }
  
  // ans = 1(given) * currencyInfo[inr]
  const convert = () => {
    setToAmount(fromAmount * currencyInfo[toCurr]);
  };

  return (

    <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
              backgroundImage: `url('https://images.pexels.com/photos/956999/milky-way-starry-sky-night-sky-star-956999.jpeg?auto=compress&cs=tinysrgb&w=600')`,
        }}>
        <div className="w-full">

            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">

                <form onSubmit={(e) => {e.preventDefault()}}>

                  {/* 1. Input Box - 1 */}
                  <div className="w-full mb-1">
                    <InputBox label="From" amount={fromAmount} currencyOptions={options} onCurrencyChange={(curr) => setFromCurr(curr)} currency={fromCurr} onAmountChange={(amount) => setFromAmount(amount)}/></div>

                  {/* 2. Swap button */}
                  <div className="relative w-full h-0.5" >
                    <button type="button" className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5" onClick={swap}>swap</button>
                  </div>

                  {/* 3. Input Box - 2 */}
                  <div className="w-full mt-1 mb-4">
                    <InputBox label="To" amount={toAmount} currencyOptions={options} onCurrencyChange={(curr) => setToCurr(curr)} currency={toCurr} onAmountChange={(amount) => setFromAmount(amount)}/></div>

                  {/* 4. Convert Button - 3 */}
                  <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg" onClick={convert}>Convert {fromCurr} to {toCurr}</button>

                </form>

              </div>

          </div>
    </div>
  );
}

export default App
