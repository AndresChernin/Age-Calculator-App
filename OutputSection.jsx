function OutputSection({results}){
    return(
        <div className="class-outputSection">
        {results.years!=0 &&<OutputComponent result={results.years} explanation="years"/>} 
        {results.months!=0 && <OutputComponent result={results.months} explanation="months"/>}  
        {results.days!=0 && <OutputComponent result={results.days} explanation="days"/>}    
        </div>
    )
}