import React from 'react'
import { services } from '../appwrite/services'
import { Link } from 'react-router-dom'
function PostCard({
    $id,title,ft_image
}) {
  return (
    <Link to={`/post/${$id}`}>
      <div className='rounded-md p-4 bg-gray-300 '>
        <div className='w-full justify-center mb-4'>
            <img src={services.getPreview(ft_image)} alt={title} className='rounded-md p-3'></img>
        </div>
        <h3 className='p-3 text-xl'>{title}</h3>
      </div>
    </Link>
  )
}

export default PostCard
