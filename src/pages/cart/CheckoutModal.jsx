import styles from "./CheckoutModal.module.css";
import { useState } from "react";
import PaymentCheckbox from "./PaymentCheckbox.jsx";
import SaveCardCheckbox from "./SaveCardCheckbox.jsx";
import {
  validateCardNumber,
  validateName,
  validateExpiry,
  validateCVV,
} from "../../utils/validationCheckbox.js";
import { AuthCheckbox } from "../auth/AuthCheckbox.jsx";
import { Logo } from '../../components/layout/header/Logo.jsx'

// FORMAT
const formatCardNumber = (value) => {
  return value
    .replace(/\D/g, "")
    .replace(/(.{4})/g, "$1 ")
    .trim();
};

const CheckoutModal = ({
  isOpen,
  onClose,
  cartItems,
  total,
  onCheckout,
}) => {
  const [cardType, setCardType] = useState("mastercard");
  const [cardNumber, setCardNumber] = useState("");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [errors, setErrors] = useState({});
  const [saveCard, setSaveCard] = useState(false);
  const [agree, setAgree] = useState(false);
  const [successModal, setSuccessModal] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = () => {
    const newErrors = {};

    if (!validateCardNumber(cardNumber)) {
      newErrors.cardNumber = "invalid card number";
    }

    if (!validateName(name)) {
      newErrors.name = "invalid name";
    }

    if (!validateExpiry(expiry)) {
      newErrors.expiry = "invalid expiry date";
    }

    if (!validateCVV(cvv)) {
      newErrors.cvv = "invalid CVV";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      onCheckout();
      setSuccessModal(true); 
    }
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.content}>
          {/* LEFT */}
          <div className={styles.left}>
            <h2>CHECKOUT</h2>

            <div className={styles.cardSelect}>
              <PaymentCheckbox
                label="Master card"
                checked={cardType === "mastercard"}
                onChange={() => setCardType("mastercard")}
              />

              <PaymentCheckbox
                label="Visa"
                checked={cardType === "visa"}
                onChange={() => setCardType("visa")}
              />
            </div>

            <div className={styles.form}>
              <h4>CARD DETAILS</h4>

              {/* CARD NUMBER */}
              <div className={styles.field}>
                <div className={styles.labelRow}>
                  <label className={styles.label}>Card number</label>

                  {errors.cardNumber && (
                    <span className={styles.inlineError}>
                      ({errors.cardNumber})
                    </span>
                  )}
                </div>

                <input
                  value={cardNumber}
                  className={errors.cardNumber ? styles.errorInput : ""}
                  onChange={(e) =>
                    setCardNumber(formatCardNumber(e.target.value))
                  }
                />
              </div>

              {/* NAME */}
              <div className={styles.field}>
                <div className={styles.labelRow}>
                  <label className={styles.label}>Name on card</label>

                  {errors.name && (
                    <span className={styles.inlineError}>
                      ({errors.name})
                    </span>
                  )}
                </div>

                <input
                  value={name}
                  className={errors.name ? styles.errorInput : ""}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              {/* EXPIRY */}
              <div className={styles.row}>
                <div className={styles.field}>
                  <div className={styles.labelRow}>
                    <label className={styles.label}>Expiration</label>

                    {errors.expiry && (
                      <span className={styles.inlineError}>
                        ({errors.expiry})
                      </span>
                    )}
                  </div>

                  <input
                    value={expiry}
                    className={errors.expiry ? styles.errorInput : ""}
                    onChange={(e) => setExpiry(e.target.value)}
                  />
                </div>

                {/* CVV */}
                <div className={styles.field}>
                  <div className={styles.labelRow}>
                    <label className={styles.label}>CVV</label>

                    {errors.cvv && (
                      <span className={styles.inlineError}>
                        ({errors.cvv})
                      </span>
                    )}
                  </div>

                  <input
                    value={cvv}
                    className={errors.cvv ? styles.errorInput : ""}
                    onChange={(e) => setCvv(e.target.value)}
                  />
                </div>
              </div>

              <SaveCardCheckbox
                label="Save this payment method for future purchases"
                checked={saveCard}
                onChange={() => setSaveCard(!saveCard)}
              />

              <p className={styles.descr}>
                By choosing to save your payment information, this will be used
                as default for Epic Games purchases.
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className={styles.right}>
            <div className={styles.row}>
              <h2>ORDER SUMMARY</h2>
              <button onClick={onClose}>✕</button>
            </div>

            {cartItems.map((item) => (
              <div key={item.cartItemId} className={styles.item}>
                <img src={item.coverImageUrl} alt="" />
                <div>
                  <p>{item.title}</p>
                  <span>UAH {item.finalPrice || item.price}</span>
                </div>
              </div>
            ))}

            <div className={styles.total}>
              <p>Total:</p>
              <span>UAH {total.toFixed(2)}</span>
            </div>

            <AuthCheckbox
              checked={agree}
              className={styles.checkboxAgree}
              onChange={(e) => setAgree(e.target.checked)}
            />

            <div className={styles.police}>
              By clicking Place Order, you agree to the terms and confirm payment authorization.
            </div>

            <button className={styles.checkoutBtn} onClick={handleSubmit}>
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
      {successModal && (
        <div className={styles.successOverlay}>
          <div className={styles.successModal}>
            <Logo />
            <h2>Thank you for buying our games!</h2>
            <p>An email receipt has been sent to you.</p>
            <p>If there is anything else you need, feel free to browse our shop! </p>

            <button
              onClick={() => {
                setSuccessModal(false);
                onClose();
              }}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutModal;