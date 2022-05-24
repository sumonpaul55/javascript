const user = {
  id: 448,
  name: "Sourav paul",
  friendsId: 468,
  broname: "someone else",
  age: 48,
  others: ["Sumon paul", "other name", "another name"],
};

// const convertjson = JSON.stringify(user);
// console.log(convertjson);
// const jsontoobject = JSON.parse(convertjson);
// console.log(jsontoobject);

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((json) => displayuser(json))

//   //if the link has no data we can catch erorr
//   .catch((err) => console.log(err));

// let ul = document.getElementById("showhere");

// const displayuser = (user) => {
//   let usernames = user.map((users) => users.username);

//   usernames.map((elmt) => {
//     let perelmnt = elmt;
//     let li = document.createElement("li");
//     li.innerText = perelmnt;
//     ul.appendChild(li);
//   });
// };
//============================================= method post
document.getElementById("submit").addEventListener("click", () => {
  let postTitle = document.getElementById("title").value;
  let postbody = document.getElementById("post-body").value;
  const post = { title: postTitle, body: postbody };
  posttoserver(post);
});

const posttoserver = (postinfo) => {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(postinfo),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
};
