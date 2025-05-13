let todoList =[
  {
    item:'Buy Milk', 
    dueDate: '4/10/2023'
  },
  {
    item:'Go To College', 
    dueDate: '4/10/2023'
  },
];
displayItems();


function addtodo() {
  let inputElement = document.querySelector("#todo-input");
  let inputDate = document.querySelector("#todo-date");
  let todoItem = inputElement.value;
  let todoDate = inputDate.value;
  todoList.push({item: todoItem, dueDate: todoDate});
  inputElement.value='';
  inputDate.value='';
  displayItems();
}

function displayItems() {
  let containerElement = document.querySelector('.todo-container');

  let newHtml = '';
  for(let i=0;i<todoList.length;i++){
    let todoItem = todoList[i].item;
    let todoDate = todoList[i].dueDate;
    newHtml+=
    `
     <span>${todoItem}</span>
     <span>${todoDate}</span>
     <button class="btn-delete" onclick="todoList.splice(${i},1); displayItems();">Delete</button>
    `;
  }
  containerElement.innerHTML = newHtml;
   
}