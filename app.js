document.getElementById('generateBtn').addEventListener('click', function () {
    const randomNum = Math.floor(1000 + Math.random() * 9000);

    const generatePin = document.getElementById('generatePin');
    generatePin.value = randomNum;
})

document.querySelector('.calc-body').addEventListener('click', function (e) {
    const calNumber = e.target.innerText;
    const calInput = document.getElementById('calInput');

    if (isNaN(calNumber)) {
        if (calNumber == 'C') {
            calInput.value = '';
        }
    } else {
        calInput.value += calNumber;
    }
})

function submit() {
    let pin = document.getElementById('generatePin');
    let calInput = document.getElementById('calInput');

    if (pin.value == calInput.value && calInput.value != '') {
        document.querySelector('.correct-pin').style.display = 'block';
        document.querySelector('.wrong-pin').style.display = 'none';
        document.getElementById('submitBtn').style.display = 'none';
        document.querySelector('.action-left').style.display = 'none';
    } else {
        document.querySelector('.wrong-pin').style.display = 'block';
        document.querySelector('.correct-pin').style.display = 'none';
        document.querySelector('.action-left').style.display = 'block';
        document.querySelector('.action-left').style.display = 'block';
    }
    calInput.value = '';
    pin.value = '';
}

document.getElementById('submitBtn').addEventListener('click', submit)

document.querySelector('.wrong-pin').style.display = 'none';
document.querySelector('.correct-pin').style.display = 'none';
document.querySelector('.action-left').style.display = 'none';
