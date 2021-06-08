import app from './app'

import getAllCharacters from './endpoints/getAllCharacters'

app.get('/characters', getAllCharacters)
// app.put('/characters', createCharacter)
// app.delete('characters/:id', deleteCharacter)