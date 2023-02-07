
export default defineAppConfig ({
    client_id:'59b5c7294ab54202b98822c19f56579a',
    redirect_uri:'http://localhost:9000/Authentication',
    stateKey:'spotify_auth_state' ,
    scope:'user-read-private user-read-email',
})