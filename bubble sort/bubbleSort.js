// define
let size ;
let containerWidth = document.getElementById('container').offsetWidth;
console.log(containerWidth);
let arr = [];
if(containerWidth < 500)
{
    size = 20;
}
else
{
    size = 30;
}
let playingStatus = false;

// funtions
function createBars()
{
    for (let i = 0; i < size; i++) {
        const bar = document.createElement("div");
        bar.setAttribute("class",'bar');
        if(containerWidth > 500)
        {
            bar.style.width = "10px";
        }
        else
        {
            bar.style.width = "5px";
        }
        bar.style.height = arr[i].toString() + "px";
        container.appendChild(bar);
    }
}

function random() {
    // exiting from playing condition
    playingStatus = false;
    let plyBtn = document.getElementById("ply");
    plyBtn.innerText = "Play";

    let container = document.getElementById("container");
    container.innerHTML = "";

    for (let i = 0; i < size; i++) {
        if(containerWidth > 500 )
        {
            arr[i] = Math.random() * 500;
        }
        else
        {
            arr[i] = Math.random() * 150;
        }
    }
    createBars();
}

async function bubbleSort() {
    let temp;
    var bars = document.getElementsByClassName('bar');
    for (let i = 0; i < size - 1; i++) {
        for (let j = 0; j < size - 1 - i; j++) {
            // exiting from the funtion
            if(playingStatus == false)
            {
                return;
            }

    
                // changing color before swap
            bars[j].style.backgroundColor = "#FF4949";
            bars[j+1].style.backgroundColor = "#FF4949";

            await new Promise((resolve)=>{
                setTimeout(()=>{
                    resolve();
                },600);
            })

            if (arr[j] > arr[j + 1]) {
                // swap
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;

                //swap animate
                bars[j].style.height = `${arr[j]}px`;
                bars[j+1].style.height = `${arr[j+1]}px`;

            }

            await new Promise((resolve)=>{
                setTimeout(()=>{
                    resolve();
                },600);
            });

            // returning color after swap
            bars[j].style.backgroundColor = "black";
            bars[j+1].style.backgroundColor = "black";
            }

            }
    
    let plyBtn = document.getElementById("ply");
    plyBtn.innerText = "Play";
}

// play function
function play()
{
    let plyBtn = document.getElementById("ply");
    if(plyBtn.innerText == "Play")
    {
        playingStatus = true;
        bubbleSort();
        plyBtn.innerText = "Stop";
    }
    else
    {
        playingStatus = false;
        plyBtn.innerText = "Play";
    }
}

// main
random();






