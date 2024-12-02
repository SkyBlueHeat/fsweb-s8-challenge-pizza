export default function IsimAlani({ isim, onChange }) {
  return (
    <>
      <h3>İsim</h3>
      <label className="isim-input">
        <input
        placeholder="Lütfen isminizi giriniz."
          type="text"
          id="text"
          name="isim"
          value={isim}
          onChange={onChange}
        />
      </label>
    </>
  );
}
