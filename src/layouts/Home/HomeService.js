import axios from 'axios'

export const callGetMe = async (access_token) => {
  try {
    const response = await axios.get(import.meta.env.VITE_GETME_URL, {
      headers: {
        Authorization: 'Bearer ' + access_token,
        'Content-Type': 'application/json'
      },
      withCredentials: true
    })
    if ([200, 201].includes(response.status)) {
      return response.data
    } else {
      throw new Error(response.statusText)
    }
  } catch (error) {
    alert('Bạn chưa login')
  }
}
