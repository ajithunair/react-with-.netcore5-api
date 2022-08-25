using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApi.Entities;

namespace WebApi.Repositories
{
    public class HouseRepository : IHouseRepository
    {
        private readonly HouseContext context;

        public HouseRepository(HouseContext context)
        {
            this.context = context;
        }

        public async Task CreateHouseAsync(HouseEntity house)
        {
            context.Houses.Add(house);
            await context.SaveChangesAsync();
        }

        public async Task DeleteHouseAsync(int id)
        {
            context.Houses.Remove(context.Houses.Where(h => h.Id == id).SingleOrDefault());
            await context.SaveChangesAsync();
        }

        public async Task<HouseEntity> GetHouseAsync(int id)
        {
            var result = context.Houses.Where(h => h.Id == id).SingleOrDefault();
            return await Task.FromResult(result);
        }

        public async Task<IEnumerable<HouseEntity>> GetHousesAsync()
        {
            var result = context.Houses;
            return await Task.FromResult(result);
        }

        public async Task UpdateHouseAsync(HouseEntity house)
        {
            var existingHouse = context.Houses.FirstOrDefault(h => h.Id == house.Id);
            if(existingHouse != null)
            {
                existingHouse.Country = house.Country;
                existingHouse.Address = house.Address;
                existingHouse.Description = house.Description;
                existingHouse.Price = house.Price;
                existingHouse.Photo = house.Photo;
            }
            await context.SaveChangesAsync();
        }
    }
}
