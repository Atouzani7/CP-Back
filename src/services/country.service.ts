import { Repository } from "typeorm";
import { Country, CreateCountryInput } from "../entities/Country.entity";
import datasource from '../db'

export default class CountryService {
    db: Repository<Country>

    constructor(){ 
        this.db = datasource.getRepository(Country)
    }

    async createCountry({name, code}: CreateCountryInput ){
        const newCountry = this.db.create({ name, code });
        return await this.db.save(newCountry)
    }

    async finddCoutryById(id: string){
        return await this.db.findOne({
            where: { id }
            // relations: {}
        })
    }


}