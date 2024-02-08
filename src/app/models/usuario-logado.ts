export class UsuarioLogado {

    constructor(public id: number, public login: string, private _token: string, private _tokenExpiration: number, public role: string){}

    get token(): string | null {
        if(!this._tokenExpiration || new Date().getTime() > this._tokenExpiration){
            return null;
        }
        return this._token;
    }

    get tokenExpiration(): number {
        return this._tokenExpiration;
    }

}
