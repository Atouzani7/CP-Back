import { DataSource } from "typeorm";

export default new DataSource({
    type: "sqlite",
    database: "CP-country.sqlite",
    entities: ["src/entities/*.ts"],
    synchronize: true,
    // logging: ["query","error"],
    logging: true,
})