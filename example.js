function mani(){
    fetch("https://jsonplaceholder.typicode.com/users")
     .then(response =>{
         if(!response.ok) {
             throw Error("ERROR");

         }
         return response.json();
     })
     .then(data => {
         console.log(data.data);
         const html = data.data
           .map(user =>{
             return `
             <div class="user">
                 <p>Name: ${user.name}</p>
                 <p>Email: ${user.email}</p>
             </div>
             `;
         })
         .join("");
         document.querySelector("#app").insertAdjacentHTML("afterbegin",html);
     })
     .catch(error =>{
         console.log(error);
     });
}
mani();

// function fetchData(){
//      fetch('https://jsonplaceholder.typicode.com/users');
//     //console.log("Start Fetch");
// }
// fetchData();