function Keypad({handleChange,calculate,handleClear}){
    return(
        <div>
        <div className="content">
        <button  className='digits' onClick={()=>{handleChange("7")}}>7</button>
        <button className='digits' onClick={()=>{handleChange("8")}}>8</button>
        <button className='digits' onClick={()=>{handleChange("9")}}>9</button>
        <button className='digits operators' onClick={()=>{handleChange("/")}}>/</button>
        </div>
        <div className="content">
        <button  className='digits' onClick={()=>{handleChange("4")}}>4</button>
        <button className='digits' onClick={()=>{handleChange("5")}}>5</button>
        <button className='digits' onClick={()=>{handleChange("6")}}>6</button>
        <button className='digits operators' onClick={()=>{handleChange("*")}}>*</button>
        </div>
        <div className="content">
        <button  className='digits' onClick={()=>{handleChange("1")}}>1</button>
        <button className='digits' onClick={()=>{handleChange("2")}}>2</button>
        <button className='digits' onClick={()=>{handleChange("3")}}>3</button>
        <button className='digits operators' onClick={()=>{handleChange("-")}}>-</button>
        </div>
        <div className="content">
        <button  className='digits' onClick={()=>{handleChange("0")}}>0</button>
        <button className='digits' onClick={()=>{calculate("=")}}>=</button>
        <button className='digits1' onClick={()=>{handleClear("❌")}}>❌</button>
        <button className='digits operators' onClick={()=>{handleChange("+")}}>+</button>
        </div>
        </div>

    )
}
export default Keypad;