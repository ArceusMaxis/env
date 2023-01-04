import { useState } from 'react'
import axios from 'axios'

function App() {
  const [quote , setQuote] = useState('')

  return (
    <div className="App">
      <h1 className='quotecont'>Quotes of a West</h1>
      <h1 className='head'>{quote}</h1>
      <button className='westton' onClick={() => axios.get('https://api.kanye.rest').then(result => setQuote(result.data.quote))}>Get Quote</button>
      <p>Better click that button before it moves again...</p>
    </div>
  )
}

export default App
