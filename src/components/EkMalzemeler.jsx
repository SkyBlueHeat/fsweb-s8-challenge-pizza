export default function EkMalzemeler({
  disabled,
  onChange,
  value,
  checked,
  className,
  sx,
}) {
  return (
    <>
      <label className="malzeme" >
        <input style={{backgroundColor: "lightblue"}}
      
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
