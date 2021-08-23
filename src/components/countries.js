import styles from '../../src/styles/Countries.module.css'

export default function Countries({countries}) {

  return (
    <section>
      <h1>Paises</h1>
      <ul className={styles.countries} >
        {
          countries.map((c, index) => {
            return(
              <li className={styles.country} key={index} >
                <button className={styles.country_btn} >{c.name}</button>
              </li>
            )})
        }
        
      </ul>
    </section>
  )
}