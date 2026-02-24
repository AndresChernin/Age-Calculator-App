

function InputSection({values,errors, inputFunction,enterClick}){
    
    
    return(
        <div className="class-inputSection">
        <InputComponent 
        label="DAY" 
        initialText="DD" 
        errorMessage={errors.day}
        value={values.day}
        onChange={inputFunction("day")}
        onKeyDown={enterClick}
        />  
        <InputComponent 
        label="MONTH" 
        initialText="MM" 
        errorMessage={errors.month}
        value={values.month}
        onChange={inputFunction("month")} 
        onKeyDown={enterClick} 
        />  
        <InputComponent 
        label="YEAR"
        initialText="YYYY" 
        errorMessage={errors.year}
        value={values.year}
        onChange={inputFunction("year")}
        onKeyDown={enterClick} 
        />    
        </div>
    )
}