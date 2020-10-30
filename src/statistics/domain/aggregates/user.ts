export interface UserJson {
    name: string;
    email: string;
    isActive: boolean;
}

export class User {
    private name: string;
    private email: string;
    private isActive: boolean;

    constructor (userJson: UserJson) {
        this.name = userJson.name;
        this.email = userJson.email;
        this.isActive = userJson.isActive;
    }

    getName() {
        return this.name;
    }

    getEmail() {
        return this.email;
    }

    getIsActive() {
        return this.isActive;
    }
}
