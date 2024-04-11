let cities = ['New York', 'Rome', "Moscow", "Tokyo", "Paris", "London", "Berlin", "Madrid", "Beijing", "Istanbul"];

// Log the result after each task:

// 1. Add an element to the end of the array...
cities.push("Milano");
console.log(cities);

// 2. Add an element to the beginning of the array...
cities.unshift("Köln");
console.log(cities);

// 3. Remove an element from the end of the array...
cities.pop();
console.log(cities);

// 4. Remove an element from the beginning of the array...
cities.shift();
console.log(cities);


// 5. Remove the element at index 2...
cities.splice(2, 3);
console.log(cities);

// 6. Remove the element 'Paris'...
cities = cities.filter(city => city !== "Paris");
console.log(cities);
