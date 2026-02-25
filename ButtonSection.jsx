function ButtonSection({convertData}){
    return(
        <section className="class-buttonSection">
            
         <div className="class-line">
         </div> 
        <button 
        type="button"
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
        </section>
    )
}