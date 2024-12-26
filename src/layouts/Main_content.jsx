import { NavLink, useHistory } from "react-router-dom";
import logo from '../../Assets/Iteration-1-assets/logo.svg'
import logo from './Assets/iteration-2-aseets/icons/1.svg'

export default function MainContent() {
  let history = useHistory();

  const handleClick = () => {
    history.push("/order-form");
  };

  return (
    <>
      <div className="entry-content">
        <div className="entry-content">
          <img src="Assets\Iteration-1-assets\logo.svg" />
          <div>
            <p id="firsat">fırsatı kaçırma</p>
            <p id="catchword">
              KOD ACIKTIRIR <br /> PİZZA DOYURUR
            </p>
          </div>

          <NavLink to="/order-form">
            <button className="giris-btn">ACIKTIM</button>
          </NavLink>
        </div>
      </div>
      <section className="main-container">
        <div className="ul1-container">
         <ul className="ul1">
          <li>
          <a href="" className="ul1-link">
            <img src="./Assets/iteration-2-aseets/icons/1.svg" />
           YENİ! Kore</a> 
          </li>
          <li>
            <a href="" className="ul1-link">
            <img src="./Assets/iteration-2-aseets/icons/2.svg" />
            Pizza
            </a>
          </li>
          <li>
            <a href="" className="ul1-link">
            <img src="./Assets/iteration-2-aseets/icons/3.svg" />
            Burger
            </a>
          </li>
          <li>
            <a href="" className="ul1-link">
            <img src="./Assets/iteration-2-aseets/icons/4.svg" />
            Kızartmalar
            </a>
          </li>
          <li>
            <a href="" className="ul1-link">
            <img src="./Assets/iteration-2-aseets/icons/5.svg" />
            Fast food
            </a>
          </li>
          <li>
            <a href="" className="ul1-link">
            <img src="./Assets/iteration-2-aseets/icons/6.svg" />
            Gazlı İçecek
            </a>
          </li>
        </ul>
        </div>
        <div className="tri">
          <div className="tri-left">
            <div className="left-card">
              <h2>
                Özel <br />
                Lezzetus
              </h2>
              <p>Posisyone ebsoluşın acı yok burger</p>
              <button onClick={handleClick} className="order-button">
                SİPARİŞ VER
              </button>
            </div>
          </div>
          <div className="tri-right">
            <div className="right-card-one">
              <h4>
                Dechatlon <br />
                Burger Menü
              </h4>
              <button onClick={handleClick} className="order-button">
                SİPARİŞ VER
              </button>
            </div>
            <div className="right-card-two">
              <h4>
                <span>Çoooook hızlı</span> <br />
                npm gibi kurye
              </h4>
              <button onClick={handleClick} className="order-button">
                SİPARİŞ VER
              </button>
            </div>
          </div>
        </div>
        <div className="text-container">
          <p id="satisfy">en çok paketlenen menüler</p>
          <p className="xlarge-yazi">Acıktıran Kodlara Doyuran Lezzetler</p>
        </div>
        <ul className="ul2">
          <li>
            <img src="./Assets/iteration-2-aseets/icons/1.svg" />
            YENİ! Kore
          </li>
          <li>
            <img src="./Assets/iteration-2-aseets/icons/2.svg" />
            Pizza
          </li>
          <li>
            <img src="./Assets/iteration-2-aseets/icons/3.svg" />
            Burger
          </li>
          <li>
            <img src="./Assets/iteration-2-aseets/icons/4.svg" />
            Kızartmalar
          </li>
          <li>
            <img src="./Assets/iteration-2-aseets/icons/5.svg" />
            Fast food
          </li>
          <li>
            <img src="./Assets/iteration-2-aseets/icons/6.svg" />
            Gazlı İçecek
          </li>
        </ul>
        <div className="menu-cards">
          <div className="card">
            <img src="./Assets/iteration-2-aseets/pictures/food-1.png" />
            <div>
              <h4>Terminal Pizza</h4>
              <div className="pua">
                4.9
                <div className="card-item-points">
                  <p>(200)</p>
                  <p>
                    <strong>60₺</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <img src="./Assets/iteration-2-aseets/pictures/food-2.png" />
            <div>
              <h4>Acı yok raki burger</h4>
              <div className="pua">
                4.9
                <div className="card-item-points">
                  <p>(200)</p>
                  <p>
                    <strong>60₺</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <img src="./Assets/iteration-2-aseets/pictures/food-3.png" />
            <div>
              <h4>useEffect Tavuklu Burger</h4>
              <div className="pua">
                4.9
                <div className="card-item-points">
                  <p>(200)</p>
                  <p>
                    <strong>60₺</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
