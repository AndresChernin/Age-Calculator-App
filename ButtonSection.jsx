function ButtonSection({convertData}){
    return(
        <div className="class-buttonSection">
            
         <div className="class-line">
         </div> 
        <button 
        className="arrow-button" 
        aria-label="Calculate age"
        onClick={convertData}
        >
          <img
           src="assets/images/icon-arrow.svg"
           alt=""
           className="arrow-icon"
         />
         
       </button>
        </div>
    )
}