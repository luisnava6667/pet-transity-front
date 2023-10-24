export { default } from 'next-auth/middleware'

export const config = {
  matcher: [
    '/dashboard',
    '/animales',
    '/animales/[id]',
    '/addPet',
    '/mapa',
    '/refugios',
    '/viewPet'
  ]
}
