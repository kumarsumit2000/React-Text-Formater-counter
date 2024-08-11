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
