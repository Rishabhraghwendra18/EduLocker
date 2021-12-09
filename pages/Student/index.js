// export default function Student() {
//       return <h1>Student Page</h1>
// }
// import React from 'readct';
import styles from '../../styles/student.module.css'

export default function Student() {
      return (
            <div >

                  <div classname={`${styles.forms}`}>

                        <form className={`${styles.titles}`}>
                              <label className={`${styles.lables}`}>
                                    Students Name:
                                    <input className={`${styles.boxes}`} type="text" />
                              </label>
                              <label className={`${styles.lables}`}>
                                    Username with Roll no.:
                                    <input className={`${styles.boxes}`} type="text" />
                              </label>
                              <label className={`${styles.lables}`}>
                                    Class:
                                    <input className={`${styles.boxes}`} type="text" />
                              </label>
                              <label className={`${styles.lables}`}>
                                    School Fees:
                                    <input className={`${styles.boxes}`} type="text" />
                              </label>
                              <label className={`${styles.lables}`}>
                                    Time period to pay fees:(disabled for demo)
                                    <input className={`${styles.boxes}`} type="text" />
                              </label>

                        </form>

                        <div className={`${styles.account}`}>

                              Create account and attach smart contract
                        </div>

                        <div className={`${styles.cancel}`}>

                              Cancel
                        </div>

                  </div >
            </div>

      );
}