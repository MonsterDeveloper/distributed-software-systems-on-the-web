function displayUserDetails(user) {
    var name = user.name;
    var age = user.age;
    var email = user.email;

    console.log('Name: ' + name + ', Age: ' + age + ', Email: ' + email);
}

var user = {
    name: 'Jane Doe',
    age: 28,
    email: 'jane.doe@example.com'
};

displayUserDetails(user);

// ES6
const displayUserDetails = ({ name, age, email}) => {
    console.log(`Name: ${name}, Age: ${age}, Email: ${email}`)
} 