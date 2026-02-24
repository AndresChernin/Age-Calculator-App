function InputComponent({label,initialText,errorMessage,value, onChange, onKeyDown}){
    return(
        <div className="class-for-input">
         {!errorMessage &&<label className="label-no-error">{label}</label>}  
         {errorMessage &&<label className="label-error">{label}</label>} 
         {!errorMessage &&
         <input className="input-no-error"
         type="text"
         inputMode="numeric"
         placeholder={initialText}
         value={value}
         onChange={onChange}
         onKeyDown={onKeyDown}
         /> 
         }
         {errorMessage &&
         <input className="input-error"
         type="text"
         inputMode="numeric"
         placeholder={initialText}
         value={value}
         onChange={onChange}
         onKeyDown={onKeyDown}
         /> 
         }
         {errorMessage&&<span>{errorMessage}</span>}
        </div>
    )
}