using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Entities;
using API.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class PointRepository : IPointRepository
    {
        private readonly DataContext _context;
        public PointRepository(DataContext context)
        {
            _context = context;
        }

        public async Task<LoyaltyProgram> GetLoyaltyProgramAsync(string pointId)
        {
            return await _context.LoyaltyPrograms
                .Where(x => x.point_id == pointId)
                .SingleOrDefaultAsync();
        }

        public async Task<IEnumerable<LoyaltyProgram>> GetLoyaltyProgramsAsync()
        {
            return await _context.LoyaltyPrograms
                .ToListAsync();
        }
    }
}