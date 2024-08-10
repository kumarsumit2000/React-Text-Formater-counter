import { useState } from "react"
import PropTypes from 'prop-types'


function Inputbox(props) {
  const [Text , setText] = useState("");
  const [Inputboxhead , setInputboxhead] = useState(props.Inputboxhead);

//upper case convert
function toUppercase(){
  if(Text === "" ){
    alert("Please Enter Your Text");
  }else{
  setText(Text.toLocaleUpperCase());
  setInputboxhead("Text Formated To Uppercase")
}
}
//lower case convert
function toLowercase(){
  if(Text === "" ){
    alert("Please Enter Your Text");
  }else{
  setText(Text.toLocaleLowerCase());
  setInputboxhead("Text Formated To Lowercase")
}
}
//lower case convert
 // Capitalize each word
 function toCapital() {
  if (Text === "") {
    alert("Please Enter Your Text");
  } else {
    const capitalizedText = Text.split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
    setText(capitalizedText);
    setInputboxhead("Text Formatted To Capitalize");
  }
}
//listen all changes in input box and assigned new value to Text variable
function currentText(event){
  setText(event.target.value)
}
  return (
    <div className='container'>
    <h1 className="m-3">{Inputboxhead}</h1>
    <div className="mb-3">
    <textarea className="form-control" value={Text} onChange={currentText} placeholder="Enter Your Text Here....." id="exampleFormControlTextarea1" rows="10"></textarea>
    </div>
    <button className="bg-primarybtn btn-primary m-3" onClick={toUppercase}>To Uppercase</button>
    <button className="bg-primarybtn btn-primary m-3" onClick={toLowercase}>To Lowercase</button>
    <button className="bg-primarybtn btn-primary m-3" onClick={toCapital}>To Capitalize</button>
    </div>
  )
}

export default Inputbox

Inputbox.propTypes = {
  Inputboxhead : PropTypes.string.isRequired,
}