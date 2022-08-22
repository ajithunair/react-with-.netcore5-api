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
    }
}
