import React,{useEffect,useState} from 'react'
import {Container,PostForm} from '../Components/Index'
import storageService from '../Appwrite/posts'
import { useNavigate, useParams } from 'react-router-dom'
 

function EditPost() {
    const {slug} = useParams()
    const navigate = useNavigate()
    const [post,setPost] = useState('');
    useEffect(()=>{
        if (slug) {
            storageService.getPost(slug).then((post)=>{
                if (post) {
                    setPost(post)
                }
            })
        }else{
            navigate('/')
        }
    },[slug,navigate])


   return post ? (
    <div className='py-8'>
        <Container>
            <PostForm post={post}/>
        </Container>
    </div>
   ) : null
}

export default EditPost