import mainServices from './HttpServices/mainServices'

const apiEndPoint = 'user'

class UserServices {
  async me() {
    const data = {
      route: `${apiEndPoint}/me`
    }
    return await mainServices.get(data)
  }
}

export default new UserServices()
