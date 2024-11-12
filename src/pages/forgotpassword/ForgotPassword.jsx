import { Link } from "react-router-dom";
import styles from "./forgotpassword.modules.css"
import { useState } from "react";
import Button from "../../components/button/Button";
import Logo from "../../images/Logo.svg";


const ForgotPassword = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email,);
  };

  return (
    <div>
      <img src={Logo} alt="dms logo" className={styles.logo} />
      <section classname={styles.forgotpasswordcontainer}>
        <section classname={styles.headingcontainer}>
          <h4>Forgot Password</h4>
          <p>Please enter your email address</p>
        </section>
        <form onSubmit={handleSubmit} className={styles.formwrapper}>
          <div>
            <label htmlFor="">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              placeholder="Enter name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </form>

        <div className="styles.butttonwrapper">
          <Button url="/login" text="Submit" />

          <Button url="/login" text="Confirm" />
        </div>
      </section>
    </div>
  );

};

  

export default ForgotPassword;