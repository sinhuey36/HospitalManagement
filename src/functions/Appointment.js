import {BaseUrl} from './Base';


export const FuncGetAppointmentList=(PatientId = "", DoctorId = "", PatientName = "", DoctorName = "")=>{
    const Url = BaseUrl + "Users/GetAppointmentList";
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
                    PatientName : PatientName,
                    DoctorName : DoctorName
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



export const FuncNewAppointment=(AppointmentDateTime = "", isPatient = true, PatientId = "", DoctorId = "", Remark = "")=>{
    const Url = BaseUrl + "Users/NewAppointment";
    return new Promise((resolve, reject)=>{
        fetch(Url , {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(
                {
                    AppointmentDateTime : AppointmentDateTime,
                    isPatient : isPatient,
                    PatientId : PatientId,
                    DoctorId : DoctorId,
                    Remark : Remark
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

export const FuncUpdateAppointment=(AppointId = "", AppointmentDateTime = null, Remark = "", Status = "")=>{
    const Url = BaseUrl + "Users/UpdateAppointment";
    return new Promise((resolve, reject)=>{
        fetch(Url , {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(
                {
                    AppointmentDateTime : AppointmentDateTime ,
                    AppointId : AppointId,
                    Status : Status,
                    Remark : Remark
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
