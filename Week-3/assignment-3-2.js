let p1 = {
    firstName: 'Pesto',
    lastName: 'Tech'
  };
  let p2 = {
    firstName: 'Trapti',
    lastName: 'Agarwal'
  };
  function sayWelcome() {
    console.log('Welcome ' + this.firstName + ' ' + this.lastName);
  }

  sayWelcome.call(p1, 'Welcome'); // Welcome Pesto Tech
  sayWelcome.call(p2, 'Welcome'); // Welcome Trapti Agarwal
  sayWelcome.apply(p1, ['Welcome']); // Welcome Pesto Tech
  sayWelcome.apply(p2, ['Welcome']); // Welcome Trapti Agarwal
  let sayWelcomefn = sayWelcome.bind(p1);
  let sayWelcomeln = sayWelcome.bind(p2);
  sayWelcomefn(); // Welcome Pesto Tech
  sayWelcomeln(); // Welcome Trapti Agarwal

  //The call() method calls the function with a given this value and allows passing in arguments one by one separating them with commas
  //The apply() method calls the function with a given this value and allows passing in arguments as an array (or an array-like object)
  //The bind() method returns a new function and allows passing in a this array and any number of arguments.