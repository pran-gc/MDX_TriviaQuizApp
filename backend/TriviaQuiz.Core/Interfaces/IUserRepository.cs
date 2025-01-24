namespace TriviaQuiz.Core.Interfaces
{
    /// <summary>
    /// User Repository Interface (Abstraction for Data Layer)
    /// </summary>
    public interface IUserRepository
    {
        void AddUser(string username, int score);
        List<User> GetUsers();
        void UpdateUserScore(string username, int newScore);
        void DeleteUser(string username);

    }
}
