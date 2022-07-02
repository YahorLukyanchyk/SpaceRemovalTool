const emptyValue = '';

function spaceRemoval(){
    let inputData = document.getElementById('textarea1').value;
    let outputData = inputData.replaceAll(' ', '');
    let textarea2 = document.getElementById('textarea2');
    textarea2.value = outputData;
}

function clearValues(){
    let textarea1 = document.getElementById('textarea1');
    let textarea2 = document.getElementById('textarea2');
    textarea1.value = emptyValue;
    textarea2.value = emptyValue;
}



document.querySelector('.run').addEventListener('click', spaceRemoval);
document.querySelector('.clear').addEventListener('click', clearValues);
console.log('Space Removal Script Is Loaded!');