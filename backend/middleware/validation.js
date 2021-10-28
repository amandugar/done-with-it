module.exports = schema => (req, res, next) => {
  let data = req.body

  if (req.body.location) {
    data = {
      ...data,
      location: JSON.parse(data.location),
    }
  }

  const result = schema.validate(data)

  if (result.error) {
    return res.status(400).send({ error: result.error.details[0].message })
  }

  next()
}
