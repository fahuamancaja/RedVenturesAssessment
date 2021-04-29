using System.Collections.Generic;
using System.Threading.Tasks;
using API.Entities;

namespace API.Interfaces
{
    public interface IPointRepository
    {
        Task<IEnumerable<LoyaltyProgram>> GetLoyaltyProgramsAsync();
        Task<LoyaltyProgram> GetLoyaltyProgramAsync(string username);
    }
}