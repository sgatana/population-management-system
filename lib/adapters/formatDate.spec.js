const formatDate = require('./formatDate')

describe('#formatDate', () => {
  it('should form date', () =>{
    const date = '2019-03-06 23:39:45.744+03'
    const formattedDate = formatDate(date)
    expect(formattedDate).toBe('2019-03-06')
  })
})