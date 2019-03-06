
const app = require('./start')

const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`application running on port ${port}`)
})