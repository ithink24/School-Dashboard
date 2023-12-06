import React from 'react';
import { useNavigate } from "react-router-dom";
import backGround from '../../Images/background.jpeg'
import studentLogin from '../../Images/student.jpeg';
import Profile from '../../Images/profile.jpeg';
import styles from './styles.module.css'

function Login() {
    const navigate = useNavigate();

    const handleClick = () => {
    navigate("/dashboard");
    }

  return (
    <div className={styles.container} style={{ backgroundImage: `url(${backGround})` }}>
        <div className={styles.sub_container}>
            <div className={styles.left_box}>
                <div className={styles.heading}>Student Login</div>
                <div>make sure your account is secure</div>
                <img src={studentLogin} alt='login'/>
            </div>

            <div className={styles.right_box}>
                <img src={Profile} alt="profile" width={100} height={100}/>

                <div className={styles.form}>
                    <div className={styles.form_heading}>Email Address:</div>
                    <input className={styles.input} type="text" placeholder='Type your email...'/>

                    <div className={styles.form_heading}>Password:</div>
                    <input className={styles.input} type="password" placeholder='Type your password...'/>

                    <button className={styles.button} onClick={() => handleClick()}>Log in</button>                   
                </div>
            </div>
      </div>
    </div>
  )
}

export default Login
