function studentGradeGenerator() {
    let marks = parseFloat(prompt("Enter student marks (between 0 and 100):"));
    
    if (isNaN(marks) || marks < 0 || marks > 100) {
        console.log("Invalid input. Marks should be between 0 and 100.");
        return;
    }
    
    if (marks > 79) {
        console.log("Grade: A");
    } else if (marks >= 60) {
        console.log("Grade: B");
    } else if (marks >= 50) {
        console.log("Grade: C");
    } else if (marks >= 40) {
        console.log("Grade: D");
    } else {
        console.log("Grade: E");
    }
}

studentGradeGenerator();

