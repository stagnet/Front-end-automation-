export default class credentials {
    /**
     * @constructor
     */
    constructor(api) {
        this.http = api
    }

    getCredentials() {
        return this.http.get('/v1/credential')
    }
    createCredential(payload) {
        return this.http.post('/v1/credential/create-credential', payload)
    }
}
