namespace TriviaQuiz.Core.Interfaces
{
    /// <summary>
    ///  // Quiz Manager Interface (Abstraction for Business Layer)
    /// </summary>
    public interface IQuizManager
    {
            void RegisterUser(string username);
            List<User> GetLeaderboard();
            void UpdateScore(string username, int score);
            void RemoveUser(string username);
    }
}
