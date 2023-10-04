import axios from 'axios'

const clienteAxios = axios.create({
  baseURL: `https://api-pet-beak.onrender.com/`
})

export default clienteAxios
