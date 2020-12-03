{
    const todos = [];
    const add = document.getElementById('add');
    const ul = document.getElementById('todolist');
    const text = document.getElementById('text');
    const deletebtn = document.createElement('button');
    const workingbtn = document.createElement('button');

    /*todosにshowtodosの内容をいれる*/
    add.addEventListener('click',() => {
        const input = text.value;
        text.value = '';
        if(input){
          todos.push(input);
          showTodos();
        }
    });
    /*todos表示する*/
    const showTodos = () => {
        while(ul.firstChild){
            ul.removeChild(ul.firstChild);
        }
        todos.forEach((todo,index)=>{
            const li = document.createElement('li');
            li.textContent = (`${index}　${todo}`);
            workingaction();
            daleteaction();
            li.appendChild(workingbtn)
            li.appendChild(deletebtn);
            ul.appendChild(li);
            deletebtn.addEventListener('click',() => {
            dalettodo(index);
            });
        });
    }
    /*タスクの状態管理*/ 
    task = {
        const:'タスク',
        status:'作業中'
    }
    tasks.push(task);

    const daleteaction = function(){
        deletebtn.textContent = ('削除');
        deletebtn.className = ('delete')
    };
    const workingaction = function(){
        workingbtn.textContent = ('作業中');
            workingbtn.className = 'working'
    }
}
    