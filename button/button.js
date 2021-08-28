function displayUser (){
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => loadUser(data))
}

const loadUser =(users)=>{
  const ul = document.getElementById('comment-container');
  for(const user of users){
    const li = document.createElement('li')
    li.innerText = `
    Name : ${user.name}`
    ul.appendChild(li);
  };

}