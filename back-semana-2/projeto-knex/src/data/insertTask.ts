import connection from "../connection";

export default async function insertTask(
    id: String,
    title: String,
    description: String,
    status: String,
    limitDate: String,
    authorId: String
) {
    await connection('TodoListTask')
    .insert({
        id,
        title,
        description,
        status,
        limit_date: limitDate,
        creator_user_id: authorId
    })
}