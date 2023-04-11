const darkTheme = "styles/dark.css";
const res = document.getElementById("result");
const toast = document.getElementById("toast");

function calculate(value) {
    const calculatedValue = eval(value || null);
    if (isNaN(calculatedValue)) {
        res.value = "Can't divide 0 with 0";
        setTimeout(() => {
            res.value = "";
        }, 1300);
    } else {
        res.value = calculatedValue;
        checkFunny();
    }
}


// Displays entered value on screen.
function liveScreen(enteredValue) {
    if (!res.value) {
        res.value = "";
    }

    res.value += enteredValue;
    if (checkFunny()) {
        playsqueex(enteredValue);
    }
}

function checkFunny() {
    var aud = null;
    switch (res.value) {
        case "38":
            aud = document.getElementById("laugh");
            aud.volume = .05;
            document.getElementsByClassName("wrapper")[0].style.backgroundImage = "url('assets/icant.png')";
            break;
        case "80085":
        case "5318008":
            aud = document.getElementById("booba");
            aud.volume = .10;
            break;
        case "69":
            aud = document.getElementById("nice");
            aud.volume = .1;
            break;
        case "1/6":
            aud = document.getElementById("lgb");
            aud.volume = .10;
            document.getElementsByClassName("wrapper")[0].style.backgroundImage = "url('assets/pickle.png')";
            break;
        case "+2":
            aud = document.getElementById("speedrunner");
            aud.volume = .16;
            break;
        case "-2":
            aud = document.getElementById("boo");
            aud.volume = .05;
            document.getElementsByClassName("wrapper")[0].style.backgroundImage = "url('assets/theo.png')";
            break;
    }
    if (aud != null) {
        aud.currentTime = 0;
        aud.play();
    }
    return aud == null;
}

function playsqueex(val) {
    var aud = document.getElementById("aud" + val);
    if (aud) {
        aud.currentTime = 0;
        aud.volume = .1;
        aud.play();
    }

}

//adding event handler on the document to handle keyboard inputs
document.addEventListener("keydown", keyboardInputHandler);

//function to handle keyboard inputs
function keyboardInputHandler(e) {
    // to fix the default behavior of browser,
    // enter and backspace were causing undesired behavior when some key was already in focus.
    e.preventDefault();
    //grabbing the liveScreen

    //numbers
    if (e.key === "0") {
        res.value += "0";
    } else if (e.key === "1") {
        res.value += "1";
    } else if (e.key === "2") {
        res.value += "2";
    } else if (e.key === "3") {
        res.value += "3";
    } else if (e.key === "4") {
        res.value += "4";
    } else if (e.key === "5") {
        res.value += "5";
    } else if (e.key === "6") {
        res.value += "6";
    } else if (e.key === "7") {
        res.value += "7";
    } else if (e.key === "7") {
        res.value += "7";
    } else if (e.key === "8") {
        res.value += "8";
    } else if (e.key === "9") {
        res.value += "9";
    }

    //operators
    if (e.key === "+") {
        res.value += "+";
    } else if (e.key === "-") {
        res.value += "-";
    } else if (e.key === "*") {
        res.value += "*";
    } else if (e.key === "/") {
        res.value += "/";
    }

    //decimal key
    if (e.key === ".") {
        res.value += ".";
    }

    //press enter to see result
    if (e.key === "Enter") {
        calculate(result.value);
    }

    //backspace for removing the last input
    if (e.key === "Backspace") {
        const resultInput = res.value;
        //remove the last element in the string
        res.value = resultInput.substring(0, res.value.length - 1);
    }



    if (checkFunny()) {
        playsqueex(e.key);
    }
}