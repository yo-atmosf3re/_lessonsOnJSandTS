export type GovStrType = {
   title: string
}

export type GovAddType = {
   street: GovStrType
}

export type GovermentBuildingsType = {
   type: 'HOSPITAL' | 'FIRE-STATION'
   budget: number
   staffCount: number
   address: GovAddType
}

export type StreetType = {
   title: string
}

export type AddressType = {
   number: number
   street: StreetType
}

export type CityType = {
   title: string
   houses: Array<HouseType>
   govermentBuildings: Array<GovermentBuildingsType>
   citizensNumber: number
}

export type HouseType = {
   buildedAt: number
   repaired: boolean
   address: AddressType
   id?: number
}