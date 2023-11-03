export async function registerUser(credentials){
    try {
        // const { data : { msg }, status } = await axios.post(`/api/register`, credentials);

        // let { username, email } = credentials;

        /** send email */
        // if(status === 201){
            // await axios.post('/api/registerMail', { username, userEmail : email, text : msg})
        // }

        // return Promise.resolve(msg)
    } catch (error) {
        return Promise.reject({ error })
    }
}



/** reset password */
export async function resetPassword({ username, password }){
    try {
        // const { data, status } = await axios.put('/api/resetPassword', { username, password });
        // return Promise.resolve({ data, status})
    } catch (error) {
        // return Promise.reject({ error })
    }
}




/** update user profile function */
export async function updateUser(response){
    try {
        
        // const token = await localStorage.getItem('token');
        // const data = await axios.put('/api/updateuser', response, { headers : { "Authorization" : `Bearer ${token}`}});

        // return Promise.resolve({ data })
    } catch (error) {
        // return Promise.reject({ error : "Couldn't Update Profile...!"})
    }
}

