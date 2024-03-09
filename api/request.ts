import { notification } from "antd";

interface iRequest{
    url: string;
    method : string;
    body?: Object;
    params?: Object;
    headers?: iHeader;
    formData? : FormData;
}

export interface iHeader{
    [key:string]: string
}

export const baseUrl = 'http://localhost:8000/api/'

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
            const headers = this.getHeaders( options.headers || {} )
            const res = await fetch( url, {
                method,
                headers,
                body : JSON.stringify(options.body)
            } )
            const resData = await res.json()

            if ( res.ok && resData.success ) {
                // display message
                if ( resData.message !== '' && resData.message !== undefined ) {
                    notification.open({
                        message: 'System Message',
                        description:resData.message,
                      });
                }
                return resData.data
              } else {
                notification.open({
                    message: 'System Message',
                    description:res.status,
                  });
                // server error
                if ( res.status === 401 ) {
                    console.log( 'error 401' )
                }
                if ( res.status === 500 ) {
                    console.log( 'error 500' )
                }
              }
        } catch( e ) {
            notification.open({
                message: 'System Message',
                description: 'System Error',
              });
            console.log( e )
        }
    }

    async uploadFileRequest( options: iRequest ){
        try {
            const url = this.getBaseUrl( options.url )
            const method = options.method
            const headers = options.headers
            const body = options.formData
            const res = await fetch(url, {
                method: method,
                headers: headers,
                body: body,
            })
            const resData = await res.json()
            if ( res.ok && resData.success ) {
                // display message
                if ( resData.message !== '' && resData.message !== undefined ) {
                    notification.open({
                        message: 'System Message',
                        description:resData.message,
                      });
                }
                return resData.data
              } else {
                notification.open({
                    message: 'System Message',
                    description:res.status,
                  });
                // server error
                if ( res.status === 401 ) {
                    console.log( 'error 401' )
                }
                if ( res.status === 500 ) {
                    console.log( 'error 500' )
                }
              }
        } catch ( e ) {
            console.log( e )
        }
    }
}

const apiRequest = new Request()
export default apiRequest