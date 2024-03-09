import apiRequest from "../request";

export async function getUserApi( userId: string|number ){
    const data = await apiRequest.request({
        url: `user/${userId}/profile/get`,
        method: "GET"
    })
    if ( data ) {
        return data.user
    }
    return null
}

export async function updateUserProfileApi( userId:string|number, input: Object ){
    const data = await apiRequest.request({
        url: `user/${userId}/profile/update`,
        method: "POST",
        body: input
    })
    if ( data ) {
        return data.user
    }
    return null
}

export async function uploadAvatarApi( user_id:string|number, form:FormData ){
    const data = apiRequest.uploadFileRequest({
        url: `user/${user_id}/profile/upload-avatar`,
        method: "POST",
        headers: {
          accept: "application/json",
        },
        formData: form,
      });
      return data
}