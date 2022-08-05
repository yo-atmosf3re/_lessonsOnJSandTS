import { StudentType } from "../object_02/02"
import { CityType, GovermentBuildingsType, HouseType } from "../object_02/02_02";

export const addSkill = (student: StudentType, skill: string) => {
   student.technologies.push({
      id: new Date().getTime(),
      title: skill
   })
}

export function makeStudentActive(s: StudentType) {
   s.isActive = true;
}

export const doesStudentLiveIn = (s: StudentType, cityName: string) => {
   return s.address.city.title === cityName;
}

export const addMoneyToBudget = (building: GovermentBuildingsType, budget: number) => {
   return building.budget -= 100000

}

export const repairHouse = (rep: HouseType) => {
   return rep.repaired = true;
}

export const toFireStaff = (stch: GovermentBuildingsType, staffCountToFire: number) => {
   return stch.staffCount -= staffCountToFire;
}

export function toHireStaff(stch: GovermentBuildingsType, staffCountToHire: number) {
   return stch.staffCount += staffCountToHire;
}