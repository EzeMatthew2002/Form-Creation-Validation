let dataContainer = document.getElementById("api-data");
const userList = document.createElement("ul");

async function fetchUserData() {
  const apiUrl = "https://jsonplaceholder.typicode.com/users";
  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`Your data failed to fetch. Status: ${response.status}`);
    }

    const users = await response.json();
    console.log(users);
    dataContainer.innerHTML = "";
    users.forEach((user) => {
      let li = document.createElement("li");
      li.innerHTML = `${user.name}`;
      userList.appendChild(li);
    });
    dataContainer.appendChild(userList);
  } catch (error) {
    console.error("Fetch error:", error);
    dataContainer.textContent = "Failed to load user data.";
    dataContainer.style.color = "red";
  }
}

document.addEventListener("DOMContentLoaded", fetchUserData);
