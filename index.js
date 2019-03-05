
const app = require('./start')

const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`listening to port ${port}`)
})