let lift1El = document.getElementById('lift1');
let lift2El = document.getElementById('lift2');
let lift3El = document.getElementById('lift3');

let index1El = document.getElementsByClassName('lift')[0];
let index2El = document.getElementsByClassName('lift')[1];
let index3El = document.getElementsByClassName('lift')[2];



// total no. of floors 
let floor5El_1 = document.getElementById('floor5_1');
let floor5El_2 = document.getElementById('floor5_2');

let floor4El_1 = document.getElementById('floor4_1');
let floor4El_2 = document.getElementById('floor4_2');

let floor3El_1 = document.getElementById('floor3_1');
let floor3El_2 = document.getElementById('floor3_2');

let floor2El_1 = document.getElementById('floor2_1');
let floor2El_2 = document.getElementById('floor2_2');

let floor1El_1 = document.getElementById('floor1_1');
let floor1El_2 = document.getElementById('floor1_2');

// floor 5-----------------------------------------------------------------------------------------
floor5El_1.addEventListener('click', () => {
    let index = -1
    let search = 5;
    let diff = 999;
    for (let i = 0; i < currposition.length; i++) {
        if (Math.abs(currposition[i] - search) < diff && currposition[i] !== -1) {
            diff = Math.abs(currposition[i] - search);
            index = i + 1;
        }
    }
    currposition[index - 1] = search;
    console.log(index);
    console.log(diff);
    setTimeout(delay, diff*0.6*1000);
    function delay() {
        document.getElementsByClassName('index')[index - 1].textContent = 5;
    }
    document.getElementById(`lift${index}`).style.marginTop = '0px';
    document.getElementById(`lift${index}`).style.transition = `${diff * 0.7}s`;
})
floor5El_2.addEventListener('click', () => {
    let index = -1
    let search = 5;
    let diff = 999;
    for (let i = 0; i < currposition.length; i++) {
        if (Math.abs(currposition[i] - search) < diff && currposition[i] !== -1) {
            diff = Math.abs(currposition[i] - search);
            index = i + 1;
        }
    }
    currposition[index - 1] = search;
    console.log(index);
    console.log(diff);
    document.getElementById(`lift${index}`).style.marginTop = '0px';
    document.getElementById(`lift${index}`).style.transition = `${diff * 0.7}s`;
    setTimeout(delay, diff * 0.6 * 1000);
    function delay() {
        document.getElementsByClassName('index')[index - 1].textContent = 5;
    }
})
// floor 4---------------------------------------------------------------
floor4El_1.addEventListener('click', () => {
    let index = -1
    let search = 4;
    let diff = 999;
    for (let i = 0; i < currposition.length; i++) {
        if (Math.abs(currposition[i] - search) < diff && currposition[i] !== -1) {
            diff = Math.abs(currposition[i] - search);
            index = i + 1;
        }
    }
    currposition[index - 1] = search;
    console.log(index);
    console.log(diff);
    document.getElementById(`lift${index}`).style.marginTop = '92px';
    document.getElementById(`lift${index}`).style.transition = `${diff * 0.7}s`;
    setTimeout(delay, diff * 0.6 * 1000);
    function delay() {
        document.getElementsByClassName('index')[index - 1].textContent = 4;
    }
})
floor4El_2.addEventListener('click', () => {
    let index = -1
    let search = 4;
    let diff = 999;
    for (let i = 0; i < currposition.length; i++) {
        if (Math.abs(currposition[i] - search) < diff && currposition[i] !== -1) {
            diff = Math.abs(currposition[i] - search);
            index = i + 1;
        }
    }
    currposition[index - 1] = search;
    console.log(index);
    console.log(diff);
    document.getElementById(`lift${index}`).style.marginTop = '92px';
    document.getElementById(`lift${index}`).style.transition = `${diff * 0.7}s`;
    setTimeout(delay, diff * 0.6 * 1000);
    function delay() {
        document.getElementsByClassName('index')[index - 1].textContent = 4;
    }
})
// floor 3------------------------------------------------------------------------------------
floor3El_1.addEventListener('click', () => {
    let index = -1
    let search = 3;
    let diff = 999;
    for (let i = 0; i < currposition.length; i++) {
        if (Math.abs(currposition[i] - search) < diff && currposition[i] !== -1) {
            diff = Math.abs(currposition[i] - search);
            index = i + 1;
        }
    }
    currposition[index - 1] = search;
    console.log(index);
    console.log(diff);
    document.getElementById(`lift${index}`).style.marginTop = '208px';
    document.getElementById(`lift${index}`).style.transition = `${diff * 0.7}s`;
    setTimeout(delay, diff * 0.6 * 1000);
    function delay() {
        document.getElementsByClassName('index')[index - 1].textContent = 3;
    }
})
floor3El_2.addEventListener('click', () => {
    let index = -1
    let search = 3;
    let diff = 999;
    for (let i = 0; i < currposition.length; i++) {
        if (Math.abs(currposition[i] - search) < diff && currposition[i] !== -1) {
            diff = Math.abs(currposition[i] - search);
            index = i + 1;
        }
    }
    currposition[index - 1] = search;
    console.log(index);
    console.log(diff);
    document.getElementById(`lift${index}`).style.marginTop = '208px';
    document.getElementById(`lift${index}`).style.transition = `${diff * 0.7}s`;
    setTimeout(delay, diff * 0.6 * 1000);
    function delay() {
        document.getElementsByClassName('index')[index - 1].textContent = 3;
    }
})
// floor 2---------------------------------------------------------------------------
floor2El_1.addEventListener('click', () => {
    let index = -1
    let search = 2;
    let diff = 999;
    for (let i = 0; i < currposition.length; i++) {
        if (Math.abs(currposition[i] - search) < diff && currposition[i] !== -1) {
            diff = Math.abs(currposition[i] - search);
            index = i + 1;
        }
    }
    currposition[index - 1] = search;
    console.log(index);
    console.log(diff);
    document.getElementById(`lift${index}`).style.marginTop = '308px';
    document.getElementById(`lift${index}`).style.transition = `${diff * 0.7}s`;
    setTimeout(delay, diff * 0.6 * 1000);
    function delay() {
        document.getElementsByClassName('index')[index - 1].textContent = 2;
    }
})
floor2El_2.addEventListener('click', () => {
    let index = -1
    let search = 2;
    let diff = 999;
    for (let i = 0; i < currposition.length; i++) {
        if (Math.abs(currposition[i] - search) < diff && currposition[i] !== -1) {
            diff = Math.abs(currposition[i] - search);
            index = i + 1;
        }
    }
    currposition[index - 1] = search;
    console.log(index);
    console.log(diff);
    document.getElementById(`lift${index}`).style.marginTop = '308px';
    document.getElementById(`lift${index}`).style.transition = `${diff * 0.7}s`;
    setTimeout(delay, diff * 0.6 * 1000);
    function delay() {
        document.getElementsByClassName('index')[index - 1].textContent = 2;
    }
})
// floor 1-------------------------------------------------------------------------------
floor1El_1.addEventListener('click', () => {
    let index = -1
    let search = 1;
    let diff = 999;
    for (let i = 0; i < currposition.length; i++) {
        if (Math.abs(currposition[i] - search) < diff && currposition[i] !== -1) {
            diff = Math.abs(currposition[i] - search);
            index = i + 1;
        }
    }
    currposition[index - 1] = search;
    console.log(index);
    console.log(diff);
    document.getElementById(`lift${index}`).style.marginTop = '418px';
    document.getElementById(`lift${index}`).style.transition = `${diff * 0.7}s`;
    setTimeout(delay, diff * 0.6 * 1000);
    function delay() {
        document.getElementsByClassName('index')[index - 1].textContent = 1;
    }
})
floor1El_2.addEventListener('click', () => {
    let index = -1
    let search = 1;
    let diff = 999;
    for (let i = 0; i < currposition.length; i++) {
        if (Math.abs(currposition[i] - search) < diff && currposition[i] !== -1) {
            diff = Math.abs(currposition[i] - search);
            index = i + 1;
        }
    }
    currposition[index - 1] = search;
    console.log(index);
    console.log(diff);
    document.getElementById(`lift${index}`).style.marginTop = '418px';
    document.getElementById(`lift${index}`).style.transition = `${diff * 0.7}s`;
    setTimeout(delay, diff * 0.6 * 1000);
    function delay() {
        document.getElementsByClassName('index')[index - 1].textContent = 1;
    }
})


