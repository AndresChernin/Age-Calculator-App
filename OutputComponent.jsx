function OutputComponent({result,explanation}){
    return(
        <div className="class-for-output">
         <label className="class-for-result">{result}</label>  
        {result!=1 && <label className="class-for-explanation">{explanation}</label>}
        {result===1 && <label className="class-for-explanation">{explanation.slice(0,-1)}</label>}
        </div>
    )
}