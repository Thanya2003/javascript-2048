var board;
var score = 0;
var rows= 4;
var columns = 4;

window.onload= function(){
    setgame();
}

function setgame(){
    board=[
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ]

    // board=[
    //     [2, 2, 2, 2],
    //     [2, 2, 2, 2],
    //     [4, 4, 8, 8],
    //     [4, 4, 8, 8]
    // ]

    for (let r=0; r<rows; r++){
        for(c=0; c<columns; c++){
            let tile = document.createElement("div");
            tile.id=r.toString()+"-"+c.toString();
            let num = board[r][c];
            updateTile(tile, num);
            document.getElementById("board").append(tile);
        }
    }
    settwo();
    settwo();
}

function hasemptytile(){
    let count = 0;
    for (let r=0; r<rows; r++){
        for(c=0; c<columns; c++){
            if(board[r][c] == 0){
                return true;
            }
}
    }
document.innerHTML="game failed";

}

function settwo(){
    if(!hasemptytile()){
        return;
    }
     let found= false;
     while(!found){
        let r= Math.floor(Math.random()*rows);
        let c= Math.floor(Math.random()*columns);

        if(board[r][c]== 0){
            board[r][c]= 2;
            let tile = document.getElementById(r.toString()+"-"+c.toString());
            tile.innerText="2";
            tile.classList.add("a2");
            found=true;
        }
     }
}


function updateTile(tile, num){
    // alert("thanya")

    tile.innerText="";
    tile.classList.value="";
    tile.classList.add("tile");
    if(num>0){
        tile.innerText=num.toString();
    
    if(num<=4096){
        tile.classList.add("a"+num.toString())
    }else{
        tile.classList.add("a8192")
    }
}
}
document.addEventListener("keyup",(e)=>{
    if(e.code =="ArrowLeft"){
        slideleft();
        settwo();
    }
    else if(e.code =="ArrowRight"){
        slideright();
        settwo();

    }
    else if(e.code =="ArrowUp"){
        slideup();
        settwo();

    }
    else if(e.code =="ArrowDown"){
        slidedown();
        settwo();
    }
    document.getElementById("score").innerText= score;
})

function fliterzero(row){
    return row.filter(num=> num!=0);
}

function slide(row)
{
    row = fliterzero(row);

    for(let i=0; i< row.length-1; i++){
    if(row[i] ==row[i+1]){
        row[i]*=2;
        row[i+1]=0;
        score+=row[i]
}
    }
    row=fliterzero(row);
  

    while(row.length<columns){
        row.push(0);
    }
    return row;
}

function slideleft(){
    for(let r=0; r< rows; r++){
        let row = board[r];
        row = slide(row);
        board[r]=row;

        for (let c=0; c<columns; c++){
            let tile = document.getElementById(r.toString()+"-"+c.toString())
            let num=  board[r][c];
            updateTile(tile, num);
        }
    }
}


function slideright(){
    for(let r=0; r< rows; r++){
        let row = board[r];
        row.reverse();
        row = slide(row);
        
        board[r]=row.reverse();

        for (let c=0; c<columns; c++){
            let tile = document.getElementById(r.toString()+"-"+c.toString())
            let num=  board[r][c];
            updateTile(tile, num);
        }
    }
}

function slideup(){
    for(let c=0; c< columns; c++){
        let row =[board[0][c],board[1][c],board[2][c],board[3][c]];
        row = slide(row);
        // board[0][c]=row[0];
        // board[1][c]=row[1];
        // board[2][c]=row[2];
        // board[3][c]=row[3];


        for (let r=0; r<rows; r++){
            board[r][c]=row[r];
            let tile = document.getElementById(r.toString()+"-"+c.toString())
            let num=  board[r][c];
            updateTile(tile, num);
        }
    }

}
function slidedown(){
    for(let c=0; c< columns; c++){
        let row =[board[0][c],board[1][c],board[2][c],board[3][c]];
        row.reverse();
        row = slide(row);
        row.reverse();
        // board[0][c]=row[0];
        // board[1][c]=row[1];
        // board[2][c]=row[2];
        // board[3][c]=row[3];


        for (let r=0; r<rows; r++){
            board[r][c]=row[r];
            let tile = document.getElementById(r.toString()+"-"+c.toString())
            let num=  board[r][c];
            updateTile(tile, num);
        }
    }

}