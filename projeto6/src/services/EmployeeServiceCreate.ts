/*
import { EmployeeRepository } from "../database/EmployeeRepository";
import { IEmployee } from "../database/IEmployee";
import { Employee } from "../models/Employee";

class employeeServiceCreate {

    constructor(private repository: EmployeeRepository) {}

    async execute(name: string, position: string): Promise<IEmployee> {
        const employee: IEmployee;
        employee.name = name;
        employee.position = position;
        return  await this.repository.create(employee);
    }

}*/
