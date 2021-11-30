const toResponse = (res, {status, entity, message} = {}) => {
    if (status) {
        return res.status(200).json(entity);
    }

    return res.status(403).json(message);
}


module.exports = {
    toResponse
}
