using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApi.Entities;

namespace WebApi.Repositories
{
    public interface IHouseRepository
    {
        Task<IEnumerable<HouseEntity>> GetHousesAsync();
        Task<HouseEntity> GetHouseAsync(int id);
        Task CreateHouseAsync(HouseEntity house);
        Task UpdateHouseAsync(HouseEntity house);
        Task DeleteHouseAsync(int id);
    }
}
