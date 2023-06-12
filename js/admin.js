const memberDb = JSON.parse(localStorage.getItem('memberDb')) || [];
const tbody = document.querySelector("tbody")


for(const member of memberDb){
    const tr = document.createElement("tr")
    for(let key in member){
        const td = document.createElement("td")
        if(key==="createdAt"){
            td.innerText=new Date(member[key])
        }
        else{
            td.innerText=member[key]
        }
        td.style.height="40px"
        tr.append(td)
    }
    tbody.append(tr)
}
