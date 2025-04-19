
async function getProducts () {
  // Error Handling
  try {
    const response = await axios.get('http://localhost:3000/products')

    console.log('response =>', response.data.data)

    const products = response.data.data

    const table = document.getElementById('main-table')
    const tbody = table.querySelector('tbody')

    const headers = [
      'product_id',
      'product_name',
      'price'
    ]

    for (const product of products) {
      const items = Object.keys(product).filter(key => {
        if (headers.includes(key)) {
          return key
        }
      })

      const tr = document.createElement('tr')

      for (const item of items) {
        const td = document.createElement('td')
        td.innerHTML = product[item]

        tr.appendChild(td)
      }

      tbody.appendChild(tr)
    }
  } catch (error) {
    console.error(error)
  }
}

getProducts()
