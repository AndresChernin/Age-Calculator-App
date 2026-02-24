class DateCalculator2{
    constructor(){
        this.day=null;
        this.month=null;
        this.year=null;
        
        
        this.resultsModel={
          days:"--",
          months:"--",
          years:"--"
        };
         
        
    }
    setData(day, month, year) {
    this.day = day;
    this.month = month - 1; 
    this.year = year;
  }

  sendResults(){
    const start = new Date(this.year, this.month , this.day);
    const end=new Date();
    return this.countYearsMonthsDays(start,end);
  }
 
 countYearsMonthsDays(birth,today){
  const birthYear=birth.getFullYear();
  const todayYear=today.getFullYear();
  const birthMonth=birth.getMonth();
  var todayMonth=today.getMonth();
  const birthDay=birth.getDate();
  const todayDay=today.getDate();

  var years=todayYear-birthYear;
  var months=todayMonth-birthMonth;
  if(months<0){
    months=months+12;
    years=years-1;
  }
  var days=todayDay-birthDay;
  while(days<0){
    const daysInPrevMonth=new Date(todayYear,todayMonth,0).getDate();
    days+=daysInPrevMonth;
    months=months-1;
    todayMonth--;
    if(months<0){
       months=months+12;
       years=years-1;
   }
  }
  
  this.resultsModel.years=years;
  this.resultsModel.months=months;
  this.resultsModel.days=days;
  return this.resultsModel;
 }
 
}

