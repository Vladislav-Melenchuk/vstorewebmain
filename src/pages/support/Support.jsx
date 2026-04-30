import { Search } from '../../components/layout/header/Search.jsx';
import Button from '../../components/ui/buttons/button/Button.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Support.module.css';
import { useState } from "react";
import Collapse from "bootstrap/js/dist/collapse";

const Support = () => {
  const [query, setQuery] = useState('');

  const handleSearch = (value) => {
    const q = value.toLowerCase().trim();
    setQuery(q);

    const items = [
      { name: "game problems", id: "collapseOne" },
      { name: "refund", id: "collapseTwo" },
      { name: "my account", id: "collapseThree" },
      { name: "client", id: "collapseFour" },
      { name: "community problems", id: "collapseFive" },
      { name: "device problems", id: "collapseSix" },
      { name: "gifts", id: "collapseSeven" },
      { name: "frequent questions", id: "collapseEight" },
    ];

    // если очистили поиск — закрываем всё
    if (q.length < 2) {
      document.querySelectorAll(".accordion-collapse").forEach((el) => {
        Collapse.getOrCreateInstance(el).hide();
      });
      return;
    }

    const found = items.find(item =>
      item.name.includes(q)
    );

    if (!found) return;

    const element = document.getElementById(found.id);
    if (!element) return;

    // закрыть все
    document.querySelectorAll(".accordion-collapse").forEach((el) => {
      Collapse.getOrCreateInstance(el).hide();
    });

    // открыть нужный
    Collapse.getOrCreateInstance(element).show();

    // скролл
    element.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Support</h2>

      <Search
        placeholder="Find help"
        className={styles.search}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch(e.target.value);
          }
        }}
      />

      <div className="accordion" id="accordionExample">

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button"
              data-bs-toggle="collapse" data-bs-target="#collapseOne">
              Game problems
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse"
            data-bs-parent="#accordionExample">
            <div className="accordion-body">
              If you're having trouble launching or running the game, try restarting the client, checking for updates, and ensuring your device meets the minimum requirements.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button"
              data-bs-toggle="collapse" data-bs-target="#collapseTwo">
              Refund
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse"
            data-bs-parent="#accordionExample">
            <div className="accordion-body">
              You can request a refund if your purchase doesn't meet your expectations. Please ensure your request is submitted within the specified timeframe.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button"
              data-bs-toggle="collapse" data-bs-target="#collapseThree">
              My account
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse"
            data-bs-parent="#accordionExample">
            <div className="accordion-body">
              Manage your account settings, change password, update personal information, and configure security settings.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button"
              data-bs-toggle="collapse" data-bs-target="#collapseFour">
              Client
            </button>
          </h2>
          <div id="collapseFour" className="accordion-collapse collapse"
            data-bs-parent="#accordionExample">
            <div className="accordion-body">
              If you're experiencing client issues, try reinstalling the app or clearing cache.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button"
              data-bs-toggle="collapse" data-bs-target="#collapseFive">
              Community problems
            </button>
          </h2>
          <div id="collapseFive" className="accordion-collapse collapse"
            data-bs-parent="#accordionExample">
            <div className="accordion-body">
              Report spam, abuse or violations using the support system.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button"
              data-bs-toggle="collapse" data-bs-target="#collapseSix">
              Device problems
            </button>
          </h2>
          <div id="collapseSix" className="accordion-collapse collapse"
            data-bs-parent="#accordionExample">
            <div className="accordion-body">
              Update drivers and system to fix crashes or performance issues.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button"
              data-bs-toggle="collapse" data-bs-target="#collapseSeven">
              Gifts
            </button>
          </h2>
          <div id="collapseSeven" className="accordion-collapse collapse"
            data-bs-parent="#accordionExample">
            <div className="accordion-body">
              Check transaction status if gifts are not delivered.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button"
              data-bs-toggle="collapse" data-bs-target="#collapseEight">
              Frequent questions
            </button>
          </h2>
          <div id="collapseEight" className="accordion-collapse collapse"
            data-bs-parent="#accordionExample">
            <div className="accordion-body">
              Answers to the most common questions about installation, errors, and usage.
            </div>
          </div>
        </div>

      </div>

      <div className={styles.questions}>
        <h4>Have any other questions?</h4>
        <Button title="Contact us on our email!" size="xlarge" variant="primary" />
      </div>
    </div>
  );
};

export default Support;