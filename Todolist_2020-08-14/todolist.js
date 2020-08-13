
const input = document.getElementById('userInput');
const enter = document.getElementById('enter');
const ul = document.querySelector('ul');

function addTodo() {
    const li = document.createElement('li');
    if(input.value !== "") {
        li.appendChild(document.createTextNode(input.value));
        ul.append(li);
    }

    input.value = "";

    function crossOut() {
		li.classList.toggle("done");
	}
    li.addEventListener("click", crossOut);
    
    const xbtn = document.createElement('button');
    xbtn.appendChild(document.createTextNode('X'));
    li.appendChild(xbtn);
    xbtn.addEventListener('click', deleteTodo);

    function deleteTodo() {
        li.classList.add('delete');
    }
}

enter.addEventListener('click', addTodo);