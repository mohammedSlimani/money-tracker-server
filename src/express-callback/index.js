module.exports = function makeExpressCallabck(controller) {
    return (req, res) => {
        const httpRequest = {
            body: req.body,
            query: req.query,
            params: req.params,
            method: req.method,
        }
        controller(httpRequest)
            .then(httpResponse => {
                res.type('json')
                res.status(httpResponse.statusCode).send(httpResponse.body)
            })
            .catch(e => res.status(500).send({ error: 'An unkown error occurred.' }))
    }
}
