using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Entities
{
    public record HouseEntity
    {
        public int Id { get; set; }
        public string? Address { get; set; }
        public string? Country { get; set; }
        public string? Description { get; set; }
        public decimal Price { get; set; }
        public string? Photo { get; set; }

    }
}
