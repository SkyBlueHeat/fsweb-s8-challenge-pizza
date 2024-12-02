export default function SiparisNotu({ handleInputChange, siparisnotu }) {
  return (
    <>
      <h3>Sipariş Notu</h3>
      <label className="bold-label">
        <textarea
          placeholder="Siparişinize eklemek istediğiniz bir not var mı?"
          id="order-note"
          name="order-note"
          value={siparisnotu}
          onChange={handleInputChange}
        />
      </label>
    </>
  );
}
