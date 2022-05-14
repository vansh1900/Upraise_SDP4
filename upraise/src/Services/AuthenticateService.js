import axios from 'axios'

export function CheckAdminCred(email,password)
{
    const promise = new Promise((resolve, reject) => {
        if(email=="admin@gmail.com" && password=="admin")
        {
            resolve("true");
        }
        else
        {
            reject("false");
        }
    });
    return promise;
}

export function AuthenticateUser(email,password)
{
    return axios.get(`http://localhost:9000/user/login/${email}/${password}`)
}

export function PostUserDetails(data)
{
    return axios.post('http://localhost:9000/user/add',data);
}

export function AuthenticateVolunteer(email,password)
{
    return axios.get(`http://localhost:9000/login`)
}

export function PostVolunteerDetails(data)
{
    return axios.post('http://localhost:9000/user/add',data);
}

export function AuthenticateOrg(email,password)
{
    return axios.get(`http://localhost:9000/login`)
}

export function PostOrgDetails(data)
{
    return axios.post('http://localhost:9000/user/add',data);
}