const express = require('express')
const path = require('path')
const { products, people } = require('./data')

const app = express()


app.get('/', (req, res) => {
    res.send('<h1> Home Page</h1><a href="/api/products">products</a>')
  })

app.get('/api/products', (req, res) => {
    const newProducts = products.map( (product) => {
        const {id, name, image} = product
        return {id, name, image}
    })
    res.json(newProducts)
})

app.get('/api/products/:productID', (req, res) => {
    console.log(req.params.productID) //Always a string)
    const { productID } = req.params
    console.log(productID)
    const singleProduct = products.find( product => product.id === Number(productID)  )

    if (!singleProduct){
        return res.status(404).send(`product '${productID}' was not found`)
    } 

    res.json(singleProduct)
})

app.get('/api/v1/query', (req, res) => {
    //console.log(req.query)
    const { search, limit } = req.query //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
    let sortedProducts = [ ... products ]

    if ( search ) {
            sortedProducts = sortedProducts.filter( product => { return product.name.startsWith(search) } )
    }
    if ( limit ) {
        sortedProducts = sortedProducts.slice( 0, Number(limit))
    }

    if ( sortedProducts.length < 1 ){
        return res.status(200).json({sucess:true, data:[]})
    }

    return res.status(200).json(sortedProducts)
})

app.all('*', (req, res) => {
    res.status(404).send('resource not found')
})

app.listen(5000, () => {
    console.log('Sever on port 5000...')
})

