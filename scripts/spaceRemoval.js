function spaceRemoval(){
    let inputData = document.getElementById('textarea1').value;
    let outputData = inputData.replaceAll(' ', '');
    let textarea2 = document.getElementById('textarea2');
    textarea2.value = outputData;
}

document.querySelector('.run').addEventListener('click', spaceRemoval);

console.log('Space Removal Script Is Loaded!');
