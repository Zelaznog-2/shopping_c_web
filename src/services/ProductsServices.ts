import mainServices from './HttpServices/mainServices'

const apiEndPoint = 'products'

class ProductsService {
  async getProducts(params: any) {
    const data = {
      route: `${apiEndPoint}/`,
      params: params
    }
    return await mainServices.get(data, false)
  }
}

export default new ProductsService()
