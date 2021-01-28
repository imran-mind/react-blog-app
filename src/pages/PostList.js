import React, {useState,useEffect} from 'react'

function PostList() {
    const [loading, setLoading] = useState(true);
    const [data,setData] = useState([])

    useEffect(()=>{
        const data = [
            {
                name: 'Ecommerce post'
            },
            {
                name: 'Sports Post'
            },
            {
                name: 'Politics news'
            }
        ]
        setTimeout(()=>{
            setData([
                {
                    name: 'Ecommerce post'
                },
                {
                    name: 'Sports Post'
                },
                {
                    name: 'Politics news'
                }
            ])
            setLoading(false)
        },2000)
    },[])

    return (
        <div>
            {
                loading ? <div>Loading...</div> : 
                data.map((post)=>{
                    return <div>{post.name}</div>
                })
            }
        </div>
    )
}

export default PostList
