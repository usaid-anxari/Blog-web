import React,{useEffect , useState} from 'react'
import {Container , PostCard} from '../Components/Index'
import storageService from '../Appwrite/posts'


function AllPosts() {
     const [posts, setPosts] = useState('')
     useEffect(()=>{
        storageService.getallPosts([]).then((post)=>{
            if(post){
                setPosts(post.documents)
            }
        })
     },[])
    return (
        <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
                {posts.map((post) => (
                    <div key={post.$id} className='p-2 w-1/4'>
                        <PostCard {...post} />
                    </div>
                ))}
            </div>
            </Container>
    </div>
  )
}

export default AllPosts