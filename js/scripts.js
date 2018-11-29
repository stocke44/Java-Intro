// // const title = document.querySelector('#title');

// // title.innerHTML = '<hi>My Page Title<h1>';

// const title = document.createElement('h1');
// title.textContent = 'Our title';
// // document.body.appendChild(title);

// const list = document.createElement('ul');

// // document.body.appendChild(list);

// const cat1 = document.createElement('li');
// cat1.textContent ='s3qnson';
// cat1.dataset.id =1;
// cat1.dataset.title ='celestia';
// const cat2 = document.createElement('li');

// cat2.textContent ='ron';

// const cat3 = document.createElement('li');

// cat3.textContent ='tupac';

// list.append(cat1,cat2,cat3);
// const js = document.querySelector('script');
// document.body.insertBefore(title,js);

// document.body.insertBefore(list,title);

// const button = document.createElement('button');
// button.textContent= 'submit';
// button.id = 'my-button';
// button.className= 'btn btn-success';
// button.classList.replace('btn-success','btn-info');
// document.body.appendChild(button);

// title.classList.add('text-center');

// // button.classList.remove('btn-info');
// button.addEventListener('click', () => {
//     title.classList.toggle('hidden');
// })

// // button.setAttribute = ('disabled',true);
// // button.removeAttribute('disabled');


// const title = document.createElement('h1');
// title.textContent = 'Hello World!'
// title.classList.add('text-center');
// document.body.appendChild(title);

// const message = document.createElement('p');
// message.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
// message.classList.add('col-md-6');
// message.classList.add('offset-md-3');
// document.body.appendChild(message);


// const button = document.createElement('button');
// button.textContent='Contact';
// document.body.appendChild(button);
// document.body.insertBefore(button,title);
// button.className='float-right';

// const button2 = document.createElement('button');
// button2.textContent='About';
// button2.className='float-right';
// document.body.appendChild(button2);
// document.body.insertBefore(button2,button);

// const button3 = document.createElement('button');
// button3.textContent='Home';
// document.body.appendChild(button3);
// document.body.insertBefore(button3,title);
function fizzbuzz(min,max){
    const list = document.createElement('ul');
    document.body.appendChild(list);
    for (let min= 1; min<=max;min++){
        
        const val = document.createElement('li');
        if(min%15===0){
            val.textContent=`${min} fizzbuzz`;
        }else if (min%3===0){
            val.textContent=`${min} buzz`;
        }else if(min%5===0){
            val.textContent=`${min} buzz`;
        }else{
            val.textContent=`${min}`;
        }
        list.appendChild(val);   
    }
    
}




fizzbuzz(1,100);

// function createItem ( i,str){
//     const p = document.createElement('p');
//     str ?   p.textContent = `${i} ${str}`: p.textContent = i;
//     document.body.appendChild(p);  
// }
















































































