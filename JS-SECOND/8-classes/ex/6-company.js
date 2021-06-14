class Company {
    constructor() {
        this.departments = [];
    };

    addEmployee(employee, salary, position, department) {
        salary = Number(salary);

        this._checkInputAndThrowForInvalid(employee, salary, position, department);

        let currDepartment = this.departments.filter(e => e.department === department);

        if (currDepartment.length === 0) {
            this.departments.push({department, salary: 0, employees: []})
        }

        currDepartment = this.departments.filter(e => e.department === department)[0];
        currDepartment.salary += salary;
        currDepartment.employees.push({employee, salary, position});
        return `New employee is hired. Name: ${employee}. Position: ${position}`;
    };

    bestDepartment() {
        let average = (obj) => {
            let avg = obj.avgSalary = obj.salary / obj.employees.length;
            return {department: obj.department, avgSalary: avg, employees: obj.employees};
        };

        let bestDepartment = this.departments.map(average).sort((a, b) => a.avgSalary - b.avgSalary).pop();

        let result = [
            `Best Department is: ${bestDepartment.department}`,
            `Average salary: ${bestDepartment.avgSalary.toFixed(2)}`
        ];
        bestDepartment.employees.sort((a, b) => b.salary - a.salary || a.employee.localeCompare(b.employee));
        bestDepartment.employees.forEach(e => result.push(`${e.employee} ${e.salary} ${e.position}`));
        return result.join('\n').trim();
    };

    _checkInputAndThrowForInvalid(employee, salary, position, department) {
        const valid = ([employee, position, department].map((el) => Boolean(el)).includes(false) || salary <= 0);
        if (valid) throw new Error('Invalid input!')
    };
}
let c = new Company();

c.addEmployee("Stanimir", 2000, "engineer", "Construction");

c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");

c.addEmployee("Slavi", 500, "dyer", "Construction");

c.addEmployee("Stan", 2000, "architect", "Construction");

c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");

c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");

c.addEmployee("Gosho", 1350, "HR", "Human resources");

console.log(c.bestDepartment());
/*class Company { различно изчислен bestDepartment
    constructor() {
        this.departments = [];
    };

    addEmployee(employee, salary, position, department) {
        salary = Number(salary);

        this._checkInputAndThrowForInvalid(employee, salary, position, department);

        let currDepartment = this.departments.filter(e => e.department === department);

        if (currDepartment.length === 0) {
            this.departments.push({department, salary: 0, employees: []})
        }

        currDepartment = this.departments.filter(e => e.department === department)[0];
        currDepartment.salary += salary;
        currDepartment.employees.push({employee, salary, position});
        return `New employee is hired. Name: ${employee}. Position: ${position}`;
    };

    bestDepartment() {
        let average = (obj) => {
            obj.avgSalary = (obj.avgSalary = obj.salary / obj.employees.length);
            return obj;
        };

        let bestDepartment = this.departments.map(average).sort((a, b) => a.avgSalary - b.avgSalary).pop();

        let result = [
            `Best Department is: ${bestDepartment.department}`,
            `Average salary: ${bestDepartment.avgSalary.toFixed(2)}`
        ];
        bestDepartment.employees.sort((a, b) => b.salary - a.salary || a.employee.localeCompare(b.employee));
        bestDepartment.employees.forEach(e => result.push(`${e.employee} ${e.salary} ${e.position}`));
        return result.join('\n').trim();
    };

    _checkInputAndThrowForInvalid(employee, salary, position, department) {
        const valid = ([employee, position, department].map((el) => Boolean(el)).includes(false) || salary <= 0);
        if (valid) throw new Error('Invalid input!')
    };
}
*/
/* различна проверка за инпут
class Company {
    constructor() {
        this.departments = [];
    };

    addEmployee(employee, salary, position, department) {
        salary = Number(salary);

        this._checkInputAndThrowForInvalid(employee, salary, position, department);

        let currDepartment = this.departments.filter(e => e.department === department);

        if (currDepartment.length === 0) {
            this.departments.push({department, salary: 0, employees: []})
        }

        currDepartment = this.departments.filter(e => e.department === department)[0];
        currDepartment.salary +=salary;
        currDepartment.employees.push({employee, salary, position});
        return `New employee is hired. Name: ${employee}. Position: ${position}`;
    };

    bestDepartment() {
        let average = (obj) => {
            let avg = obj.avgSalary = obj.salary / obj.employees.length;
            return {department: obj.department, avgSalary: avg, employees: obj.employees};
        };

        let bestDepartment = this.departments.map(average).sort((a, b) => a.avgSalary - b.avgSalary).pop();

        let result = [
            `Best Department is: ${bestDepartment.department}`,
            `Average salary: ${bestDepartment.avgSalary.toFixed(2)}`
        ];
       bestDepartment.employees.sort((a, b) => b.salary - a.salary || a.employee.localeCompare(b.employee));
        bestDepartment.employees.forEach(e => result.push(`${e.employee} ${e.salary} ${e.position}`));
        return result.join('\n').trim();
    };

    _checkInputAndThrowForInvalid(employee, salary, position, department) {
        if ([...arguments].some(x => x === '' || x === undefined || x === null)
            || Number(salary) <= 0) {
            throw new Error('Invalid input!');
        }
    };
}
 */