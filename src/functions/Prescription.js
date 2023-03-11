import {BaseUrl} from './Base';


export const FuncGetPrescriptions=(DoctorId, PatientId)=>{
    const Url = BaseUrl + "Users/GetPrescriptions";
    return new Promise((resolve, reject)=>{
        fetch(Url , {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(
                {
                    DoctorId : DoctorId,
                    PatientId : PatientId
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


export const FuncNewPatientHistory=(PatientId, DoctorId, description = "" , medicines = [])=>{
    const Url = BaseUrl + "Users/NewPatientHistory";

    return new Promise((resolve, reject)=>{
        fetch(Url , {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(
                {
                    PatientId : PatientId,
                    DoctorId : DoctorId,
                    Description : description,
                    newPrescriptionModels : medicines
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


export const FuncGetPatientHistory=(PatientId = "")=>{
    const Url = BaseUrl + "Users/GetPatientHistory";
    if(name != ""){
        Url += "?PatientId=" + PatientId
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

