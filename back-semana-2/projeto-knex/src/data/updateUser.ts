import connection from "../connection";

export default async function updateUser(
    id: String,
    name?: String,
    nickname?: String,
    email?: String
) {
    if(name){
        await connection.raw(`
            UPDATE TodoListUser
            SET name = '${name}'
            WHERE id = '${id}';
        `)
    }
    if(nickname){
        await connection.raw(`
            UPDATE TodoListUser
            SET nickname = '${nickname}'
            WHERE id = '${id}';
        `)
    }
    if(email){
        await connection.raw(`
            UPDATE TodoListUser
            SET email = '${email}'
            WHERE id = '${id}';
        `)
    }
}