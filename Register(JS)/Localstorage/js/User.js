class User {
    constructor(name,pass,role) {
        this.name = name;
        this.pass = pass;
        this.role = role;
    }

    isAdmin() {
        return (this.role.toLowerCase() === 'admin');
    }

    isUser(name,pass){
        return (this.name === name && this.pass === pass);
    }
}
