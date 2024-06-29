function netSalaryCalculator() {
    let basicSalary = parseFloat(prompt("Enter basic salary:"));
    let benefits = parseFloat(prompt("Enter benefits:"));

    if (isNaN(basicSalary) || isNaN(benefits) || basicSalary < 0 || benefits < 0) {
        console.log("Invalid input. Basic salary and benefits should be positive numbers.");
        return;
    }

    const incomeTaxRate = 0.3;
    const nhifRate = 0.02;
    const nssfRate = 0.04;

    let grossSalary = basicSalary + benefits;
    let payee = grossSalary * incomeTaxRate;
    let nhifDeduction = grossSalary * nhifRate;
    let nssfDeduction = grossSalary * nssfRate;
    let netSalary = grossSalary - payee - nhifDeduction - nssfDeduction;

    console.log(`Gross Salary: ${grossSalary.toFixed(2)}`);
    console.log(`Net Salary: ${netSalary.toFixed(2)}`);
}

netSalaryCalculator();


