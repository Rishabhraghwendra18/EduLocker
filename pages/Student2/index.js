import styles from '../../styles/student2.module.css'

export default function Student2() {
    return (
        <div >

            <div classname={`${styles.forms}`}>

                <form className={`${styles.titles}`}>
                    <label className={`${styles.lables}`}>
                        Students Username:
                        <input className={`${styles.boxes}`} type="text" />
                    </label>
                    <label className={`${styles.lables}`}>
                        Class:
                        <input className={`${styles.boxes}`} type="text" />
                    </label>
                    <label className={`${styles.lables}`}>
                        School fees:
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