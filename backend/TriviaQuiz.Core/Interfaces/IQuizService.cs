namespace TriviaQuiz.Core.Interfaces
{
    /// <summary>
    /// Quiz Service Interface (Abstraction for Service Layer)
    /// </summary>
    public interface IQuizService
    {
        void RegisterUser(string username);
        List<User> GetLeaderboard();
        void UpdateScore(string username, int score);
        void RemoveUser(string username);
        void StartQuizGame();
    }
}
