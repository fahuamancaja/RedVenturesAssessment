﻿// <auto-generated />
using API.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace API.Data.Migrations
{
    [DbContext(typeof(DataContext))]
    [Migration("20210429185221_InitialCreate")]
    partial class InitialCreate
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "5.0.5");

            modelBuilder.Entity("API.Entities.AppPoint", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("active")
                        .HasColumnType("TEXT");

                    b.Property<string>("create_by")
                        .HasColumnType("TEXT");

                    b.Property<string>("create_date")
                        .HasColumnType("TEXT");

                    b.Property<string>("icon_url")
                        .HasColumnType("TEXT");

                    b.Property<string>("loyalty_unit")
                        .HasColumnType("TEXT");

                    b.Property<string>("name")
                        .HasColumnType("TEXT");

                    b.Property<string>("point_id")
                        .HasColumnType("TEXT");

                    b.Property<string>("tpg_valuation")
                        .HasColumnType("TEXT");

                    b.Property<string>("type")
                        .HasColumnType("TEXT");

                    b.Property<string>("update_by")
                        .HasColumnType("TEXT");

                    b.Property<string>("update_date")
                        .HasColumnType("TEXT");

                    b.Property<string>("website_url")
                        .HasColumnType("TEXT");

                    b.HasKey("id");

                    b.ToTable("Points");
                });
#pragma warning restore 612, 618
        }
    }
}
