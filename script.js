const fetchData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log(data);
  return data;
};
const val = fetchData();
val.then((val) => {
  let values = "";
  val.map((val) => {
    values += `<div class="card">   
          <h6><b>Name: ${val.name}</b></h6>
          <p>Email: ${val.email}</p>
          <p>Street: ${val.address.street}</p>
          <p>City: ${val.address.city}</p>
  </div>`;
  });
  document.getElementById("root").innerHTML = values;
});
