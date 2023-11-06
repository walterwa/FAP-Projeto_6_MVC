
import{ connection } from "./Connection";
import { IEmployee } from "./IEmployee";
import { OkPacket } from "mysql2";


export class EmployeeRepository {

    readAll(): Promise<IEmployee[]> {
        return new Promise((resolve, reject) => {
            connection.query<IEmployee[]>("SELECT * FROM Employee;", (err, res) => {
                if(err) reject(res)
                else resolve(res)
            })
        })
    }

    readById(user_id: number): Promise<IEmployee | undefined> {
        return new Promise((resolve, reject) => {
          connection.query<IEmployee[]>(
            "SELECT * FROM users WHERE id = ?",
            [user_id],
            (err, res) => {
              if (err) reject(err)
              else resolve(res?.[0])
            }
          )
        })
      }

    create(employee: IEmployee): Promise<IEmployee> {
        return new Promise((resolve, reject) => {
          connection.query<OkPacket>(
            "INSERT INTO employee (name_employee, position) VALUES(?,?)",
            [employee.name_employee, employee.position],
            (err, res) => {
              if (err) reject(err)
              else
                this.readById(res.insertId)
                  .then(employee => resolve(employee!))
                  .catch(reject)
            }
          )
        })
      }

}
