const loadUsers = () => {
    fetch('https://randomuser.me/api/?results=10')
        .then(res => res.json())
        .then(data => displayUsers(data.results))
}

const displayUsers = users => {
    const usersContainer = document.getElementById('users-container');
    for (const user of users) {
        console.log(user);
        const userDiv = document.createElement('div');
        userDiv.classList.add('user');
        userDiv.innerHTML = `
            <h3>User Name: ${user.name.title} ${user.name.first} ${user.name.last}</h3>
            <img src="${user.picture.large}"  alt="...">
            <p>User Location: ${user.location.city} ${user.location.country}</p>
            <p>User coordinates: ${user.location.coordinates.latitude}</p>
            <p>User timezone: ${user.location.timezone.description}</p>
            
           

        `;
        usersContainer.appendChild(userDiv);
    }
}
loadUsers();