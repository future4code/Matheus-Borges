import app from "./app";
import createUser from "./endpoints/createUser";
import getUserById from "./endpoints/getUserById";
import editUser from "./endpoints/editUser";
import createTask from "./endpoints/createTask";

app.put('/users', createUser)
app.get('/users/:id', getUserById) 
app.post('/users/edit/:id', editUser)

app.put('/tasks', createTask)

// const pegarTarefaId = async (id: number): Promise<any> => {
//     const resultTarefaId = await connection.raw(`
//     SELECT * FROM TodoListUser 
//     JOIN TodoListTask 
//     ON TodoListUser.id = TodoListTask.creator_user_id
//     WHERE TodoListTask.id = ${id};    
//     `)
//     return resultTarefaId[0]
// }


// app.get('/tasks/:id', async (req, res) => {
//     try {
//         const id = Number(req.params.id)
//         const result = await connection('TodoListUser')
//         .join('TodoListTask', 'TodoListUser.id', '=', 'TodoListTask.creator_user_id')
//         .where('TodoListTask.id', `${id}`)
//         .select("*")
//         res.send(result)  // result[1] contém os metadados da query

//     } catch (error) {
//         res.status(500).send("An unexpected error occurred")
//     }
// })

// // app.get('/users', async (req, res) => {
// //     try {
 
// //        const result = await connection.raw(
// //           "SELECT * FROM TodoListUser"
// //        )
 
// //        res.send(result[0])  // result[1] contém os metadados da query
 
// //     } catch (error) {
 
// //        console.log(error.sqlMessage || error.message);
       
// //        res.status(500).send("An unexpected error occurred")
// //     }
// //  })

// app.post("/users", async (
//     req: Request,
//     res: Response
//  ) => {
//     try {
 
//        if (!req.body.name) {
//           throw new Error("'name' is required")
//        }
 
//        const userData = {
//           name: req.body.name,
//           nickname: req.body.nickname,
//           email: req.body.email,
//        }
 
//        await connection("TodoListUser").insert(userData)
 
//        res.status(201).send("User created!")
 
//     } catch (error) {
 
//        console.log(error.sqlMessage || error.message);
 
//        res.status(500).send("Internal server error")
//     }
 
//  })

// app.post("/tasks", async (
//     req: Request,
//     res: Response
//  ) => {
//     try {
 
//        if (!req.body.name) {
//           throw new Error("'name' is required")
//        }
 
//        const userData = {
//           name: req.body.name,
//           nickname: req.body.nickname,
//           email: req.body.email,
//        }
 
//        await connection("TodoListTask").insert(userData)
 
//        res.status(201).send("Task created!")
 
//     } catch (error) {
 
//        console.log(error.sqlMessage || error.message);
 
//        res.status(500).send("Internal server error")
//     }
 
//  })

// app.put("/users/:id", async (req, res) => {
//     try {
 
//         const userData = {
//             name: req.body.name,
//             nickname: req.body.nickname,
//             email: req.body.email,
//          }
 
//        await connection("User")
//           .update(userData)
//           .where({ id: req.params.id })
 
//        res.send("Updated!")
 
//     } catch (error) {
       
//        console.log(error.sqlMessage || error.message);
       
//        res.status(500).send("Internal error")
//     }
//  })


 