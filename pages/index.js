import Image from 'next/image'
import styles from '../styles/Home.module.css'
import banner from '../public/Banner.svg'
import deal from '../public/deal.png'
import fileLogo from '../public/file.png'

export default function Home() {
  return (
    <div className={`${styles.container} d-flex flex-column align-items-stretch vh-100`}>
      <Image src={banner}></Image>
      <div className={`p-3 ${styles.features_div}`}>
        <div>
          <h3 style={{ textAlign: 'center', marginBottom: '0 !important' }}>Features</h3>
        </div>
        <div className={`d-flex flex-row ${styles.features}`}>
          <div className={`handShake d-flex flex-column justify-content-center align-items-center p-2 ${styles.handShake_div}`}>
            <Image src={deal} width={100} height={100}></Image>
            <h4>Pay school/college fees as per the law</h4>
            <p>No need of paying high fees pay as per smart contract</p>
          </div>
          <div className="document d-flex flex-column justify-content-center align-items-center p-2">
            <Image src={fileLogo} width={100} height={100}></Image>
            <h4>All your docs are safe with us</h4>
            <p>No need of paying high fees pay as per smart contract</p>
          </div>
        </div>
      </div>
    </div>
  )
}
