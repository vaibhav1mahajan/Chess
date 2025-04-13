import { exec } from 'child_process'

const host = process.env.DB_HOST || 'postgres'
const port = process.env.DB_PORT || '5432'

const check = () => {
  exec(`nc -z ${host} ${port}`, (err) => {
    if (err) {
      console.log(`Waiting for postgres at ${host}:${port}...`)
      setTimeout(check, 1000)
    } else {
      console.log('Postgres is ready 🚀')
      process.exit(0)
    }
  })
}

check()
