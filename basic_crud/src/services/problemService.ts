import axios from 'axios'

import { apiBaseUrl } from '../constants'
const getAllProblems = async () => {
  const response = await axios.get((`${apiBaseUrl}/problems`))
  return response.data
}

export default {
  getAllProblems
}