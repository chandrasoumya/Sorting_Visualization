// define
let size;
let containerWidth = document.getElementById('container').offsetWidth;
let arr = [];
if (containerWidth < 500) {
    size = 20;
}
else {
    size = 30;
}
let playingStatus = false;

// funtions
function createBars() {
    for (let i = 0; i < size; i++) {
        const bar = document.createElement("div");
        bar.setAttribute("class", 'bar');
        if (containerWidth > 500) {
            bar.style.width = "10px";
        }
        else {
            bar.style.width = "5px";
        }
        bar.style.height = arr[i].toString() + "px";
        container.appendChild(bar);
    }
}

function random() {
    // exiting
    playingStatus = false; 
    let plyBtn = document.getElementById("ply");
    plyBtn.innerText = "Play";

    let container = document.getElementById("container");
    container.innerHTML = "";

    for (let i = 0; i < size; i++) {
        if (containerWidth > 500) {
            arr[i] = Math.random() * 500;
        }
        else {
            arr[i] = Math.random() * 150;
        }
    }
    createBars();
}


async function insertionSort() {
    var bars = document.getElementsByClassName('bar');
    let i;
    for (i = 1; i < size; i++) {
        // exiting from the funtion
        if (playingStatus == false) 
        {
            return;
        }
    
        // coloring key
        bars[i].style.backgroundColor = "#FF4949";

        await new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, 600)
        });

        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            // swap
            arr[j + 1] = arr[j];
            // coloring bars in every pass
            bars[j + 1].style.backgroundColor = "blue";
            await new Promise((resolve) => {
                setTimeout(() => {
                    resolve();
                }, 600);
            })
            //interchanging bars height	
            bars[j + 1].style.height = `${arr[j + 1]}px`;
            // returning color
            bars[j + 1].style.backgroundColor = "black";
            j--;
        }
        arr[j + 1] = key;
        // coloring the new position of key
        bars[j + 1].style.backgroundColor = "#FF4949";
        await new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, 600);
        })
        bars[j + 1].style.height = `${arr[j + 1]}px`;
        // returning color
        bars[j + 1].style.backgroundColor = "black";
    }

    let plyBtn = document.getElementById("ply");
    plyBtn.innerText = "Play";
}

// play function
function play() {
    let plyBtn = document.getElementById("ply");
    if (plyBtn.innerText == "Play") {
        playingStatus = true;
        insertionSort();
        plyBtn.innerText = "Stop";
    }
    else {
        playingStatus = false;
        plyBtn.innerText = "Play";
    }
}

// main
random()