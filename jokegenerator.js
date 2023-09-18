const jokeBtn = document.querySelector("button");

function generateJoke() {
  const xhrJoke = new XMLHttpRequest();
  xhrJoke.open("get", "https://api.chucknorris.io/jokes/random");
  xhrJoke.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const data = JSON.parse(this.responseText);
      const jokeDiv = document.getElementById("joke");
      jokeDiv.innerHTML = data.value;
    } else {
      const jokeDiv = document.getElementById("joke");
      jokeDiv.innerHTML = "somthing went wrong";
    }
  };
  xhrJoke.send();
}
jokeBtn.addEventListener("click", generateJoke);
document.addEventListener("DOMContentLoaded", generateJoke);
