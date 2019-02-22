// Get local text file
const getText = () => {
   fetch('test.txt')
   .then(function(res){
      return res.text();
   })
   .then(function(data){
      console.log(data);
      document.getElementById('output').innerHTML = data;
   })
   .catch(function(err){
      console.log(err);
   })
}

//get local json data
const getJson = () => {
   fetch('posts.json')
   .then(function(res){
      return res.json();
   })
   .then(function(data){
      console.log(data);
      let output = '';
      data.forEach(post => {
         output += `<li>${post.title}</li>`;
      });
      document.getElementById('output').innerHTML = output;
   })
   .catch(function(err){
      console.log(err);
   })
}

//Get from external API
const getApi = () => {
   fetch('https://api.github.com/users')
   .then(function(res){
      return res.json();
   })
   .then(function(data){
      console.log(data);
      let output = '';
      data.forEach(user => {
         output += `<li>${user.login}</li>`;
      });
      document.getElementById('output').innerHTML = output;
   })
   .catch(function(err){
      console.log(err);
   })
}

document.getElementById('button1').addEventListener('click', getText);

document.getElementById('button2').addEventListener('click', getJson);

document.getElementById('button3').addEventListener('click', getApi);