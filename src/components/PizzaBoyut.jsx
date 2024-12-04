export default function PizzaBoyut({
  onChange,
  boyut,
  checked,
  className,
}) {
  return (
    <>
   


<div class="checkbox-wrapper-56">
      <label className="container-1" >
   
        <input 
       
        
          className={className}
          type="radio"
          name="boyut"
          value={boyut}
          onChange={onChange}
          checked={checked}
        />
        <div class="checkmark"></div>
        {boyut}
      </label>
      </div>
    </>
  );
}
