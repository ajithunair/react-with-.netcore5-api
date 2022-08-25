using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApi.DTOs;
using WebApi.Entities;
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

        [HttpPost]
        public async Task<ActionResult<HouseDto>> CreateHouseAsync([FromBody]HouseDto houseDto)
        {
            HouseEntity house = new()
            {
                Country = houseDto.Country,
                Address = houseDto.Address,
                Description = houseDto.Description,
                Price = houseDto.Price,
                Photo = houseDto.Photo
            };
            await repository.CreateHouseAsync(house);
            return CreatedAtAction(nameof(GetHouseAsync), new { id = house.Id }, house.AsDto());
        }

        [HttpPut]
        public async Task<ActionResult> UpdateHouseAsync([FromBody] HouseDto houseDto)
        {
            var existingHouse = await repository.GetHouseAsync(houseDto.Id);
            if (existingHouse == null)
                return NotFound();

            HouseEntity house = existingHouse with
            {
                Country = houseDto.Country,
                Description = houseDto.Description,
                Address = houseDto.Address,
                Price = houseDto.Price,
                Photo = houseDto.Photo
            };
            await repository.UpdateHouseAsync(house);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteHouse(int id)
        {
            var existingHouse = await repository.GetHouseAsync(id);
            if (existingHouse == null)
                return NotFound();

            await repository.DeleteHouseAsync(id);
            return NoContent();
        }
    }
}
