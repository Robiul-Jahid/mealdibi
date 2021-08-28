fetch('https://jsonplaceholder.typicode.com/todos')
.then(res => res.json())
.then(data => loadData(data));

const loadData = titles =>{
  const section = document.getElementById('load');
  // for(const title of titles){
  //   const div = document.createElement('div');
  //   div.innerText = `Title: ${title.title}`
  //   section.appendChild(div)

  titles.forEach(title => {
    const div = document.createElement('div');
    div.innerText = `Title: ${title.title}`
    section.appendChild(div)
  });
  }
