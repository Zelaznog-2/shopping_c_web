const functionUtil = {
  formatCurrency(price: number): string {
    return Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(price)
  }
}

export default functionUtil
