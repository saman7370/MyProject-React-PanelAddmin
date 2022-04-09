import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import axios from 'axios';
import { useState } from 'react';


const User = ()=>{

    const navigate = useNavigate();
    const[users , setUsers] = useState([]);
    const[mainUsers , setMainUsers] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users').then(res=>{
            setUsers(res.data);
            setMainUsers(res.data);
        }).catch(err=>{
            console.log(err);
        })  
    }, []);

    const handleDelet = (itemId)=>{
        swal({
            title: "حذف رکورد!",
            text:`آیا از حذف رکورد ${itemId} اطمینان دارید؟`,
            icon: "warning",
            buttons:["خیر" , "بله"],
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                axios.delete(`https://jsonplaceholder.typicode.com/users/${itemId}`).then(res =>{
                    if(res.status === 200){
                        const newUsers = users.filter(u => u.id != itemId);
                        setUsers(newUsers);
                        swal("حذف با موفقیت انجام شد", {
                            icon: "success",
                            buttons:"متوجه شدم"
                          });
                    }else{
                        swal("عملیات با خطا مواجه شد",{
                            icon:"error",
                            buttons:"متوجه شدم"
                        })
                    }
                })  
            } else {
              swal("شما از حذف رکورد منصرف شده اید");
            }
          });
    }

    const handleSearchUsers = (e)=>{
        setUsers(mainUsers.filter(u => u.name.includes(e.target.value)));
    }

    return(
        <div className="mt-5 p-4 container-fluid">
            <h4 className="text-center">مدیریت کاربران</h4>
            <div className="row my-2 mb-4 justify-content-between w-100 mx-0">
                <div className="form-group col-10 col-md-6 col-lg-4">
                    <input type="text" className="form-control shadow" placeholder="جستجو" onChange={handleSearchUsers}/>
                </div>
                <div className="col-2 text-start px-0">
                    <Link to="/users/Add">
                    <button className="btn btn-success">
                        <i className="fas fa-plus text-light"></i>
                    </button>
                    </Link>
                </div>
            </div>
            {users.length ? (
                  <table className="table bg-light shadow">
                  <thead>
                      <tr>
                          <th>#</th>
                          <th>نام</th>
                          <th>نام کاربری</th>
                          <th>ایمیل</th>
                          <th>عملیات</th>
                      </tr>
                  </thead>
                  <tbody>
                      {users.map(u => (
                            <tr key={u.id}>
                               <td>{u.id}</td>
                               <td>{u.name}</td>
                               <td>{u.username}</td>
                               <td>{u.email}</td>
                               <td>
                                   <i className="fas fa-edit text-warning mx-2 pointer" onClick={()=>{navigate(`/users/add/${u.id}`)}}></i>
                                   <a href="#"><i className="fas fa-trash text-danger mx-2 pointer" onClick={()=>handleDelet(u.id)}></i></a>
                               </td>
                           </tr>
                      ))}
                  </tbody>
              </table>
            ) : (
                <>
                <div className="loader"></div>
                <h4 className="title-loader">لطفا کمی صبر کنید ...</h4>  
                </>
            )}
          
        </div>
    )
}

export default User;