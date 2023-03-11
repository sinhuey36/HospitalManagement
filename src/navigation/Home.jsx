import React, {useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux'
function Home(){
    const user = useSelector((state) => state.user)
    useEffect(() => {//navigate to login if not found user 
        if(user.UserName == null || user.FirstName == null || user.LastName == null || user.Role == null || user.UserId == null || user.RoleId == null){
            //go to login page
        }
        console.log(user);
      });
    return (
        <div>
            Hello world Home
        </div>
    )
}

export default Home;