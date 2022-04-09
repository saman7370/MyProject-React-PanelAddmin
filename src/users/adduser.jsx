import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import swal from 'sweetalert';



const Adduser = ()=>{

    const {Userid} = useParams();
    const navigate = useNavigate();
    const[data , setData] = useState({
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
    }
    })

    const handleAddUsers = (e)=>{
        e.preventDefault();
        if(!Userid){
            axios.post('https://jsonplaceholder.typicode.com/users' , data).then(res =>{
            console.log(res);
            swal(`${res.data.name} با موفقیت افزوده شد`, {
                icon: "success",
                buttons:"متوجه شدم"
                  })
            }
            )}else{
            axios.put(`https://jsonplaceholder.typicode.com/users/${Userid}` , data).then(res =>{
                console.log(res);
                swal(`${res.data.name} با موفقیت ویرایش شد`,{
                    icon:"success",
                    buttons:"متوجه شدم"
                })
            })
        }   
    }

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${Userid}`).then(res =>{
            setData({
                name: res.data.name,
                username:res.data.username ,
                email:res.data.email ,
                address: {
                  street:res.data.address.street ,
                  suite:res.data.address.suite ,
                  city:res.data.address.city ,
                  zipcode:res.data.address.zipcode ,
                }
            })
        })
        
    }, []);

    return(
        <div className="mt-5 p-4 container-fluid container">
        <h4 className="text-center text-primary">
            {Userid ? "ویرایش کاربر" : "افزودن کاربر"}
        </h4>
        <div className="row justify-content-center mt-5 ">
            <form onSubmit={handleAddUsers} className="col-12 col-md-6 bg-light rounded shadow-lg p-3">
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">نام و نام خانوادگی</label>
                    <input type="text" class="form-control" value={data.name} onChange={(e)=>{
                        setData({...data , name:e.target.value})
                    }}/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">نام کاربری</label>
                    <input type="text" class="form-control" value={data.username} onChange={(e)=>{
                        setData({...data , username:e.target.value})
                    }}/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">ایمیل</label>
                    <input type="email" class="form-control" value={data.email} onChange={(e)=>{
                        setData({...data , email:e.target.value})
                    }}/>
                </div>
                <div class="mb-3 row">
                    <label for="exampleInputEmail1" class="form-label" value={data.address}>آدرس</label>
                    <div className="col-6 my-1">
                        <input type="text" class="form-control" placeholder="شهر" value={data.address.city} onChange={(e)=>{
                           setData({...data , address:{...data.address , city:e.target.value}})
                        }}/>
                    </div>
                    <div className="col-6 my-1">
                        <input type="text" class="form-control" placeholder="خیابان" value={data.address.street} onChange={(e)=>{
                            setData({...data , address:{...data.address , street:e.target.value}})
                        }}/>
                    </div>
                    <div className="col-6 my-1">
                        <input type="text" class="form-control" placeholder="ادامه آدرس" value={data.address.suite} onChange={(e)=>{
                            setData({...data , address:{...data.address , suite:e.target.value}})
                        }}/>
                    </div>
                    <div className="col-6 my-1">
                        <input type="text" class="form-control" placeholder="کد پستی" value={data.address.zipcode} onChange={(e)=>{
                            setData({...data , address:{...data.address , zipcode:e.target.value}})
                        }}/>
                    </div>
                </div>

                <div className="col-12 text-start">
                    <button type="button" class="btn btn-danger ms-2" onClick={()=>{navigate(-1)}}>بازگشت</button>
                    <button type="submit" class="btn btn-primary" >
                       {Userid ? "ویرایش" : "افزودن"}
                    </button>
                </div>
            </form>
        </div>
    </div>
        
    )
}


export default Adduser;