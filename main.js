{
    const todos = [];
    const tasks = [];
    const add = document.getElementById("add");
    const ul = document.getElementById("todolist");
    const text = document.getElementById("text");

    /*todosにshowtodosの内容をいれる*/
    add.addEventListener('click',() => {
        const input = text.value;
        text.value = "";
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
            const li = document.createElement("li");
            li.textContent = (`${index}　${todo}`);
            const working = document.createElement("button");
            working.textContent = ("作業中");
            working.className = "working"
            const dalet = document.createElement("button");
            dalet.textContent = ("削除")
            dalet.className = "dalet"
            li.appendChild(working)
            li.appendChild(dalet);
            ul.appendChild(li);
    
            dalet.addEventListener('click',() => {
                dalettodo(index);
            });
        });
    }
    /*削除ボタンの処理内容*/ 
    const dalettodo = (index) => {
        todos.splice(index,1);
        showTodos();
    };
    /*タスクの状態管理*/ 
    task = {
        const:'タスク',
        status:'作業中'
    }
    tasks.push(task);
    }
    