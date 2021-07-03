function mani() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      if (!response.ok) {
        throw Error("ERROR");
      }
      return response.json();
    })
    .then((data) => {
      const html = data
        .map((user) => {
          return `
                <p>Name: ${user.name}</p>
                <p>Email: ${user.email}</p>
                <button onclick="getPosts(${user.id})">Get User's post</button>    
             `;
        })
        .join("");
      document.querySelector(".user").insertAdjacentHTML("afterbegin", html);
    })
    .catch((error) => {
      console.log(error);
    });
}
mani();
function getPosts(id) {
  fetch(`http://jsonplaceholder.typicode.com/posts?userId=${id}`)
    .then((response) => response.json())
    .then((json) => {
      const content = json
        .map((post) => {
          return `
          <p>post title: ${post.title}</p>
          <p>post title: ${post.body}</p>
             `;
        })
        .join("");
      document.querySelector(".posts").innerHTML = content;
    });
}
