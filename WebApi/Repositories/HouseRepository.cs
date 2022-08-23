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
    }
}
