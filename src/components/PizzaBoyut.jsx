export default function PizzaBoyut({
  onChange,
  boyut,
  checked,
  className,
}) {
  return (
    <>
   


<div className="checkbox-wrapper-56">
      <label className="container-1" >
   
        <input 
       
        
          className={className}
          type="radio"
          name="boyut"
          value={boyut}
          onChange={onChange}
          checked={checked}
        />
        <div className="checkmark"></div>
        {boyut}
      </label>
      </div>
    </>
  );
}
