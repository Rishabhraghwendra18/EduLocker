import styles from '../../styles/Dashboard.module.css'




export default function CBSE() {
      return (
<div style={{background: 'linear-gradient( #0443a2 0%, #0443a2 50%, white 50%, white 100%)', position:'absolute', height:'100%', width: '100%'}}>
      <div className={`${styles.container_text}`}>
            <h3>Org Name: </h3>
            <h3>Org Username: </h3>
      </div>
      
      <div className={`${styles.container}`}>
            <div  className={`${styles.button}`} >Create new student account</div>
            <div className={`${styles.button2}`}>Upload Certificate</div>
            <div className={`${styles.button3}`}>Update smart contract</div>
      </div>

      
</div>
      )
}