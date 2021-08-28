fetch('https://jsonplaceholder.typicode.com/posts')
.then(res => res.json())
  .then(data => displayData(data));

const displayData=(posts) => {
  const pickDiv = document.getElementById('div');
  for(const post of posts){
    const div = document.createElement('div');
    div.innerHTML = `
    <h3> ID: ${post.id}</h3>
    <h3> Title: ${post.title}</h3>
    <h3> Body: ${post.body}</h3>
    `
    div.classList.add('style1');
    pickDiv.appendChild(div);
  }
}