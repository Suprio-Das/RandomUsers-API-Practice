const loadUsers = () =>{
    fetch('https://randomuser.me/api/?results=10')
    .then(res => res.json())
    .then(data => displayUsers(data))
}

loadUsers();

const displayUsers = data => {
    const users = data.results;
    const usersContainer = document.getElementById('userContainer');
    for(const user of users){
        // user div styles here
        const userDiv = document.createElement('div');
        userDiv.style.width = "80vh"
        userDiv.style.margin = "0 auto"
        userDiv.style.backgroundColor = "aliceblue";
        userDiv.style.padding = "20px";
        userDiv.style.marginBottom = "20px";
        userDiv.style.borderRadius = "10px";
        userDiv.style.color = "black";     
        userDiv.style.fontSize = "18px";    
        
        // user image
        const img = document.createElement('img');
        img.innerText = user.picture.medium;
        img.setAttribute("src", user.picture.medium);
        img.style.borderRadius = "50%";
        img.style.border = "4px solid salmon";

        // user name
        const p = document.createElement('p');
        p.innerText = `Name: ${user.name.title} ${user.name.first} ${user.name.last}`;

        // user gender
        const gender = document.createElement('p');
        gender.innerText = `Gender: ${user.gender}`;

        // user address
        const country = document.createElement('p');
        country.innerText = `Country: ${user.location.country}`;

        // user email
        const email = document.createElement('p');
        email.innerText = `Email: ${user.email}`;

        // user age
        const age = document.createElement('p');
        age.innerText = `Age: ${user.registered.age}`;

        // user phone
        const phone = document.createElement('p');
        phone.innerText = `Phone: ${user.phone}`;

        // appending the property to the div
        userDiv.appendChild(img);
        userDiv.appendChild(p);
        userDiv.appendChild(gender);
        userDiv.appendChild(country);
        userDiv.appendChild(email);
        userDiv.appendChild(age);
        userDiv.appendChild(phone);

        // appending the div to the main div
        usersContainer.appendChild(userDiv);
    }
}