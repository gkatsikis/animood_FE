import * as tokenService from './tokenService'
const BASE_URL = `${process.env.REACT_APP_API_URL}/api/animoods`

export const create = async (animood) => {
  try {
    const res = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
      body: JSON.stringify(animood),
    })
    return await res.json()
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const getOne = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}${id}`)
    return await res.json()
  } catch (error) {
    throw error
  }
}