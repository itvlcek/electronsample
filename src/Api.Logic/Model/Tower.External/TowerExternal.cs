using System;
using Microsoft.EntityFrameworkCore;

namespace Api.Logic.Model.Tower_External
{
    public partial class TowerExternal : DbContext
    {
       
        public virtual DbSet<ShipmentJsonDefs> ShipmentJsonDefs { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            #warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
            optionsBuilder.UseSqlServer("TODO - FILL");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<ShipmentJsonDefs>(entity =>
            {
                entity.ToTable("ShipmentJsonDefs", "Tower");

                entity.Property(e => e.CalDay).HasColumnType("datetime");

                entity.Property(e => e.DriverId).HasMaxLength(50);

                entity.Property(e => e.JsonDefinition)
                    .IsRequired()
                    .HasColumnType("ntext");

                entity.Property(e => e.ShipPoint)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.ShipmentId)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.TourNumber).HasColumnType("nchar(50)");

                entity.Property(e => e.TourType)
                    .IsRequired()
                    .HasMaxLength(30);
            });
        }
    }
}