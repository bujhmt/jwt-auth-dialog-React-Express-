import express from 'express'
import config from 'config'
import bodyParser from 'body-parser'
import morgan from 'morgan'


const app: express.Application = express()
const PORT: number = config.get('port') || 5000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(morgan('dev'))

// error handle
app.use(function (err, req, res, next) {
    console.log('###############')
    console.log('ERROR')
    console.log(err.message)
    console.log('###############')

    res.status(500).send({ message: 'Oops, the server got sick' })
    res.end('')
})



app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}...`)
})