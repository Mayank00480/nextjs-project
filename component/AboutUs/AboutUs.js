import React from 'react'
import Image from 'next/image'
import styles from './AboutUs.module.css'
const AboutUs = () => {
  return (
    <div className={styles.about}>
      <div className={styles.image}>
  <img src="https://www.exibartstreet.com/wp-content/uploads/avatars/2195/5e0115c0bff58-bpfull.jpg" alt="Description of the image" width={400} height={300} />
</div>
<div className={styles.content}>
  <h2>Title</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec odio nisi. Etiam sit amet metus ac ipsum blandit varius. Nulla facilisi.</p>
 <div style = {{display : 'flex' , justifyContent : 'center'}}>
  <button className={styles.btn}>Resume</button>
  </div>
</div>
    </div>
  )
}

export default AboutUs
