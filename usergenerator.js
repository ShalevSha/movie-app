const switchUserBtn = document.querySelector("button");

function fetchUser() {
  fetch("https://randomuser.me/api")
    .then((res) => {
      if (!res.ok) {
        throw new Error("this is an error in line 7");
      }
      return res;
    })
    .then((res) => res.json())
    .then((data) => {
      displayUser(data.results[0]);
    })
    .catch((error) => {
      console.log(error);
      document.querySelector(".container").innerHTML = error;
    });
}

function displayUser(data) {
  if (data.gender == "male") {
    document.body.style.backgroundColor = "blue";
  } else {
    document.body.style.backgroundColor = "palevioletred";
  }
  const name = data.name.first + " " + data.name.last;
  const nameSpan = document.getElementById("name");
  nameSpan.textContent = name;

  const email = data.email;
  const emailSpan = document.getElementById("email");
  emailSpan.textContent = email;

  const phone = data.phone;
  const phoneSpan = document.getElementById("phone");
  phoneSpan.textContent = phone;

  const location = data.location.country + ", " + data.location.city;
  const locationSpan = document.getElementById("location");
  locationSpan.textContent = location;

  const age = data.dob.age;
  const ageSpan = document.getElementById("age");
  ageSpan.textContent = age;

  const img = data.picture.large;
  const imgSpan = document.querySelector(".col-left");
  imgSpan.innerHTML = '<img src="' + img + '" alt="">';
}

fetchUser();
switchUserBtn.addEventListener("click", fetchUser);
