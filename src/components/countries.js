import { useState } from 'react'
import styles from '../../src/styles/Countries.module.css'
import Modal from './modal'

export default function Countries({countries}) {

  console.log(countries)

  const [ continent, setContinent ] = useState(null)
  const [ modal, setModal ] = useState(null)


  const openModal = (region) => {
    setContinent(region)
    setModal(true)
  }

  const onClose = () => {
    setModal(false)
  }

  return (
    <section>
      <h1>Paises</h1>
      <ul className={styles.countries} >
        { 
          countries && countries.map((c, index) => (
            <li className={styles.country} key={index} >
              <button onClick={() => { openModal(c.region) }} className={styles.country_btn} >{c.nativeName}</button>
            </li>
          ))
        }
      </ul>
      {
        modal && <Modal onClose={onClose} continent={continent} />
      }
      
    </section>
  )
}