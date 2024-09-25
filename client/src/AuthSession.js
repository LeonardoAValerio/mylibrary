import axios from "axios";

export default class AuthSession{
    constructor(resource) {
        this.resource = resource;
    }

    async checkAuth() {
        try {
            const response = await axios.get('http://localhost:3000/'+this.resource, { withCredentials: true });
            return response.status === 20
          } catch (error) {
            return false;
          }
    }
}