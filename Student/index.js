console.log("Run JS");

const student = []
const save = () => {
    const name = document.getElementById("inputName").value
    const address = document.getElementById("inputAddress").value
    const age = document.getElementById("inputAge").value
    const contact = document.getElementById("inputContact").value

    const obj = {
        name: name,
        address: address,
        age: age,
        contact: contact,
    } 

    student.push(obj);
    console.log(student);
    getUser();
}

const getUser = () => {
    let data = "";
    for(let i=0; i<student.length; i++) {

        data += `<div class="card" style="width: 18rem;">

        <div id="card-body" class="card-body">
            <div>
                <p>Name :</p>
                <h6 id="name">${student[i].name}</h6>
            </div>
            <div>
                <p>Address :</p>
                <h6 id="address">${student[i].address}</h6>
            </div>
            <div>
                <p>Age :</p>
                <h6 id="age">${student[i].age}</h6>
            </div>
            <div>
                <p>Contact :</p>
                <h6 id="contact">${student[i].contact}</h6>
            </div><button onclick="deleteStudent(${i})" class="card-link"
                style="background-color: transparent; border: none;"><img src="./assets/delete-Icon.png"></button>
        </div>
    </div>`
  
    }

    document.getElementById("student-card-div").innerHTML = data;
    
    console.clear;
      
}

getUser();

const deleteStudent = (id) => {
    student.splice(id,1);
    getUser();
} 

