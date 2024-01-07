import React from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    const data = useLoaderData()
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl flex flex-col gap-5 items-center'>Github followers: {data.followers}
    <img src={data.avatar_url} alt="Github profile picture" width="200px"/></div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/abhishekgit03')
    return response.json()

}   