

const BASE_URL = `${process.env.REACT_APP_API_URL}/api/profiles`

async function getProfile(id) {
  try {
    const res = await fetch(`${BASE_URL}/${id}`)
    return await res.json()
  } catch (error) {
    console.log(error)
    throw error
  }
}

export { getProfile }
