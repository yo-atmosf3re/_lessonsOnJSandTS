import { GovermentBuildingsType, HouseType } from "../object_02/02_02";

export const getStreetsTitlesOfGovermentsBuildings = (buildings: Array<GovermentBuildingsType>) => {
   return buildings.map(b => b.address.street.title)
}

export const getStreetsTitlesOfHouse = (streetsTitle: Array<HouseType>) => {
   return streetsTitle.map(s => s.address.street.title)
}

export const createMessages = (message: Array<HouseType>) => {
   return message.map(m => `Hello guys from ${m.address.street.title}`)
}  