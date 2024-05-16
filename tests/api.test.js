// const data = null;

// const xhr = new XMLHttpRequest();
// xhr.withCredentials = true;

// xhr.addEventListener("readystatechange", function () {
//   if (this.readyState === this.DONE) {
//     console.log(this.responseText);
//   }
// });

// xhr.open("GET", "https://bookstore.demoqa.com/Account/v1/User/1?=");
// xhr.setRequestHeader("User-Agent", "insomnia/9.1.1");

// xhr.send(data);
;(async function main() {
  const response = await fetch('https://reqres.in/api/users2', {
    method: 'DELETE',
  })
  console.log('Staus: ', response.status)
  // const data = await response.json()
  // console.log(data)
})()
;(async function main() {
  const response = await fetch('https://reqres.in/api/users?page=2', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'User-Agent': 'insomnia/9.1',
    },
    body: '{"userName":"User","password":"Aasdasd_!23123"}',
  })
  console.log('Staus: ', response.status)
  const data = await response.json()
  console.log(data)
})()
