import connection from "../connection";

export default async function selectUserById(
    id: String
) {
    const result = await connection('TodoListUser')
    .select('*')
    .where({ id })

    return result[0]
}