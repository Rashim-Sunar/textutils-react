import React from 'react'

export default function About(props) {
    // const[modetext,setModetext]=useState("Enable dark mode")
    // const[mystyle,setMystyle]=useState({
    //     color:"black",
    //     backgroundColor:"white"
    // })
    let mystyle= {
        color : props.mode === "dark"?"white":"black",
        backgroundColor : props.mode ==="dark"?"rgb(40, 56, 82)":"white",
        // border : '2px solid',
        // borderColor:props.mode==="dark"?"white":"grey"
    }

    // const toggleMode = () => {
        // if(mystyle.color==='white'){
            // setMystyle({
                // color:'black',
                // backgroundColor:'white'
            // })
            // setModetext("Enable dark mode");
        // }
        // else{
            // setMystyle({
                // color:'white',
                // backgroundColor:'rgb(89, 89, 89)'
            // })
            // setModetext("Enable light mode");
        // }
    // }
  return (
    <>
        <div className="container my-3">
            <h3 className='my-3' style={{color:props.mode==="dark"?"white":"black"}}>About Us</h3>
         <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button style={mystyle} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Analyze your text
                </button>
                </h2>
                <div style={mystyle} id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <strong>TextUtils </strong>gives you a way to analyze your text quickly and efficiently. Be it <code>word count,character count</code>, or
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button style={mystyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                   Free to use
                </button>
                </h2>
                <div style={mystyle} id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <strong>TextUtils</strong> is a free character counter tool that provides instant character count and word count statistics for a given text. TextUtils reports the number of<code> words and characters.</code>  Thus it is suitable for writing text with word/character.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button style={mystyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                   Browser compatible
                </button>
                </h2>
                <div style={mystyle} id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <strong>This word counter software</strong> works in any web browers such as chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc. 
                </div>
            </div>
           </div>
         {/* <button type='button' onClick={toggleMode} className="btn btn-primary my-3">{modetext}</button> */}
       </div>
       </div>
    </>
  )
}
