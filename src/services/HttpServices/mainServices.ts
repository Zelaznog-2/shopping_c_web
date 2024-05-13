import httpCommon from './http'

class MainService {
  getAuthorization(auth: boolean) {
    const headers = {
      authorization: import.meta.env.VITE_TOKEN_URL,
      'Content-Type': 'application/json'
    }
    if (auth && localStorage.getItem('token')) {
      headers.authorization = `${localStorage.getItem('token')}`
    }
    return headers
  }

  get(data: any, auth: boolean = true) {
    const headers = this.getAuthorization(auth)
    const params = data.params
    return httpCommon.get(data.route, { params, headers })
  }

  post(data: any, auth: boolean = true) {
    const headers = this.getAuthorization(auth)
    return httpCommon.post(data.route, data.params, { headers })
  }

  formPost(data: any, auth: boolean = true) {
    const headers = this.getAuthorization(auth)
    headers['Content-Type'] = 'multipart/form-data'

    const params = Object.keys(data.params)
    const formData = new FormData()

    params.map((paramName) => {
      formData.append(paramName, data.params[paramName])
    })

    return httpCommon.post(data.route, formData, { headers })
  }

  put(data: any, auth: boolean = true) {
    const headers = this.getAuthorization(auth)
    return httpCommon.put(data.route, data.params, { headers })
  }

  delete(data: any, auth: boolean = true) {
    const headers = this.getAuthorization(auth)
    const params = data.params
    return httpCommon.delete(data.route, { params, headers })
  }
}

export default new MainService()
