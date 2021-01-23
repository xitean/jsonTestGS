
function testGs(){

const url = "https://script.google.com/macros/s/AKfycbwDfKk0GjMmw5FWJQ_MqvcHn0-UMPAkSL6etuy_gfP2_6gzB-pNTfd-lA/exec"
fetch(url)
.then(d => d.json())
.then(d => {
document.getElementById("app").textContent = d[0].status
})
}

function addGs(){

    
    
    const url = "https://script.google.com/macros/s/AKfycbwDfKk0GjMmw5FWJQ_MqvcHn0-UMPAkSL6etuy_gfP2_6gzB-pNTfd-lA/exec"
    fetch(url,{

        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'no-cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload,force-cache, only-if-cached
        credentials: 'omit', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
        },
        redirect: 'follow', // manual, *follow, error
        //referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify({name:"Jack"}) // body data type must match "Content-Type" header
     

    })
   
}
document.getElementById("btn").addEventListener("click",testGs)
document.getElementById("btnAdd").addEventListener("click",addGs)