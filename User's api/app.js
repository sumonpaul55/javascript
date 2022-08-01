document.getElementById("submitBtn").addEventListener("click", function () {
  const countAmount = document.getElementById("input").value;
  let count = parseInt(countAmount);
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => {
      data = data.slice(0, count);
      const usercontainer = document.getElementById("user");
      usercontainer.innerHTML = "";
      for (let i = 0; i < data.length; i++) {
        const users = data[i];
        const p = document.createElement("p");
        p.innerHTML = ` Name 
            <strong> ${users.name} <button onclick="getUserDetails(${users.id})">Get Details - ${users.id}</button></strong>
          `;
        usercontainer.appendChild(p);
      }
    });
});

function getUserDetails(userId) {
  fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then((res) => res.json())
    .then((data) => {
      const detail = document.getElementById("userdetail");
      detail.innerHTML = `<h1>${data.name}</h1>
      <h3>${data.email}</h3>
      <h5>${data.phone}</h5>
      <h5>${data.company.name}</h5>
      `;
    });
}
