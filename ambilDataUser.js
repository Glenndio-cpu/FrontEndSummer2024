function ambilDataUser() {
    fetch("https://reqres.in/api/users")
        .then((response) => response.json())
        .then((users) => {
            console.log(users.data);
        });
}

export default ambilDataUser;
