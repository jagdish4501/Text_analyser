import React, { useState } from 'react'


export default function TextForm(props) {
    // Declare a new state variable, which we'll call "count"
    const [text, setText] = useState('')
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.Alert("success ", "Uppercase");
    }

    const handleOnChange = (event) => {
        console.log(" handleOnChange was clicked");
        setText(event.target.value);
    }

    const handleLoClick = () => {
        let newtext = text.toLocaleLowerCase();
        setText(newtext);
        props.Alert("success ", "Lowercase");
    }
    const handleClearClick = () => {
        let newtext = '';
        setText(newtext);
        props.Alert("success ", "Clearing text");
    }

    const handleCopyClick = () => {
        navigator.clipboard.writeText(text);
        document.getSelection().removeAllRanges();
        props.Alert("success ", "text copied to clipboard");
    }

    const handleRemoveExtraSpace = () => {
        var newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.Alert("success ", "Extra space removed");
    }
    return (
        < >
            <div className="container my-3" >

                <h4>{props.heading}</h4>

                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{ color: props.mode === 'dark' ? 'white' : 'black', backgroundColor: props.mode === 'dark' ? '#565a5e' : 'white' }}></textarea>
                </div >
                <div className="container my-2">
                    <button type="button" className="btn btn-primary mx-1 my-1" onClick={handleUpClick} disabled={text.length === 0}>Convert to Uppercase</button>
                    <button type="button" className="btn btn-secondary mx-1 my-1" onClick={handleLoClick} disabled={text.length === 0}>Convert to Lowercase</button>
                    <button type="button" className="btn btn-primary mx-1 my-1" onClick={handleCopyClick} disabled={text.length === 0}>Copy text</button>
                    <button type="button" className="btn btn-primary mx-1 my-1" onClick={handleRemoveExtraSpace} disabled={text.length === 0}>Remov extra space</button>
                    <button type="button" className="btn btn-danger" onClick={handleClearClick} disabled={text.length === 0}>Clear text</button>
                </div>
            </div>

            <div className={`container my-2`}>
                <h4>Your Text Summary</h4>
                <p>{(text.split(/\s+/).filter((element) => { return element.length !== 0 }).length)} Words and {text.length} charcter </p>
                <p>{0.008 * text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} Minutes read</p>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </>
    )
}
