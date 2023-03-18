
const url = "http://localhost:3000/employees";

async function GetData(id) {
	let qrl= url;
	if(id!=null){
		qrl= url+"/"+id;
	}
    let Data;
    await fetch(qrl)
        .then((response) => response.json())
        .then((data) => Data = data)
    return Data
}
function postData(url, data) {
    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log("Success:", data);
        })
        .catch((error) => {
            console.error("Error:", error);
        });
}



