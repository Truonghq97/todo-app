export const checkToken = () => {
    const token = localStorage.getItem('token')
    if (token !== "") {
        return token;
    }
    return null;
    
}
