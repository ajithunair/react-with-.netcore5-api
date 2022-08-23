using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApi.DTOs;
using WebApi.Repositories;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HousesController : ControllerBase
    {
        private readonly IHouseRepository repository;

        public HousesController(IHouseRepository repository)
        {
            this.repository = repository;
        }

        [HttpGet]
        public async Task<IEnumerable<HouseDto>> GetHousesAsync()
        {
            return (await repository.GetHousesAsync()).Select(h => h.AsDto());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<HouseDto>> GetHouseAsync(int id)
        {
            var house = await repository.GetHouseAsync(id);
            if (house == null)
                return NotFound();

            return house.AsDto();
        }
    }
}
