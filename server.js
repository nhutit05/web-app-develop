const app = require("./app")
const config = require("")

/**Start Server */

const PORT = config.app.port

app.listen(port, () => {
    console.log(`Server is running on port ${PORT}.`);
})
