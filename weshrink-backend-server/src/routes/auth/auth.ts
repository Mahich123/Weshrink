// import { Hono } from 'hono'
// import { cors } from 'hono/cors'
// import { initAuthConfig, authHandler, verifyAuth } from '@hono/auth-js'
// import { getAuthConfig } from '../../../auth.config'

// const app = new Hono()
// // .use('/*', cors())
// // app
// //   .use(
// //     '/*',
// //     cors({
// //       origin: ['*'],
// //     }),
// //   )
//   .use('*', initAuthConfig(getAuthConfig))
//   .use('/auth/*', authHandler())
//   .get('/user', verifyAuth(), (c) => {
//     const auth = c.get('authUser')
//     return c.json({
//       message: 'This is a protected route',
//       user: auth,
//     })
//   })
//   .get('/hello', (c) => {
//     return c.json({ message: 'hello there' })
//   })

// export default app
