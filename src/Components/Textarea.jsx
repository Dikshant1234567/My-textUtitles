import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Alert from "./Alert";

function Textarea(props) {
  const [alertText, setAlertText] = useState(null);
  useEffect(() => {
    console.log("print");
    setTimeout(() => {
      setAlertText("");
    }, 3000);
  });

  const [text, setText] = useState("");
  const textOnChangeEvent = (e) => {
    setText(e.target.value);
  };
  // dark theme
  const [myStyle, setmyStyle] = useState({
    backgroundColor: "white",
    color: "black",
  });

  // button events
  // uppercase Event
  const upperCaseEvent = () => {
    let upperText = text.toLocaleUpperCase();
    setText(upperText);
    setAlertText("Converted into UpperText");
    if (text === "") {
      // alert("Please enter some text");
      setAlertText("Please enter some text");
    }
  };

  // LowerCase Event
  const lowerCaseEvent = () => {
    let upperText = text.toLocaleLowerCase();
    setText(upperText);
    setAlertText("Converted into LowerText");
    if (text === "") {
      // alert("Please enter some text");
      setAlertText("Please enter some text");
    }
  };
  // clear text
  const clearTextEvent = () => {
    setAlertText("Text is cleared");
    setText("");
  };

  // darkMode

  // style={darkModeStyle}

  const darkTheme = () => {
    if (myStyle.color === "white") {
      setAlertText("Light Mode");
      setmyStyle({
        backgroundColor: "white",
        color: "black",
      });
    } else {
      setAlertText("Dark Mode");
      setmyStyle({
        backgroundColor: "black",
        color: "white",
      });
    }
  };
  return (
    <div style={myStyle}>
      <div style={{ height: "50px" }}>
        <Alert alert={alertText} />
      </div>

      <div className="container py-3 my-0">
        <div></div>
        <h1 className="mx-4" style={myStyle}>
          Enter your text{" "}
          <Button>
            <DarkModeIcon
              className="mx-2 fs-2 text-success pointer-event"
              onClick={darkTheme}
            />
          </Button>
        </h1>

        <div className=" my-4 ">
          <div className=" form-floating mx-4  ">
            <textarea
              style={{ height: "40vh", padding: "20px" }}
              className="form-control fs-6"
              placeholder="Leave a comment here"
              id="floatingTextarea"
              cols={24}
              value={text}
              onChange={textOnChangeEvent}
            ></textarea>
          </div>
        </div>
        <div className="container" style={myStyle}>
          <Button
            disabled={text === ""}
            className="mx-2 my-md-2 my-sm-3"
            variant="contained"
            onClick={upperCaseEvent}
          >
            convert into uppercase
          </Button>
          <Button
            className="mx-2"
            variant="contained"
            onClick={lowerCaseEvent}
            disabled={text === ""}
          >
            Convert into LowerCase
          </Button>
          <Button
            className="mx-2"
            variant="contained"
            onClick={clearTextEvent}
            disabled={text === ""}
          >
            clear text
          </Button>
          <br />
          <h3 className="mt-4 mb-0 mx-2">Summary</h3>
          <p className="mx-2 text-danger">
            {
              text.split(" ").filter((word) => {
                return word.length !== 0;
              }).length
            }{" "}
            , {text.length}
          </p>

          <h3 className="mt-4 mb-0 mx-2">Preview</h3>
          <p className="mx-2 text-info">{text} </p>
        </div>
      </div>
    </div>
  );
}

export default Textarea;
