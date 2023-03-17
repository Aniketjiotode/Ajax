
const url = "http://localhost:3000/employees";

let GetRequest = async (id) =>{
	let u= url;
	if(id!=null){
		u = url+"/"+id;
	}
	var resp = await fetch(u);
	var data = await resp.json();
	return data;
}

let DeleteRequest = async (id) =>{
	let u= url;
	if(id!=null){
		u = url+"/"+id;
	}
	var resp = await fetch(u,{method:"DELETE"});
	var data = await resp.json();
	return data;
}
let Postrequest =async (employee) => {
	var re = await fetch(url, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(employee)
	});
	var data = await re.json();
};

// function GetData(url) {
//     let Data;
//     fetch(url)
//         .then((response) => response.json())
//         .then((data) => Data = data)
//     return Data
// }
// function postData(url, data) {

//     fetch(url, {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//     })
//         .then((response) => response.json())
//         .then((data) => {
//             console.log("Success:", data);
//         })
//         .catch((error) => {
//             console.error("Error:", error);
//         });
// }