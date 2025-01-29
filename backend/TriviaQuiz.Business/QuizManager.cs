using TriviaQuiz.Core;
using TriviaQuiz.Core.Exceptions;
using TriviaQuiz.Core.Interfaces;

namespace TriviaQuiz.Business
{
    public class QuizManager : IQuizManager
    {
        private readonly IUserRepository _userRepository;

        public QuizManager(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public List<User> GetLeaderboard()
        {
            return _userRepository.GetUsers();
        }

        public void RegisterUser(string username)
        {

            if (string.IsNullOrWhiteSpace(username))
            {
                throw new ValidationException("Username cannot be empty.");
            }

            var users = _userRepository.GetUsers();

            // If the user does not exist
            if (!users.Exists(u => u.Username == username))
            {
                // Add the user
                _userRepository.AddUser(username, 0);
            }
        }

        public void RemoveUser(string username)
        {
            _userRepository.DeleteUser(username);
        }

        public void UpdateScore(string username, int score)
        {
            if (score < 0)
            {
                throw new ValidationException("Score cannot be negative.");
            }

            _userRepository.UpdateUserScore(username, score);
        }
    }
}
