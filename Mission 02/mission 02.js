'use static';

const init = () => {
    document.querySelector('form').addEventListener('submit', AddToDo);
    document.getElementById('delete').addEventListener('click', DeleteToDoText);
    document.querySelector('ul').addEventListener('click', DelteToDo);
};

//생성 기능
const AddToDo = (e) => {
    e.preventDefault();
    //사용자가 입력하는 TO DO Value
    let toDoValue = document.querySelector('input');
    if(toDoValue.value !== '')
    //LIST에 넣어주기
        AddToDoList(toDoValue.value);
        toDoValue.value = ''; 
};

const AddToDoList = (value) => {
    let ul = document.querySelector('ul');
    let li = document.createElement('li');
        //checkbox, value, delete 
    li.innerHTML = `<span class="delete">DEL</span><input type="checkbox"><label>${value}</label>`;
    ul.appendChild(li);
    document.querySelector('.todolist').style.display = 'block';
};


//삭제 기능
const DelteToDo = (e) => {
    if(e.target.className == 'delete')  
    //Delete All 실행
    DeleteAllToDo(e);
    else {
        //글씨에 밑줄 표시
        CompleteToDo(e); 
    }
};

const DeleteAllToDo = (e) => {
    //Delete All 기능
    let remove = e.target.parentNode;
    let parentNode = remove.parentNode;
    //부모와 자식 노드를 끊어 삭제
    parentNode.removeChild(remove);
};

const DeleteToDoText = (e) => {
    //Del 기능
    let ul = document.querySelector('ul').innerHTML = '';
};

//완료 기능
const CompleteToDo = (e) => {
    const todo = e.target.nextSibling;
    //체크박스에 체크를 하면,
    if(e.target.checked){
        //색 변화
        todo.style.color = "#e4e4e4";
        todo.style.textDecorationLine = "line-through"
    }else {
        todo.style.color = "#000000";
        todo.style.textDecorationLine = ""
    }
};

init();