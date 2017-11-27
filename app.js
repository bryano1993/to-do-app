function onReady() {
  let id = 0; //adding a new var id = 0;
  const toDos = []; // our state will be an array of to-dos
  const addToDoForm = document.getElementById('addToDoForm');// we are obtaining the addToDoForm id and adding it to the variable addToDoForm

  function createNewToDo() { // a way to change the state. This function will update our array of to-dos
    const newToDoText = document.getElementById('newToDoText');// This will enable us to access text input  so that we can get the text for the  title of each to-do
    if (!newToDoText.value) { // This prevents the to do app from having the user submit empty to-do items.
        return; }

      toDos.push({ // This will add the new to-dos to the toDos array
       title: newToDoText.value,// we are using object literal notation to declare what we want each to-do object to be.
       complete: false, // we assign the value of text input, newToDoText to the title key.
       id: id
     });

     id ++; //incrementing the id

    newToDoText.value = ''; // this clears the text input for the user

    renderTheUI(); // we call the renderTheUI function. Now when the page loads, it will  immediately render the initial UI, with the event listener listening for a submit event from the form.
    // We call this function every time the state changes. The only time the state changes is when we add a new to-do using the createNewToDo() function
  }


  addToDoForm.addEventListener('submit', event => { // we add an event listener
    event.preventDefault(); // This will prevent the page from reloading
    createNewToDo(); // We call the createNewToDo() function
    renderTheUI();

  });

  function renderTheUI(){ // We create the User Interface. This will render the UI based on the current state. renderTheUI() will take our current state (the toDos array) and render the UI
// when app first loads we want to display initial state which is an empty text input and button.
    const toDoList = document.getElementById('toDoList');// This is how we will access the ul.

    toDoList.textContent = ''; // This will set newLi to an empty String


    toDos.forEach(function(toDo){ // We use the array method called forEach() which takes a function and applies that function to each item in the array. Using  forEach is how we'll render each to-do as a li in the ul.
    //The function we pass to forEach() will need to do three things:
      //Create the UI we need for each to-do (the li and checkbox).
      //Assign the toDo's title text to the li.
      //Update the DOM with the li and checkbox.
      const newLi = document.createElement('li'); // Here we create the li
      const checkbox = document.createElement('input'); // Here we create the checkbox
      const button = document.createElement('button')// Here we create a delete buton
      button.textContent = "remove";// set the input's type to checkbox.

      newLi.textContent = toDo.title; //Here we add the toDo's title text to newLi
      button.type = "button"; // This will set the button to type button
      button.onclick = () => { // returns the click event handler code on the current element.
        toDos.filter(function (piece) {
          if ( toDo.id === piece.id ) { // if piece.id and toDo.id are equal to each others data type then remove a li element from the toDoList
            toDoList.removeChild(newLi);

        }});
      };
      checkbox.type = "checkbox"; //This will set the checkbox to type checkbox
      toDoList.appendChild(newLi);// This updates the DOM
      newLi.appendChild(checkbox);// This updates the DOM
      newLi.appendChild(button); // This updates the DOM




    });
  }

}



window.onload = function() {
  onReady();
};
