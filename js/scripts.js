const toDo1 = prompt('Whats the first task you need to complete?');
const toDo2 = prompt('Whats the second task you need to complete?');
const toDo3 = prompt('Whats the third task you need to complete?');

const taskList = [toDo1,toDo2,toDo3];


for(let i =0;i<taskList.length;i++){
    
    taskList.splice(i,1,[taskList[i], Math.floor(Math.random() * 100)]);
    console.log(taskList[i]);
}
let biggerDay = taskList[0][1];
let num = 0;
let tracker = 0;
while(taskList[num]){
    if(taskList[num][1]>biggerDay){
        tracker = num;
        biggerDay = taskList[num][1];
    }
    num++;
}
console.log(taskList[tracker][0]);

let i =0;
do{
    if (taskList[i][1]<taskList[tracker][1]){
        taskList[i].splice(2,0,'easypeasy') ;
    }
    i++;
}while(taskList[i]);

alert(taskList);

for(let task of taskList){
    console.log(task);
    console.log(task.length);
    if(task.length == 3){
        alert(task);
    }
}