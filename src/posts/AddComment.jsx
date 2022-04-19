import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import swal from 'sweetalert';



const AddComment = ()=>{

    const {commentId} = useParams();
    const navigate = useNavigate();
    const[data , setData] = useState({
    postId: "",
    id: "",
    name: "",
    email: "",
    body: ""
    })

    const handleAddComments = (e)=>{
        e.preventDefault();
        if(!commentId){
            axios.post('https://jsonplaceholder.typicode.com/posts/comments' , data).then(res =>{
            console.log(res);
            swal(`${res.data.email} با موفقیت افزوده شد`, {
                icon: "success",
                buttons:"متوجه شدم"
                  })
            }
            )}else{
            axios.put(`https://jsonplaceholder.typicode.com/posts/comments/${commentId}` , data).then(res =>{
                console.log(res);
                swal(`${res.data.email} با موفقیت ویرایش شد`,{
                    icon:"success",
                    buttons:"متوجه شدم"
                })
            })
        }   
    }

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/comments/${commentId}`).then(res =>{
            setData({
                title: res.data.email,
                id:res.data.id ,
                body:res.data.body 
            })
        })
        
    }, []);

    return(
        <div className="mt-5 p-4 container-fluid container">
        <h4 className="text-center text-primary">
            {commentId ? "ویرایش کاربر" : "افزودن کاربر"}
        </h4>
        <div className="row justify-content-center mt-5 ">
            <form onSubmit={handleAddComments} className="col-12 col-md-6 bg-light rounded shadow-lg p-3">
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">ایمیل</label>
                    <input type="email" class="form-control" value={data.email} onChange={(e)=>{
                        setData({...data , email:e.target.value})
                    }}/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">آیدی کاربر</label>
                    <input type="text" class="form-control" value={data.id} onChange={(e)=>{
                        setData({...data , id:e.target.value})
                    }}/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">متن</label>
                    <input type="text" class="form-control" value={data.body} onChange={(e)=>{
                        setData({...data , body:e.target.value})
                    }}/>
                </div>
                <div className="col-12 text-start">
                    <button type="button" class="btn btn-danger ms-2" onClick={()=>{navigate(-1)}}>بازگشت</button>
                    <button type="submit" class="btn btn-primary" >
                       {commentId ? "ویرایش" : "افزودن"}
                    </button>
                </div>
            </form>
        </div>
    </div>
        
    )
}


export default AddComment;