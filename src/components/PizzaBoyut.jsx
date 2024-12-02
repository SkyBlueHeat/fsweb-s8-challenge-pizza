export default function PizzaBoyut({
  onChange,
  boyut,
  checked,
  className,
}) {
  return (
    <>
      <label>
        <input
          className={className}
          type="radio"
          name="boyut"
          value={boyut}
          onChange={onChange}
          checked={checked}
        />
        {boyut}
      </label>
    </>
  );
}
