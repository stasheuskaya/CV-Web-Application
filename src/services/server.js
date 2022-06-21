import { createServer } from "miragejs"
import { timeLineData, skillsData } from "../mock_data/mock_data"

export default function server() {
    createServer({
        routes() {
            this.timing = 2000
            this.get("/api/educations", () => timeLineData)
            this.get("/api/skills", () => skillsData)
            this.post("/api/skills", (_schema, request) => {
                let attrs = JSON.parse(request.requestBody)
                console.log(attrs)
              })
        },
    })
}