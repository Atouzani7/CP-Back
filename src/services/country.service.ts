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

    async findCountryById(id: string){
        return await this.db.findOne({
            where: { id }
        })
    }

    async findByCode(code: string){
        return await this.db.findOne({
            where: {code}
        })
    }

    async list() {
        const countries = await this.db.find({})
        return countries;
    }




}