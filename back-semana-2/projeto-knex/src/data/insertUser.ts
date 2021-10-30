import connection from "../connection";

export default async function insertUser(
    name: String,
    nickname: String,
    email: String
) {
    await connection.insert({
        name,
        nickname,
        email
    }).into('TodoListUser')
}