import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Country, CreateCountryInput } from "../entities/Country.entity";
import CountryService from "../services/country.service";

@Resolver(() => Country)
export default class CountryResolver {

    @Query(() => [Country])
    async listCountries(){
        const countries = await new CountryService().list();
        return countries;
    }
    

    @Query(() => [Country])
    async findCountryById(@Arg('id') id: string) {
        return await new Country
    }

    @Mutation(() => Country)
    async createCountry(@Arg('data') data: CreateCountryInput){
        const newCountry = await new CountryService().createCountry({...data});
        return newCountry;
    }
}