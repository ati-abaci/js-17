function todoList(todos) {
  // Write your code here...
  const theContentDiv=document.querySelector("#content");
  const ul=document.createElement("ul");

  function lineThrough(event) {
    const li = event.target;  //ال آی انتخابی را توی کانست ال آی میریزیم
    if (li.style.textDecoration === "line-through") {
      li.style.textDecoration = "none"; 
    } else {
      li.style.textDecoration = "line-through";
    }
  }

  todos.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item.todo;
    li.addEventListener("click", lineThrough);
    ul.appendChild(li);
  });

  theContentDiv.appendChild(ul);
  
}

const todos = [
  {todo: "wash the dishes"}, 
  {todo: "walk the dog"}, 
  {todo: "learn javascript"}, 
  {todo: "go shopping"}
];

todoList(todos);