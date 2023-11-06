import { EmployeeServiceList } from "../services/EmployeeServiceList"

import { Request, Response} from "express";

export class EmployerController {
    constructor(private employerService: EmployeeServiceList) {}

    async list(request: Request, response: Response): Promise<Response> {
        const employees = await this.employerService.execute();
        return response.status(200).json(employees);
    }
}