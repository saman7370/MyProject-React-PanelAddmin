import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import swal from 'sweetalert';



const AddPost = ()=>{

    const {postId} = useParams();
    const navigate = useNavigate();
    const[data , setData] = useState({
    userId: "",
    id: "",
    title: "",
    body: ""
    })

    const handleAddPosts = (e)=>{
        e.preventDefault();
        if(!postId){
            axios.post('https://jsonplaceholder.typicode.com/posts' , data).then(res =>{
            console.log(res);
            swal(`${res.data.title} با موفقیت افزوده شد`, {
                icon: "success",
                buttons:"متوجه شدم"
                  })
            }
            )}else{
            axios.put(`https://jsonplaceholder.typicode.com/posts/${postId}` , data).then(res =>{
                console.log(res);
                swal(`${res.data.title} با موفقیت ویرایش شد`,{
                    icon:"success",
                    buttons:"متوجه شدم"
                })
            })
        }   
    }

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`).then(res =>{
            setData({
                title: res.data.title,
                id:res.data.id ,
                body:res.data.body 
            })
        })
        
    }, []);

    return(
        <div className="mt-5 p-4 container-fluid container">
        <h4 className="text-center text-primary">
            {postId ? "ویرایش کاربر" : "افزودن کاربر"}
        </h4>
        <div className="row justify-content-center mt-5 ">
            <form onSubmit={handleAddPosts} className="col-12 col-md-6 bg-light rounded shadow-lg p-3">
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">عنوان</label>
                    <input type="text" class="form-control" value={data.title} onChange={(e)=>{
                        setData({...data , title:e.target.value})
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
                       {postId ? "ویرایش" : "افزودن"}
                    </button>
                </div>
            </form>
        </div>
    </div>
        
    )
}


export default AddPost;