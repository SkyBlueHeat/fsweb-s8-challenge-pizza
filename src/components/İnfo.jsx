function Info() {
    return (
        <>
        <div className="content-div" style={{width :"calc(100vw - 20px)", height:"590px"}}>

          <img className="form-banner" src="Assets\Iteration-2-aseets\pictures\form-banner.png" alt="" />

        <a style={{ marginLeft:"650px",   textDecoration:"none"}} href="/"><p style={{textDecoration:"none", color:"black"}}  className="yönlendirme" >Anasayfa-<strong style={{color:"red"}}>Sipariş Oluştur</strong></p ></a>

          <h3 style={{ marginLeft:"650px",  }}>Position Absolute Acı Pizza</h3>

          <div className="content-info" style={{margin:"0 auto", maxWidth:"600px" , }}>

            <p style={{ marginLeft:"-5px", maxWidth:"600px" }} className="content-ucret">85.50₺</p>

            <div style={{ margin:"0 auto", maxWidth:"600px"}} className="content-points">
              
              <p  style={{ marginLeft:"374px",position:"absolute", maxWidth:"600px" }}>4.9</p>
              <p  style={{ marginLeft:"460px", maxWidth:"600px" }}>(200)</p>
            </div>
          </div>
          <div>
            <p style={{ margin:"0 auto", maxWidth:"600px"}}>
              Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tan saba göre. 
              Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel
               olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı
                buğday bazlı hamurdan oluşan Türk kökenli lezzetli bir yemektir -yersen-... Küçük bir pizzaya bazen pizzetta denir.
            </p>
          </div>
        </div>
      </>
    );
  }
  
  export default Info;
  