let xClicked = (i) => {
    let buttonClassList = document.getElementById(i).classList;
    if(buttonClassList.contains("boardx") === true || buttonClassList.contains("boardo") === true){
        xClicked(i);
    } else {
        buttonClassList.add("boardx");
    }
 
    checkForWinx();
    checkForWino();
    document.getElementById("newGameButton").innerHTML = "O TURN";
    let x = document.getElementsByClassName("board");
    for (var i = 0; i < x.length; i++){
        document.getElementsByClassName("board")[i].onclick = function() {oClicked(this.id)};
    }
    
}

let oClicked = (i) => {
    let buttonClassList = document.getElementById(i).classList;
    if(buttonClassList.contains("boardx") === true || buttonClassList.contains("boardo") === true){
        oClicked(i);
    } else {
        buttonClassList.add("boardo");
    }   
    
    checkForWinx();
    checkForWino();
    document.getElementById("newGameButton").innerHTML = "X TURN";
    let x = document.getElementsByClassName("board");
    for (var i = 0; i < x.length; i++){
        document.getElementsByClassName("board")[i].onclick = function() {xClicked(this.id)};
    }
    

}

function checkForWinx(){
    /*
        000
        xxx
        xxx
    */
    if(document.getElementById("00").classList.contains("boardx")){
        if(document.getElementById("01").classList.contains("boardx")){
            if(document.getElementById("02").classList.contains("boardx")){
                alert("X WON");
                document.getElementById("newGameButton").innerHTML = "New Game";
            }
        }
    }
    /*
        xxx
        000
        xxx
    */
    if(document.getElementById("10").classList.contains("boardx")){
        if(document.getElementById("11").classList.contains("boardx")){
            if(document.getElementById("12").classList.contains("boardx")){
                alert("X WON");
                document.getElementById("newGameButton").innerHTML = "New Game";
            }
        }
    }
    /*
        xxx
        xxx
        000
    */
    if(document.getElementById("20").classList.contains("boardx")){
        if(document.getElementById("21").classList.contains("boardx")){
            if(document.getElementById("22").classList.contains("boardx")){
                alert("X WON");
                document.getElementById("newGameButton").innerHTML = "New Game";
            }
        }
    }
    /*
        0xx
        0xx
        0xx
    */
    if(document.getElementById("00").classList.contains("boardx")){
        if(document.getElementById("10").classList.contains("boardx")){
            if(document.getElementById("20").classList.contains("boardx")){
                alert("X WON");
                document.getElementById("newGameButton").innerHTML = "New Game";
            }
        }
    }
    /*
        x0x
        x0x
        x0x
    */
    if(document.getElementById("01").classList.contains("boardx")){
        if(document.getElementById("11").classList.contains("boardx")){
            if(document.getElementById("21").classList.contains("boardx")){
                alert("X WON");
                document.getElementById("newGameButton").innerHTML = "New Game";
            }
        }
    }
    /*
        xx0
        xx0
        xx0
    */
    if(document.getElementById("02").classList.contains("boardx")){
        if(document.getElementById("12").classList.contains("boardx")){
            if(document.getElementById("22").classList.contains("boardx")){
                alert("X WON");
                document.getElementById("newGameButton").innerHTML = "New Game";
            }
        }
    }
    /*
        0xx
        x0x
        xx0
    */
    if(document.getElementById("00").classList.contains("boardx")){
        if(document.getElementById("11").classList.contains("boardx")){
            if(document.getElementById("22").classList.contains("boardx")){
                alert("X WON");
                document.getElementById("newGameButton").innerHTML = "New Game";
            }
        }
    }
    /*
        xx0
        x0x
        0xx
    */
    if(document.getElementById("02").classList.contains("boardx")){
        if(document.getElementById("11").classList.contains("boardx")){
            if(document.getElementById("20").classList.contains("boardx")){
                alert("X WON");
                document.getElementById("newGameButton").innerHTML = "New Game";
            }
        }
    }
}

function checkForWino(){
        /*
            000
            xxx
            xxx
        */
    if(document.getElementById("00").classList.contains("boardo")){
        if(document.getElementById("01").classList.contains("boardo")){
            if(document.getElementById("02").classList.contains("boardo")){
                alert("O WON");
                document.getElementById("newGameButton").innerHTML = "New Game";
            }
        }
    }
    /*
        xxx
        000
        xxx
    */
    if(document.getElementById("10").classList.contains("boardo")){
        if(document.getElementById("11").classList.contains("boardo")){
            if(document.getElementById("12").classList.contains("boardo")){
                alert("O WON");
                document.getElementById("newGameButton").innerHTML = "New Game";
            }
        }
    }
    /*
        xxx
        xxx
        000
    */
    if(document.getElementById("20").classList.contains("boardo")){
        if(document.getElementById("21").classList.contains("boardo")){
            if(document.getElementById("22").classList.contains("boardo")){
                alert("O WON");
                document.getElementById("newGameButton").innerHTML = "New Game";
            }
        }
    }
    /*
        0xx
        0xx
        0xx
    */
    if(document.getElementById("00").classList.contains("boardo")){
        if(document.getElementById("10").classList.contains("boardo")){
            if(document.getElementById("20").classList.contains("boardo")){
                alert("O WON");
                document.getElementById("newGameButton").innerHTML = "New Game";
            }
        }
    }
    /*
        x0x
        x0x
        x0x
    */
    if(document.getElementById("01").classList.contains("boardo")){
        if(document.getElementById("11").classList.contains("boardo")){
            if(document.getElementById("21").classList.contains("boardo")){
                alert("O WON");
                document.getElementById("newGameButton").innerHTML = "New Game";
            }
        }
    }
    /*
        xx0
        xx0
        xx0
    */
    if(document.getElementById("02").classList.contains("boardo")){
        if(document.getElementById("12").classList.contains("boardo")){
            if(document.getElementById("22").classList.contains("boardo")){
                alert("O WON");
                document.getElementById("newGameButton").innerHTML = "New Game";
            }
        }
    }
    /*
        0xx
        x0x
        xx0
    */
    if(document.getElementById("00").classList.contains("boardo")){
        if(document.getElementById("11").classList.contains("boardo")){
            if(document.getElementById("22").classList.contains("boardo")){
                alert("O WON");
                document.getElementById("newGameButton").innerHTML = "New Game";
            }
        }
    }
    /*
        xx0
        x0x
        0xx
    */
    if(document.getElementById("02").classList.contains("boardo")){
        if(document.getElementById("11").classList.contains("boardo")){
            if(document.getElementById("20").classList.contains("boardo")){
                alert("O WON");
                document.getElementById("newGameButton").innerHTML = "New Game";
            }
        }
    }
}

function newGame(){
    let x = document.getElementsByClassName("board");
    for (var i = 0; i < x.length; i++){
        document.getElementsByClassName("board")[i].className = "board";
    }
    console.log("clicked new game");
}