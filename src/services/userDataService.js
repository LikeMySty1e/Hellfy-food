export const login = (login, password) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(Math.random() * 100000000)
        }, 1000)
    })
}

export default { login };