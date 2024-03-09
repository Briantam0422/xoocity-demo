interface iRequest{
    url: string;
    method : string;
    body?: Object;
    params?: Object;
    headers?: iHeader;
}

export interface iHeader{
    [key:string]: string
}

const baseUrl = 'http://localhost:8000/api/'

class Request{
    getBaseUrl( url: string ) {
        return baseUrl + url
    }
    getHeaders( headers: iHeader ){
        const default_headers: iHeader = {
            accept: 'application/json',
            'Content-Type': 'application/json'
        }
        if ( headers !== undefined ) {
            for ( const [key, value] of Object.entries( headers ) ) {
                default_headers[key] = value
            }
        }
        return default_headers
    }
    getParams( payload: iRequest ) {
        const { method, body } = payload
        if ( ['POST', 'PUT', 'PATCH', 'DELETE'].indexOf( method ) >= 0 ) {
          payload.body = JSON.stringify(body)
        } else {
          payload.params = body
        }
        return payload
    }
    async request( options: iRequest ) {
        try {
            const url = this.getBaseUrl( options.url )
            const method = options.method
            // const params = options.params
            const headers = this.getHeaders( options.headers || {} )
            // const payload = this.getParams( options )

            const res = await fetch( url, {
                method,
                headers,
                body : JSON.stringify(options.body)
            } )
            const resData = await res.json()
            if ( res.ok && resData.success ) {
                // display message
                if ( resData.message !== '' && resData.message !== undefined ) {
                    console.log(resData.message)
                }
                return resData.data
              } else {
                console.log(res)
                // server error
                if ( res.status === 401 ) {
                    console.log( 'error 401' )
                }
                if ( res.status === 500 ) {
                    console.log( 'error 500' )
                }
              }
        } catch( e ) {
            console.log( e )
        }
    }
}

const apiRequest = new Request()
export default apiRequest