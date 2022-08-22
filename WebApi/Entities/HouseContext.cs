using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Entities
{
    public class HouseContext : DbContext
    {
        public HouseContext(DbContextOptions<HouseContext> options) : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<HouseEntity>().Property(p => p.Price).HasColumnType("decimal(18,4)");
            //base.OnModelCreating(modelBuilder);
        }

        public DbSet<HouseEntity> Houses { get; set; }
    }
}
