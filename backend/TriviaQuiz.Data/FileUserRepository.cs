using TriviaQuiz.Core;
using TriviaQuiz.Core.Exceptions;
using TriviaQuiz.Core.Interfaces;

namespace TriviaQuiz.Data
{
    /// <summary>
    /// Data Layer Implementation for User Repository
    /// </summary>
    public class FileUserRepository : IUserRepository
    {
        private const string FilePath = @"Data\users.txt";

        public void AddUser(string username, int score)
        {
            throw new NotImplementedException();
        }

        public void DeleteUser(string username)
        {
            throw new NotImplementedException();
        }

        public List<User> GetUsers()
        {
            throw new NotImplementedException();
        }

        public void UpdateUserScore(string username, int newScore)
        {
            throw new NotImplementedException();
        }
    }
}
