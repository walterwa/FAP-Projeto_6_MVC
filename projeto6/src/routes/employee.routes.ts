import { Router } from "express";
import { EmployeeRepository } from "../database/EmployeeRepository";
import { EmployeeServiceList } from "../services/EmployeeServiceList";
import { EmployerController } from "../controller/EmployeeController";

const employeeRoutes = Router()

const employeeRepository = new EmployeeRepository();

const employeeService = new EmployeeServiceList(employeeRepository);
const employeeController = new EmployerController(employeeService);

employeeRoutes.get("/", (request, response) => {
    employeeController.list(request, response)
});

employeeRoutes.put



export default employeeRoutes;






