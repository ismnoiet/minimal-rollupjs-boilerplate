class UsersCollection{
    constructor(users = []){
        this.users = users
    }
    
    log(){
        console.log(this.users);
    }
}
export default UsersCollection;