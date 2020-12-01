for (let i = 1; i <= 100; i++) {
        let resultat =  i % 3 === 0 && i % 5 === 0 ? "Fizzbuzz" : i % 3 === 0 ? "Fizz" : i % 5 === 0 ? "Buzz" : i;
        console.log(resultat);
}

