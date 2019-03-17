using System.Collections.Generic;
using System.Threading.Tasks;
using DatingApp.API.Helpers;
using DatingApp.API.Models;

namespace DatingApp.API.Repositories
{
  public interface IDatingRepository
  {
    void Add<T>(T entity) where T : class;
    void Delete<T>(T entity) where T : class;

    // returns true if one or more changes to database
    Task<bool> SaveAll();
    Task<PagedList<User>> GetUsers(UserParams userParams);
    Task<User> GetUser(int id);
    Task<Photo> GetPhoto(int id);
    Task<Photo> GetMainPhotoForUser(int userId);
  }
}