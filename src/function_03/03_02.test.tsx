import exp from "constants";
import { CityType } from "../object_02/02_02";
import { addMoneyToBudget, repairHouse, toFireStaff, toHireStaff } from "./03";


let city: CityType;

beforeEach(() => {
   city = {
      title: 'New York',
      houses: [
         {
            buildedAt: 2012,
            repaired: false,
            address: {
               number: 100,
               street: {
                  title: 'White street',
               }
            }
         },
         {
            buildedAt: 2008,
            repaired: false,
            address: {
               number: 100,
               street: {
                  title: 'Happy street',
               }
            }
         },
         {
            buildedAt: 2020,
            repaired: false,
            address: {
               number: 101,
               street: {
                  title: 'Happy street'
               }
            }
         },],
      govermentBuildings: [
         {
            type: 'HOSPITAL',
            budget: 200000,
            staffCount: 200,
            address: {
               street: {
                  title: "Central Str"
               }
            }
         },
         {
            type: 'FIRE-STATION',
            budget: 500000,
            staffCount: 1000,
            address: {
               street: {
                  title: "South Str"
               }
            }
         }
      ],
      citizensNumber: 1000000,
   }
})

test.skip('Budget should be changed for HOSPITAL', () => {
   addMoneyToBudget(city.govermentBuildings[0], 100000);

   expect(city.govermentBuildings[0].budget).toBe(300000);
   // expect(city.govermentBuildings[1].budget).toBe(500000);
})

test.skip('Budget should be changed for FIRE-STATION', () => {
   addMoneyToBudget(city.govermentBuildings[1], -100000);

   expect(city.govermentBuildings[1].budget).toBe(400000);
})

test.skip('House should be repared', () => {
   repairHouse(city.houses[1]);

   expect(city.houses[1].repaired).toBeTruthy();
})

test.skip('Staff should be increased', () => {
   toFireStaff(city.govermentBuildings[0], 20);

   expect(city.govermentBuildings[0].staffCount).toBe(180);
})

test.skip('Staff should be increased', () => {
   toHireStaff(city.govermentBuildings[0], 20);

   expect(city.govermentBuildings[0].staffCount).toBe(220);
})
