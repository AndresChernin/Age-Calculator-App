// InputValidator.js

  class InputValidator {

     static noErrors2(errors){
            return Object.values(errors).every(e => e === "");
     }
     static noLeerValues(values){
         return Object.values(values).every(v => v != "");
     }

  static validateFormatOfInput(field, value) {
    if (value === "") {
      return ""; // ❗ leer is OK during your tip
    }

    if (!/^[0-9]+$/.test(value)) {
      return "Wrong data format";
    }

    const number = Number(value);

    switch (field) {
      case "day":
        return number >= 1 && number <= 31
          ? ""
          : "Must be ∈[1,31]";

      case "month":
        return number >= 1 && number <= 12
          ? ""
          : "Must be ∈[1,12]";

      case "year":
        const currentYear = new Date().getFullYear();
        return number >= 1900 && number <= currentYear
          ? ""
          : `Must be ∈[1900,${currentYear}] `;

      default:
        return "";
    }
  }
  static validateAllLive(values) {
  const errors = { day: "", month: "", year: "" };

  // 1️⃣ Inputerrors
  errors.day = InputValidator.validateFormatOfInput("day", values.day);
  errors.month = InputValidator.validateFormatOfInput("month", values.month);
  errors.year = InputValidator.validateFormatOfInput("year", values.year);
  //console.log(`Misstackes after Format validation: ${JSON.stringify(errors)}`);
  //console.log(`Values after Format validation: ${JSON.stringify(values)}`);
  // ❗ there are Inputerrors → STOP
  if (!InputValidator.noErrors2(errors)) return errors;
  else{
    if(InputValidator.noLeerValues(values)) {
      //console.log("We can proof future date");
      errors.month=InputValidator.validateFutureMonth(values);
      errors.day=InputValidator.validateFutureDay(values);
      
    }
    return errors;
  }

 }
 static validateFutureMonth(values){
  var error="";
  //console.log(`Daten: ${values.day},${values.month},${values.year}.`);
  const currentYear=new Date().getFullYear();
  const currentMonth=new Date().getMonth();
  const year = Number(values.year);
  const month=Number(values.month)-1;
  if(year===currentYear &&month>currentMonth){
     error=`Must be ∈[1,${currentMonth+1}]`;
  }
  return error;
 }
 static validateFutureDay(values){
  var error="";
  const currentYear=new Date().getFullYear();
  const currentMonth=new Date().getMonth();
  const currentDay=new Date().getDate();
  const year = Number(values.year);
  const month=Number(values.month)-1;
  const day=Number(values.day);
  if(year===currentYear&& month===currentMonth && day>currentDay){
        error=`Must be ∈[1${currentDay}]`;
  }
  return error;
                  
 }

  static validateEmptyValues(values,errors) {
    if(!InputValidator.noErrors2(errors))return errors;
    console.log(`values to proof are ${JSON.stringify(values)}`)

    const newErrors = {};

    // Required + digits
    for (const field in values) {
      const value = values[field];
      console.log(`The value to proof is ${value}`);
      if (!value) {
        newErrors[field] = "This field is required";
        continue;
      }
    }
     return newErrors;
    }
    static veryLastValidation(values, errors){
      if(!InputValidator.noErrors2(errors))return errors;
      var error="";
      const newErrors = { ...errors };
      const daysInMonth=InputValidator.getDaysInMonth(values.month,values.year);
      //console.log(`daysInMOnth for ${values.month} month is: ${daysInMonth}`);
      //console.log(`values.day  is: ${values.day}`);
      if(daysInMonth<values.day){
        error=`Must be ∈[1,${daysInMonth}]`;
      }
      newErrors.day=error;
      //console.log(`error: ${error}`);
      //console.log(`errors: ${JSON.stringify(errors)}`);
      return newErrors;

    }
    static getDaysInMonth(month, year) {
       //console.log(`getDays in ${month}`);
       return new Date(year, month, 0).getDate();
    }
}
