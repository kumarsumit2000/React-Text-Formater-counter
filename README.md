# Format Your Text Here
#Textbox Component
```javascript
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
function Textchange(event){
  setText(event.target.value)
}
  return (
    <>
    <div className='container'>
    <h1 className="m-3">{Inputboxhead}</h1>
    <div className="mb-3">
    <textarea className="form-control" value={Text} onChange={Textchange} placeholder="Enter Your Text Here....." id="exampleFormControlTextarea1" rows="10"></textarea>
    </div>
    <div className="m-3">{Text.length} Word & {Text == "" ? 0 : Text.trim().split(/\s+/).length} Charactor</div>
    <button className="bg-primarybtn btn-primary m-3" onClick={toUppercase}>To Uppercase</button>
    <button className="bg-primarybtn btn-primary m-3" onClick={toLowercase}>To Lowercase</button>
    <button className="bg-primarybtn btn-primary m-3" onClick={toCapital}>To Capitalize</button>
    </div>
    </>
  )
}

export default Inputbox

Inputbox.propTypes = {
  Inputboxhead : PropTypes.string.isRequired,
}
```

#Navbar component
```javascript
import { useState } from "react"

function Navbar() {
    const [modeText , setmodeText] = useState("dark");
    const [TextonChange , setTextonChange] = useState("light");
    const mode = () =>{
        if(modeText == "light"){
        setmodeText("dark");
        setTextonChange("white");
       }else{
        setmodeText("light");
        setTextonChange("dark");
       }}
  return (
    <div>
 <nav className={`navbar navbar-expand-lg bg-body-tertiary bg-${modeText}`}>
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className={`navbar-toggler-icon text-${TextonChange}`}></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className={`nav-link text-${TextonChange}`} aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link text-${TextonChange}`} href="#">Link</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link text-${TextonChange}`} aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <div className="form-check form-switch">
       <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={mode}/>
       <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{modeText}</label>
   </div>
    </div>
  </div>
</nav>
 
    </div>
  )
}

export default Navbar
```
