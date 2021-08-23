import { useState } from 'react'
import styles from '../../src/styles/Countries.module.css'
import Modal from './modal'

export default function Countries({countries}) {

  console.log(countries)

  const [ continent, setContinent ] = useState(null)

  return (
    <section>
      <h1>Paises</h1>
      <ul className={styles.countries} >
        { 
          countries && countries.map((c, index) => (
            <li className={styles.country} key={index} >
              <button onClick={() => { setContinent(c.region) }} className={styles.country_btn} >{c.nativeName}</button>
            </li>
          ))
        }
      </ul>
      {/* <Modal continent={continent} /> */}
    </section>
  )
}