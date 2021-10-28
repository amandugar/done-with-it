import { create } from "apisauce"
import axios from "axios"

const apiClient = create({
  baseURL: "http://6ab8-122-161-87-27.ngrok.io/api",
})

export default apiClient
