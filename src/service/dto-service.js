import httpClient from '../helper/http-client'

export default {
    search() {
        return httpClient.get('posts')
    },
    
}
