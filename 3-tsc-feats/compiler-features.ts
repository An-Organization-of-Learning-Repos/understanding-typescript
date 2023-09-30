let appId = "abc";
const button = document.querySelector("button");

// have to return something if no implicit return is set
// function add34234(n1: number, n2: number) {
//   if (n1 + n2 > 0) {
//     return n1 + n2;
//   }
// }

// unusued arguments are not ok when noUnusedParameters is set to true
function clickHandler(message: string, age: number) {
  // unusued variables are not ok when noUnusedParameters is set to true
  let userName = "BigMax";
  console.log(userName + " " + "Clicked! " + message + " " + age);
}

button &&
  button.addEventListener("click", () => {
    clickHandler("Click is an underrated movie", 21);
  });
