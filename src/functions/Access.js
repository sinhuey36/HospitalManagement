import {BaseUrl} from './Base';

export const FuncLogin=(username , password)=>{
    const Url = BaseUrl + "Access/Login";
    return new Promise((resolve, reject)=>{
        fetch(Url , {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(
                {
                    username : username,
                    password : password
                }
            )
        }).then((resp)=>{
            return resp.json();
        }).then((resp)=>{
            if(resp.success){
                resolve(resp);
            }else{
                window.alert(resp.message);
                reject(resp);
            }
        }).catch((exp)=>{
            reject(exp);
        })
    })
}