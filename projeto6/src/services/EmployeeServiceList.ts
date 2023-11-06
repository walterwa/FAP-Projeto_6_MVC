import { EmployeeRepository } from "../database/EmployeeRepository";
import { IEmployee } from "../database/IEmployee";


class EmployeeServiceList {

    constructor(private repository: EmployeeRepository) {}

    async execute(): Promise<IEmployee[]> {
        return  await this.repository.readAll();
    }

}

export { EmployeeServiceList };