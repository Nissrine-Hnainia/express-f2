//1-require/import express 
const express = require('express')

//2- init the application
const app = express()


//5-routing
app.get('/', (req, res) => {
    res.send('<h2> this is the home page </h2>')
    console.log(req.method)
    console.log(req.url)
})

app.get('/about', (req, res) => {
    res.send('<h2> this is the about page </h2>')
})

app.get('/products/:productId', (req, res) => {
    const {productId} = req.params
    res.send(`<h2> this is the products page and the product id is : ${productId} </h2>`)
    // res.send("<h2> this is the products page and the product id is :" +productId+ " </h2>")
})

app.get("*", (req, res) => {
    res.send("<h2> 404 not found </h2>")
})


//6-middleware
// function first(req, res, next){
//     console.log('I am the first middleware')
//     next()
// }







// function second(req, res, next){
//     console.log('I am the second middleware')
//     next()
// }

// app.use(first)
// app.use(second)

// app.get('/', (req, res, next) => {
//     res.send('response received, check the terminal')
//     console.log('I am the finishing point')
// })



//3-create the port 
const PORT = 5005

//4-running the app
app.listen(PORT, err => 
    err? console.log(err) : console.log(`The app is listening on port ${PORT}`))
