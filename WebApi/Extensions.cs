using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApi.DTOs;
using WebApi.Entities;

namespace WebApi
{
    public static class Extensions
    {
        public static HouseDto AsDto(this HouseEntity houseEntity)
        {
            return new HouseDto
            {
                Id = houseEntity.Id,
                Address = houseEntity.Address,
                Country = houseEntity.Country,
                Description = houseEntity.Description,
                Price = houseEntity.Price,
                Photo = houseEntity.Photo
            };
        }
    }
}
