using System.Collections.Generic;
using System.Text.Json;
using System.Threading.Tasks;
using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class Seed
    {
        public static async Task LoyaltyPrograms(DataContext context)
        {
            if(await context.LoyaltyPrograms.AnyAsync()) return;

            var loyaltyProgramsData = await System.IO.File.ReadAllTextAsync("Data/LoyaltyProgramsSeedData.json");
            var loyaltyPrograms = JsonSerializer.Deserialize<List<LoyaltyProgram>>(loyaltyProgramsData);
            foreach (var program in loyaltyPrograms)
            {
                context.LoyaltyPrograms.Add(program);
            }
            await context.SaveChangesAsync();
        }
    }
}