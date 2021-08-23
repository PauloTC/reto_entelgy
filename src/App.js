import './styles/App.css';
import Countries from './components/countries'
import {useState, useEffect} from 'react'

function App() {

  const [countries, setCountries] = useState(null)


  useEffect(() => {
    handleCountries()
  });

  const handleCountries = async () =>  {
    await fetch('https://restcountries.eu/rest/v2/lang/es')
      .then(response => (
        response.json()
      ))
      .then(data =>  (
        setCountries(data)
      ))
      .catch(function(error) {
        console.log('Hubo un problema con la petición Fetch:' + error.message);
    });
  }
  return (
    <div className="App">
      <Countries countries={countries}  />
    </div>
  );
}

export default App;
