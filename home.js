const header = `
            <tr>
            <th>profilepic</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Deparment</th>
            <th>Salary</th>
            <th>Actions</th>
            </tr>            
            `;

var loadPage= async () =>{
  var table = document.querySelector('#table');
  var list = "";
  list =await GetRequest(null);//
  if(list != null){
      var contentRow = header;
      list.forEach(emp => {
          contentRow += `
          <tr id=${emp.id}>
          <td><img src=${emp.profilePic} style="width: 50px;"></td>
          <td>${emp.name}</td>
          <td>${emp.gender}</td>
          <td>${emp.department}</td>
          <td>${emp.salary}</td>
          <td>
      <img class="pointer" name="1" onclick="remove(${emp.id})" alt="delete"
          src="images/delete.png">
      <img name="1"  alt="edit" onclick="update('${emp.id}')"
          src="images/edit.png">
      </td>
          </tr>
          `;
      });
      table.innerHTML = contentRow;
  }
}

var remove = async(id)=>{
          var doc= document.getElementById(id);
          doc.style.display = 'none';
  await DeleteRequest(id);

}
function update(id){

  window.location.replace("http://127.0.0.1:5500/PayRollForm.html?id="+id);
}

loadPage();

//  async function GetData(url) {
//   let Data;
//   let reponse= await fetch(url)
//     Data=await reponse.json()
//   return reponse
// }
// function postData(url, data) {

//   fetch(url, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       console.log("Success:", data);
//     })
//     .catch((error) => {
//       console.error("Error:", error);
//     });
// }
// function loadpage() {

//   var table = document.querySelector('#table');
//   var list = GetRequest("http://localhost:3000/employees")
//   if (list != null) {
//     var arr = JSON.parse(list);
//     var contentrow = header;
//     arr.forEach(emp => {
//       contentrow += `
//         <tr id=${emp.name}>
//         <td><img src=${emp.profilePic} style="width: 50px;"></td>
//         <td>${emp.name}</td>
//         <td>${emp.gender}</td>
//         <td>${emp.department}</td>
//         <td>${emp.salary}</td>
//         <td>
//         <img name="1" onclick="remove('${emp.name}')" src="images/delete.png">
//         <img name="1" onclick="update('${emp.name}')" src="images/edit.png">
//         </td>
//         </tr>     
//       `
//     });
//     table.innerHTML = contentrow
//   }
// }