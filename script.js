async function person() {
  try{  
  let response = await fetch("https://jsonplaceholder.typicode.com/users");
  if(!response.ok) throw new Error("Data not available in source.");
  let data = await response.json();
  console.log(data)
}
catch(error){
  console.error("NO DATA : " , error.message)
}

}

person();
