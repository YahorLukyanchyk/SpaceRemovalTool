const emptyValue = '';

function clearValues(){
    let textarea1 = document.getElementById('textarea1');
    let textarea2 = document.getElementById('textarea2');
    textarea1.value = emptyValue;
    textarea2.value = emptyValue;
}

document.querySelector('.clear').addEventListener('click', clearValues);

console.log('Clear Values Script Is Loaded!');