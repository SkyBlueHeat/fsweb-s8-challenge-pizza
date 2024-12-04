export default function EkMalzemeler({
  disabled,
  onChange,
  value,
  checked,
  className,
}) {
  return (
    <>
      <label className="malzeme">
        <input
        
          className={className}
          disabled={disabled}
          type="checkbox"
          name="ek-malzeme"
          value={value}
          onChange={onChange}
          checked={checked}
        />
        {value}
      </label>
    </>
  );
}
