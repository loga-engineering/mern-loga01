

const ok = (entity) => {
    return {
        entity,
        status: true,
    }
}

const ko = (message) => {
    return {
        message,
        status: false,
    }
}

module.exports = {
    ko, ok
}
