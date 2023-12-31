import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "@bdenzer/react-modal";
import Logo from "../../assets/logo.png";
// import creditCard from "../../assets/1617888734hh2iaLYuB1.png";
import "./Dashboard.css";
import KatherineKnight from "../AllUserTransactions/KatherineKnight";
import JustMe from "../AllUserTransactions/JustMe";

export default function Dashboard() {
  const [shouldShowModal, setShouldShowModal] = useState(false);
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user")); // get the user data

  const signOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user"); // remove the user data
    navigate("/login");
  };

  const closeModal = () => {
    setShouldShowModal(false);
  };

  const openModal = () => {
    setShouldShowModal(true);
  };
  //   const { match } = props;
  return (
    <div className="dashboard">
      <div className="dashboard_header">
        <img className="Logo" src={Logo} alt="logo" />
        <button className="logout_btn" onClick={signOut} href="#">
          Logout
        </button>
      </div>
      <div className="main-account-balance">
        <div className="dashboard_details">
          <h2>Welcome back, <br /> {user.name}</h2>
        </div>
        <div className="account-details">
          <h2>AVAILABLE CASH</h2>
          <span className="price">${user.amount}</span>
          <hr />
          <div className="transaction_container">
            {user.id === 1 && <KatherineKnight />}
            {user.id === 2 && <JustMe />}
          </div>
        </div>
      </div>
      {/* <div className="credit_card">
        <img src={creditCard} alt="creditCard" />
        <span>{user.cardName}</span>
      </div> */}
      <div className="account-footer">
        <div>
          <span>
            <i className="fa fa-user" aria-hidden="true"></i>
          </span>
          <span>Account</span>
        </div>
        <div onClick={() => openModal()}>
          <span>
            <i className="fa fa-exchange" aria-hidden="true"></i>
          </span>
          <span>Transfer</span>
        </div>

        <div>
          <span>
            <i className="fa-solid fa-angles-down"></i>
          </span>
          <span>Deposit</span>
        </div>
        <div>
          <span>
            <i className="fa fa-money" aria-hidden="true"></i>
          </span>
          <span>Pay</span>
        </div>
      </div>
      <Modal
        closeModal={closeModal}
        shouldShowModal={shouldShowModal}
        title="Transfer Fund"
      >
        <form className="modal_form" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label>Recipient Account</label>
            <input type="text" />
          </div>
          <div>
            <label>Amount ($)</label>
            <input type="text" />
          </div>
          <div>
            <button onClick={() => closeModal()}>Transfer</button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
