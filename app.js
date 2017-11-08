function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
 const toDoList = document.getElementById('toDoList');

 addToDoForm.addEventListener('submit', (e) => {
//prevents the page from reloading
    e.preventDefault();

    //get the text
    let title = newToDoText.value

    //clears out newToDoText
    newToDoText.value = '';

    //create a new li
    let newLi = document.createElement('Li');

    //set the title
    newLi.textContent = title;


    //create a new input
    let checkbox = document.createElement('input');

    //set the input's type to checkbox
    checkbox.type = "checkbox";

    //create a new input
    let button = document.createElement('button');

    //set the input's type to checkbox
    button.textContent = "remove";


    //attach the checkbox to the li
    newLi.appendChild(checkbox);

    //attach the button to the li
    newLi.appendChild(button);


    //places newli into toDoList
    toDoList.appendChild(newLi);


  });

 toDoList.addEventListener('click', (e) => {
   if(e.target.tagName === 'BUTTON'){
   const li = e.target.parentNode;
   const ul = li.parentNode;
   toDoList.removeChild(li);
 }
});


}



window.onload = function() {
  onReady();
};
