
const functions = {

    getUsername() {
        return localStorage.getItem('username');
    },

    isAuthenticated(){
        return localStorage.getItem('authenticated');
    }
}

export default functions;