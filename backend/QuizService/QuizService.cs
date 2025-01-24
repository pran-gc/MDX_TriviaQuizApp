using TriviaQuiz.Core;
using TriviaQuiz.Core.Interfaces;

namespace TriviaQuiz.Service
{
    public class QuizService : IQuizService
    {
        private readonly IQuizManager _quizManager;

        public QuizService(IQuizManager quizManager)
        {
            _quizManager = quizManager;
        }

        public List<User> GetLeaderboard()
        {
            // Sort in descending order by score
            return _quizManager.GetLeaderboard().OrderByDescending(user => user.Score).ToList();
        }

        public void RegisterUser(string username)
        {
            _quizManager.RegisterUser(username);
        }

        public void RemoveUser(string username)
        {
            _quizManager.RemoveUser(username);
        }

        public void StartQuizGame()
        {
            throw new NotImplementedException();
        }

        public void UpdateScore(string username, int score)
        {
            _quizManager.UpdateScore(username, score);
        }
    }
}
