'use static';

const init = () => {
    document.querySelector('form').addEventListener('submit', addToDo);
    document.getElementById('delete').addEventListener('click', deleteToDoText);
    document.querySelector('ul').addEventListener('click', delteToDo);
};

const todoList = document.getElementsByClassName('todolist');

//생성 기능
const addToDo = (e) => {
    e.preventDefault();
    //사용자가 입력하는 TO DO Value
    let toDoValue = document.querySelector('input');
    if(toDoValue.value !== '') {
        //LIST에 넣어주기
        addToDoList(toDoValue.value);
        //SCROLL 고정
        todoList.scrollTop = todoList.scrollHeight;
        toDoValue.value = ''; 
    }
};

//시간 출력
const dgt = (base) => {
    //한 자리수인 경우, 0도 함께 출력
    return (base > 9 ? base : `0${base}`)
};

const addToDoList = (value) => {
    let ul = document.querySelector('ul');
    let li = document.createElement('li');

    //Date 객체 사용
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();

    //checkbox, value, delete 
    li.innerHTML = `<span class="delete">DEL</span><input type="checkbox"><label>${value}
    <span class="time">${dgt(hours)}:${dgt(minutes)}:${dgt(seconds)}</span></label>`;

    ul.appendChild(li);
    document.querySelector('.todolist').style.display = 'block';
};

//삭제 기능
const delteToDo = (e) => {
    if(e.target.className == 'delete')  
    //Delete All 실행
    deleteAllToDo(e);
    else {
        //글씨에 밑줄 표시
        completeToDo(e); 
    }
};

const deleteAllToDo = (e) => {
    //Delete All 기능
    let remove = e.target.parentNode;
    let parentNode = remove.parentNode;
    //부모와 자식 노드를 끊어 삭제
    parentNode.removeChild(remove);
};

const deleteToDoText = (e) => {
    //Del 기능
    let ul = document.querySelector('ul').innerHTML = '';
};

//완료 기능
const completeToDo = (e) => {
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