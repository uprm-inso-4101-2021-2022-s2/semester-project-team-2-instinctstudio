
class User{
    constructor(user_id, email, username, password, nickname) {
        this.user_id = user_id;
        this.email = email;
        this.username = username;
        this.password = password;
        this.nickname = nickname;

    }
    get getUser_Id(){
        return this.user_id;
    }
    get getEmail(){
        return this.email;
    }
    get getNickname(){
        return this.nickname;
    }
    set setEmail(newEmail){
        this.email = newEmail;
    }
    set setPassword(password){
        this.password = password;
    }
    set setUsername(username){
        this.username = username;
    }







}

