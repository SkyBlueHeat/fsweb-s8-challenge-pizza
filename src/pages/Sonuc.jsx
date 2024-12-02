import Footer from "../layouts/Footer";

function Sonuc({ userChoices }) {
  return (
    <>
      <section className="order-summary-page">
        <img src="./Assets/iteration-1-assets/logo.svg" />
        <div className="sonuc-text">
          <p className="lezzet">lezzetin yolda</p>
          <p id="siparis-alindi"> SİPARİŞ ALINDI!</p>
        </div>
        <div>
          <h3>Poisition Absolute Acı Pizza</h3>
          <div>
            <p>
              Boyut : <strong>{userChoices.boyut}</strong>
            </p>
            <p>
              Hamur : <strong>{userChoices.hamur}</strong>
            </p>
            <div className="malzemeler-container">
              <p >
              Ek Malzemeler : <span><strong > {userChoices["ek-malzeme"]}, </strong></span>
            </p>
            </div>
            
          </div>
        </div>
        <div className="price-container">
          <h3>Sipariş Toplamı </h3>s
          <div className="secim-harci">
           <strong><p>Seçimler :</p></strong> 
            <p>
              <strong>{userChoices.secimler}.00₺</strong>
            </p>
          </div>
          <div className="secim-harci">
            <strong><p>Toplam :</p></strong>
            <p>
              <strong>{userChoices.toplam_ucret}₺</strong>
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Sonuc;
