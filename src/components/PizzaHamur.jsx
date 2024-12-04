export default function PizzaHamur({ handleInputChange, hamur }) {
  return (
    <>
      <label   className="data-cy-selectbox ">
        <select className="dropdown-con" aria-placeholder="hamur" value={hamur} name="hamur" onChange={handleInputChange}>
          <option value="İnce">
            <h6>--Hamur Kalınlığı Seç--</h6>
           
          </option>
          <option className="dropdown-link" value="Kalın">İnce Hamur</option>
          <option className="data-cy-hamur dropdown-link" value="Orta">Orta Hamur</option>
          <option className="dropdown-link" value="Kalın">Kalın Hamur</option>
        </select>
      </label>
    </>
  );
}
