import {BaseUrl} from './Base';

export const FuncGetUser=()=>{
    const Url = BaseUrl + "Users/getUsers";
    return new Promise((resolve, reject)=>{
        fetch(Url).then((resp)=>{
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


export const FuncGetPatient=(name = "")=>{
    const Url = BaseUrl + "Users/GetPatient";
    if(name != ""){
        Url += "?name=" + name
    }
    return new Promise((resolve, reject)=>{
        fetch(Url).then((resp)=>{
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


export const FuncGetDoctor=(name = "")=>{
    const Url = BaseUrl + "Users/GetDoctor";
    if(name != ""){
        Url += "?name=" + name
    }
    return new Promise((resolve, reject)=>{
        fetch(Url).then((resp)=>{
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

export const FuncGetPharmacist=(name = "")=>{
    const Url = BaseUrl + "Users/GetPharmacist";
    if(name != ""){
        Url += "?name=" + name
    }
    return new Promise((resolve, reject)=>{
        fetch(Url).then((resp)=>{
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

export const FuncCreateUser=(username, password, confirmPassword, Email)=>{
    const Url = BaseUrl + "Users/CreateUser";
    return new Promise((resolve, reject)=>{
        fetch(Url , {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(
                {
                    UserName : username,
                    Password : password,
                    ConfirmPassword : confirmPassword,
                    Email : Email
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


export const FuncRegisterPatient=(userId, firstName, lastName, nric, address, contactnum, tag)=>{
    const Url = BaseUrl + "Users/RegisterPatient";
    return new Promise((resolve, reject)=>{
        fetch(Url , {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(
                {
                    UserId : userId,
                    FirstName : firstName,
                    LastName : lastName,
                    NRIC : nric,
                    Address : address,
                    ContactNum : contactnum,
                    Tag : tag
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


export const FuncRegisterDoctor=(userId, firstName, lastName, intro, prof, contactnum, email)=>{
    const Url = BaseUrl + "Users/RegisterDoctor";
    return new Promise((resolve, reject)=>{
        fetch(Url , {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(
                {
                    UserId : userId,
                    FirstName : firstName,
                    LastName : lastName,
                    Introduction : intro,
                    Profession : prof,
                    ContactNum : contactnum,
                    Email : email
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

export const FuncRegisterPharmacist=(userId, firstName, lastName, intro)=>{
    const Url = BaseUrl + "Users/RegisterPharmacist";
    return new Promise((resolve, reject)=>{
        fetch(Url , {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(
                {
                    UserId : userId,
                    FirstName : firstName,
                    LastName : lastName,
                    Introduction : intro
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