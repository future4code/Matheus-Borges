export const goToLogin = (history) => {
    history.push('/login')
}
export const goToFeed = (history) => {
    history.push('/')
}
export const goToSignUp = (history) => {
    history.push('/cadastro')
}
export const goToPosts = (history, postId) => {
    history.push(`/posts/${postId}`)
}