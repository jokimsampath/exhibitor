export class loginModel {
    public email: string = '';
    public password: string = '';
    public admin: boolean = false;

    construction(){
        this.email = '';
        this.password = '';
        this.admin = false;
    }
}

export class loginRequest {
    public email: string = '';
    public password: string = '';
    public admin: boolean = false;

    construction(){
        this.email = '';
        this.password= '';
        this.admin = false;
    }
}