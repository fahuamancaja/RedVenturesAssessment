using System.Collections.Generic;
using System.Text.Json;
using System.Threading.Tasks;
using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class Seed
    {
        public static async Task SeedPoints(DataContext context)
        {
            if(await context.Points.AnyAsync()) return;

            var pointsData = await System.IO.File.ReadAllTextAsync("Data/PointsSeedData.json");
            var points = JsonSerializer.Deserialize<List<AppPoint>>(pointsData);
            foreach (var point in points)
            {
                context.Points.Add(point);
            }
            await context.SaveChangesAsync();
        }
    }
}