import { AppDataSource } from "./config/data-source"
import server from "./server"

AppDataSource.initialize().then(async () => {

    console.log("Data Sourse has been initialized!")

    server.listen(3000, () => {
        console.log("Server is running on port 3000")
    })

}).catch(error => console.log(error))
