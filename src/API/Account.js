import axios from "axios";
axios.defaults.xsrfHeaderName = 'X-CSRFToken'
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.withXSRFToken = true
axios.defaults.withCredentials = true

export default class Account {
    constructor({username, email}) {
        this.username = username
        this.email = email
        this.baseUrl = 'localhost:8000/account/'
        this.client = axios.create(
            {
                baseURL: this.baseUrl,
                headers: {
                    'Content-Type': 'application/json',
                }
            }
        )
    }

    async createAccount(username = null, email = null, password) {
        return (await this.client.post('', {username: username??this.username, email: email??this.email, password: password})).data
    }

    async deleteAccount() {
        return (await this.client.delete('')).data
    }

    async changeAccount(formData) {
        return (await this.client.patch('login/', formData, {headers: {'Content-Type': 'multipart/form-data'}})).data
    }

    async login(username=null, password) {
        return (await this.client.post(
            'login/',
            {
                username: username??this.username,
                password: password
            }
        )).data
    }

    async logout(){
        return (await this.client.delete('login/')).data
    }

    async isLogged() {
        return (await this.client.get('login/')).data.ok
    }
}
