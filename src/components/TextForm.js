import React,{useState} from 'react'

export default function TextForm(props) {
    const [text,SetText] = useState("");

    const handleUpClick = () =>{
        SetText(text.toUpperCase());
        props.showAlert("Changed to uppercase","success");
 
    }

    const handleOnChange = (event) =>{
       SetText(event.target.value);
    }

    const handleLowClick = () => {
        SetText(text.toLowerCase());
        props.showAlert("Changed to Lower case","success");
    }

    const handleClear = () => {
        SetText("");
        props.showAlert("Text cleared","success");
    }

    const handleCopy = () => {
       var text = document.getElementById("myBox");
       text.select();
       text.setSelectionRange(0,9999);
       navigator.clipboard.writeText(text.value);
       props.showAlert("Copied to the clipboard","success");
    }
  return (
    <>
        <div className="container">
            <h2 className={`text-${props.mode==='light'?'dark':'light'}`}>{props.heading}</h2>
            <div className="mb-3 " >
                <textarea rows={8} style={{backgroundColor : props.mode==='light'?'white':'black' ,color : props.mode==='light'?'black':'white' }} className="form-control" value={text} onChange={handleOnChange} id='myBox'></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to upperCase</button>
            <button className="btn btn-primary mx-3" onClick={handleLowClick}>Convert to LowerCase</button>
            <button className="btn btn-primary" onClick={handleCopy}>Copy All Text</button>
            <button className="btn btn-primary mx-3" onClick={handleClear}>Clear</button>
        </div>

        <div className={`conatiner my-5 text-${props.mode==='light'?'dark':'light'}`}>
            <h2>Your text Summary Here</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p> {0.008*text.split(" ").length} minutes  read</p>
            <h3>Preview</h3>
            <p>{text.length > 0 ? text : "Enter something in the textbox to preview here"}</p>
        </div>
    
    </>
  )
}
