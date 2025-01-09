async function person() {
  try{  
  let response = await fetch("https://jsonplaceholder.typicode.com/users");
  if(!response.ok) throw new Error("Data not available in source.");
  let data = await response.json();
  const container = document.getElementById("userContainer")
  data.forEach((user) => {
    const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
      <h3>${user.name}</h3>
      <p>Email : ${user.email}</p>
      <p>City : ${user.address.city}</p>
      <p>Phone :${user.phone}</p>
      `;
    container.appendChild(card);
  });
}
catch(error){
  console.error("NO DATA : " , error.message)
}

}

person();
