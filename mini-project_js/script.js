// В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html,
// котра має детальну інфорацію про об'єкт на який клікнули

let container = document.createElement('div');
container.classList.add ('userContainer');
document.body.appendChild(container);

 fetch('https://jsonplaceholder.typicode.com/users')
     .then(response => response.json())
     .then(users =>{
      for (const user of users) {
       let block = document.createElement('div');
       block.classList.add('userBlock');
       block.innerText = `${user.id} ${user.name}`;

       let a = document.createElement('a');
       a.href = `user-details.html?id=${user.id}`;
       a.innerText = 'user info';
       a.classList.add ('infoLink');
       block.appendChild(a);
       container.appendChild(block);
      }
     });




