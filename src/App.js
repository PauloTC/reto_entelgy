import './styles/App.css';
import Countries from './components/countries'
import {useState, useEffect} from 'react'

function App() {

  const [countries , setCountries] = useState(null)


  useEffect(() => {
    async function fetchAPI() {
      let response = await fetch('https://restcountries.eu/rest/v2/lang/es')
      response = await response.json()
      setCountries(response)
    }

    fetchAPI()
  }, [])

  return (
    <div className="App">
      <Countries countries={countries}  />
    </div>
  );
}

export default App;
