for (let i =0; i <= 10; i ++){
    if (i % 2 === 0) {
        document.write(`Count ${i} is even<br>`);
    }else{
        document.write(`Count ${i} is odd<br>`);
    }
}

document.write(`<hr>`)

let myNum;
    do {
      myNum = parseInt(prompt("Enter a number between 5 and 20:"), 10);
    } while (isNaN(myNum) || myNum < 5 || myNum > 20);

let counter = 1;
    do {
      document.write(`Counter is: ${counter}<br>`);
      counter++;
    } while (counter <= myNum);

    document.write('<hr>');

    const subjects = [
      "Accounting",
      "Algebra",
      "Programming",
      "Art",
      "Data Analytics"
    ];

     document.write("<h3>Subjects (foreach):</h3>");
    subjects.forEach((subject) => {
      document.write(`${subject}<br>`);
    });

    document.write("<h3>Subjects (comma-separated):</h3>");
    
    document.write(subjects.join(", "));