import axios from 'axios'

const clienteAxios = axios.create({
  baseURL: `https://giant-jersey-colt.cyclic.app/`
})

export default clienteAxios
