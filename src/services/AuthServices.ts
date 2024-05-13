import mainServices from './HttpServices/mainServices'

const apiEndPoint = 'auth'

class AuthService {
  /**
   * login a user
   * @param params data of login
   * @returns
   */
  async login(params: Object) {
    const data = {
      route: `${apiEndPoint}/login`,
      params
    }
    return await mainServices.post(data, false)
  }

  async loginId(params: Object) {
    const data = {
      route: `${apiEndPoint}/loginId`,
      params
    }
    return await mainServices.post(data, false)
  }

  /**
   * register a user
   * @param params data of register
   * @returns
   */
  async register(params: Object) {
    const data = {
      route: `${apiEndPoint}/register`,
      params
    }
    return await mainServices.post(data, false)
  }

  /**
   * Reset password of the user account
   * @param params data of password reset
   * @returns
   */
  async passwordReset(params: Object) {
    const data = {
      route: `${apiEndPoint}/password/reset`,
      params
    }
    return await mainServices.post(data, false)
  }
}

export default new AuthService()
