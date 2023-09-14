function empty(){
    function removeAllChildNodes(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }
    removeAllChildNodes(document.getElementsByClassName('containder1')[0]);
    removeAllChildNodes(document.getElementsByClassName(`item1`)[0]);
    removeAllChildNodes(document.getElementsByClassName(`container2`)[0])
}
let flag=0;
 document.getElementById('enter').addEventListener('click',()=>{

     no_floors = document.getElementById('fl').value;
     n_FLifts = document.getElementById('lif').value;
    //  empty();
    let currposition = [];
    for (let i = 0; i < n_FLifts; i++) {
        currposition.push(1);
    }
     // adding elements --------------------------------------------------------------
    for (let i = 1; i <= n_FLifts; i++) {
        let html = `<div class="item">
    <div class="lift" id="lift${n_FLifts - i + 1}">
        <p class="index">1</p>
    </div>
</div>`
        document.getElementsByClassName('container1')[0].insertAdjacentHTML("afterbegin", html);
    }
    for (let i = 1; i <= no_floors; i++) {
        let html = `<div class="floor">
                        <span>${i}</span>
                        <button id="floor${i}_1">Up</button>
                        <button id="floor${i}_2">Down</button>
                    </div>`
        document.getElementsByClassName(`item1`)[0].insertAdjacentHTML('afterbegin', html);
    }
    for (let i = 1; i <= n_FLifts; i++) {
        let html = `<label class="switch">
                    <input id="switch${n_FLifts - i + 1}" type="checkbox">
                    <span class="slider round"></span>
                </label>`
        document.getElementsByClassName(`container2`)[0].insertAdjacentHTML('afterbegin', html);
    }
    // lets add event listner---------------------------------
    let marginArr = [];
    let count = 0;
    for (let i = 0; i < no_floors; i++) {
        marginArr[i] = count;
        count += 100;
    }
    for (let i = 1; i <= n_FLifts; i++) {
        document.getElementById(`lift${i}`).style.marginTop = `${marginArr[no_floors - 1]}px`;
    }
    // console.log(marginArr);
    marginArr.reverse();
    for (let i = 1; i <= no_floors; i++) {
        document.getElementById(`floor${i}_1`).addEventListener('click', () => {
            let index = -1;
            let search = i;
            let diff = 999;
            for (let j = 0; j < currposition.length; j++) {
                if (Math.abs(currposition[j] - search) < diff && currposition[j] !== -1) {
                    diff = Math.abs(currposition[j] - search);
                    index = j + 1;

                }
            }
            currposition[index - 1] = search;
            console.log(index);
            console.log(diff);

            setTimeout(delay, diff * 0.6 * 1000);
            function delay() {
                document.getElementsByClassName('index')[index - 1].textContent = i;
            }
            document.getElementById(`lift${index}`).style.marginTop = `${(marginArr[i - 1])}px`;
            document.getElementById(`lift${index}`).style.transition = `${diff * 0.7}s`;
        })
        document.getElementById(`floor${i}_2`).addEventListener('click', () => {
            let index = -1;
            let search = i;
            let diff = 999;
            for (let j = 0; j < currposition.length; j++) {
                if (Math.abs(currposition[j] - search) < diff && currposition[j] !== -1) {
                    diff = Math.abs(currposition[j] - search);
                    index = j + 1;

                }
            }
            currposition[index - 1] = search;
            console.log(index);
            console.log(diff);
            setTimeout(delay, diff * 0.6 * 1000);
            function delay() {
                document.getElementsByClassName('index')[index - 1].textContent = i;
            }
            document.getElementById(`lift${index}`).style.marginTop = `${(marginArr[i - 1])}px`;
            document.getElementById(`lift${index}`).style.transition = `${diff * 0.7}s`;
        })
    }
    // Maintaince
    for (let i = 1; i <= n_FLifts; i++) {
        document.getElementById(`switch${i}`).addEventListener('click', () => {
            if (document.getElementById(`switch${i}`).checked) {
                currposition[i - 1] = -1;
                document.getElementById(`lift${i}`).style.border = '2px solid red';
            }
            else {
                currposition[i - 1] = 1;
                document.getElementById(`lift${i}`).style.border = '1px solid black'
            }
        })
    }
})