const express = require("express")
const helmet = require("helmet")
const projectsRouter = require("./projects/projects-router")

const server = express()
const port = 5000

server.use(helmet())
server.use(express.json())

server.use("/projects", projectsRouter)

server.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({
        message: "Server error",
    })
})

server.listen(port, () => {
    console.log(`Server listening on ${port}`)
})