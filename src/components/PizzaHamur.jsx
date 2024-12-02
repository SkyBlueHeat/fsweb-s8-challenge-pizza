export default function PizzaHamur({ handleInputChange, hamur }) {
  return (
    <>
      <label className="data-cy-selectbox">
        <select value={hamur} name="hamur" onChange={handleInputChange}>
          <option  value="İnce">
            İnce Hamur
          </option>
          <option className="data-cy-hamur" value="Orta">Orta Hamur</option>
          <option value="Kalın">Kalın Hamur</option>
        </select>
      </label>
    </>
  );
}
