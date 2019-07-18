//const mainContent = document.getElementById('todoForm');
const mainContent = document.getElementById('parentDiv');
const clickNewTask = document.getElementById('addItemdiv');
const line = document.createElement('br');

//const newValue = document.getElementById('inputTaskdiv');



const addItem = document.getElementById('addItemdiv');

addItem.addEventListener('click', (event) => {
    handleClick();
    event.stopPropagation();
}, true);


function handleClick() {
 console.log('handle click ');

 const inputData = document.getElementById('inputTaskdiv').value;        
        const newElement = document.createElement('div');
        newElement.innerText = inputData;   
        newElement.className+='border';
        mainContent.appendChild(newElement);

    
    //localStorage.setItem('clicks', currentValue);
}