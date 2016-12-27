let api
switch (process.env.NODE_ENV) {
  case 'development':
    api = 'http://pin.haibaozhuli.test.willar.net'
    break
  case 'production':
    api = 'http://pin1212.haibaozhuli.api.willar.net'
    break
  case 'testing':
    api = ''
    break
}

export default api
