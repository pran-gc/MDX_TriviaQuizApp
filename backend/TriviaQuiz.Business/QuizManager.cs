using TriviaQuiz.Core;
using TriviaQuiz.Core.Exceptions;
using TriviaQuiz.Core.Interfaces;

namespace TriviaQuiz.Business
{
    public class QuizManager 
    {
        private readonly IUserRepository _userRepository;

        public QuizManager(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

       
    }
}
