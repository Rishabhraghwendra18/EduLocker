import styles from '../../styles/UploadC.module.css'




export default function UploadC() {
      return (
<div style={{background: 'white', position:'absolute', height:'100%', width: '100%', display: 'flex', justifyContent:'center' }}>
                <div>
                <div className={`${styles.center}`}>
            <form style={{marginLeft: '150px'}}>
                <div className={`${styles.inputbox}`}>
                <input type="text" required="required"/>
                <span>Student Username</span>
                </div>
                <div className={`${styles.inputbox}`}>
                <input type="button" value="Upload Certificate"/>
                </div>
            </form>
            
            
            </div>
            <div className={`${styles.container}`}>
            <div  className={`${styles.button}`} >Upload</div>
            <div className={`${styles.button2}`}>Cancel</div>
            
            </div>

           
                
            </div>
      
</div>
      )
}