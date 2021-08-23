import styles from '../../src/styles/Modal.module.css'

export default function Modal({continent, onClose}) {

  const handleClose = (e) => {
    e.preventDefault()
    onClose()
  }

  return (
    <div  className={styles.modal} >
      <div className={styles.modal_dialog}>
        <h3>Este pais pertenece a:</h3>
        <h2>{continent}</h2>
        <button onClick={handleClose} >Cerrar</button>
      </div>
    </div>
  )
}