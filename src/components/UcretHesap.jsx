import { NavLink } from "react-router-dom";

export default function UcretHesap({
  handleInputChange,
  pieces,
  ekMalzemeHesabi,
  toplamHesap,
  disabled,
  onClick,
}) {
  return (
    <div className="hesap-butonlari">
      <div className="pieces-butonlari">
        <button type="button" id="cikar" name="pieces" value={pieces} onClick={handleInputChange}>
          -
        </button>
        <p id="piece">{pieces}</p>
        <button type="button" id="ekle" name="pieces" value={pieces} onClick={handleInputChange}>
          +
        </button>
      </div>
      <div className="order-total">
        <div className="order-total-info">
          <h3>Sipariş Toplamı</h3>
          <div className="malzeme_sipari_con">
            <p>Seçimler <span className="ingredient-account">{ekMalzemeHesabi}₺</span></p>
            </div>
            <div className="malzeme_sipari_con">
          <p id="red">
            Toplam <span className="ingredient-account">{toplamHesap}₺</span>
            
          </p>
          </div>
        </div>
        <div className="submit-btn">
            <button onClick={onClick} disabled={disabled} type="submit">
              SİPARİŞ VER
            </button>
          
        </div>
      </div>
    </div>
  );
}
