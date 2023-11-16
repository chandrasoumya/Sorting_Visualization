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
    // exiting from playing condition
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


async function selectionSort() {
    let smallest, temp;
    var bars = document.getElementsByClassName('bar');
    for (let i = 0; i < size - 1; i++) {
        // exiting from the funtion
        if (playingStatus == false) 
        {
            return;
        }

        smallest = i;
        // changing color of i th bar
        bars[i].style.backgroundColor = '#FF4949';

        await new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, 600);
        })

        for (let j = i + 1; j < size; j++) {
            if (arr[smallest] > arr[j]) {
                smallest = j;
            }
        }
        await new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, 100);
        })
        if (smallest != i) {
            // changing color of smallest bar
            bars[smallest].style.backgroundColor = '#FF4949';

            await new Promise((resolve) => {
                setTimeout(() => {
                    resolve();
                }, 600);
            })

            //swap animate
            bars[i].style.height = `${arr[smallest]}px`;
            bars[smallest].style.height = `${arr[i]}px`;

            // swap
            temp = arr[smallest];
            arr[smallest] = arr[i];
            arr[i] = temp;

        }
        // returning color of i th bar
        bars[i].style.backgroundColor = 'black';
        // returning color of smallest bar
        bars[smallest].style.backgroundColor = 'black';

    }

    let plyBtn = document.getElementById("ply");
    plyBtn.innerText = "Play";
}

// play function
function play() {
    let plyBtn = document.getElementById("ply");
    if (plyBtn.innerText == "Play") {
        playingStatus = true;
        selectionSort();
        plyBtn.innerText = "Stop";
    }
    else {
        playingStatus = false;
        plyBtn.innerText = "Play";
    }
}

// main
random();






