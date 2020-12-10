{
    const todos = [];
    const add = document.getElementById('add');
    const ul = document.getElementById('todolist');
    const text = document.getElementById('text');

    /*todosにshowtodosの内容をいれる*/
    add.addEventListener('click',() => {
        const input = text.value;
        input.value = '';
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
            const deletebtn = document.createElement('button');
            const workingbtn = document.createElement('button');
            const task = {
                content:'タスク',
                status:'作業中'
              }
            li.textContent = (`${index}　${todo}`);
            workingaction(workingbtn);
            daleteaction(deletebtn);
            li.appendChild(workingbtn);
            li.appendChild(deletebtn);
            ul.appendChild(li);
            deletebtn.addEventListener('click',() => {
            dalettodo(index);
            todos.push(task);
            });
        });
    }

    const daleteaction = function(deletebtn){
        deletebtn.textContent = ('削除');
        deletebtn.className = ('delete')
    };
    const workingaction = function(workingbtn){
        workingbtn.textContent = ('作業中');
        workingbtn.className = 'working'
    }
}