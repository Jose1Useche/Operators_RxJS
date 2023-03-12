export class AuthBody {
    constructor(public email: string, public password: string, public returnSecureToken: boolean = true) {}
}