let length = 1


// Add element by javascript-----------------------------------------------------------------------
let n_FLifts=3;
let currposition = [];
for (let i = 0; i < n_FLifts; i++) {
    currposition.push(1);
}
for(let i=1;i<=n_FLifts;i++){
    let html = `<div class="item">
    <div class="lift" id="lift${n_FLifts-i+1}">
        <p class="index">1</p>
    </div>
</div>`
    document.getElementsByClassName('container1')[0].insertAdjacentHTML("afterbegin", html);
}
// ----------------------------------------------Maintaince--------------------------
document.getElementById('switch1').addEventListener('click', () => {
    if (document.getElementById('switch1').checked) {
        currposition[0] = -1;
        // document.getElementById(`lift1`).style.marginTop = '418px';
        document.getElementById('lift1').style.border = '2px solid red'
        // document.getElementsByClassName('index')[0].textContent = 1;
    }
    else {
        currposition[0] = 1;
        document.getElementById('lift1').style.border = '1px solid black'
    }
    console.log(currposition)
})
document.getElementById('switch2').addEventListener('click', () => {
    if (document.getElementById('switch2').checked) {
        currposition[1] = -1;
        // document.getElementById(`lift2`).style.marginTop = '418px';
        document.getElementById('lift2').style.border = '2px solid red'
        // document.getElementsByClassName('index')[1].textContent = 1;
    }
    else {
        currposition[1] = 1;
        document.getElementById('lift2').style.border = '1px solid black'
    }
    console.log(currposition)
})
document.getElementById('switch3').addEventListener('click', () => {
    if (document.getElementById('switch3').checked) {
        currposition[2] = -1;
        // document.getElementById(`lift3`).style.marginTop = '418px';
        document.getElementById('lift3').style.border = '2px solid red'
        // document.getElementsByClassName('index')[2].textContent = 1;
    }
    else {
        currposition[2] = 1;
        document.getElementById('lift3').style.border = '1px solid black'
    }
    console.log(currposition)
})
