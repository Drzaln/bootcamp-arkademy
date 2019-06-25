exports.ok = (val, res, err) => {
    const data = {
        error : err,
        status: 200,
        result: val
    }
    res.json (data)
    res.end()
}