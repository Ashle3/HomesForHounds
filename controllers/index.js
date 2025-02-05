const titleFunction = (req, res, next) => {
    res.send("Homes for Hounds");
}

const smallDogs = (req, res, next) => {
    res.send("Small Dogs Page")
}

const largeDogs = (req, res, next) => {
    res.send("Large Dogs Page")
}

module.exports = { titleFunction, smallDogs, largeDogs };