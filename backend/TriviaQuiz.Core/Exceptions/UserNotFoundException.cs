namespace TriviaQuiz.Core.Exceptions
{
    /// <summary>
    /// // Specific Exception for Not Found Scenarios
    /// </summary>
    public class UserNotFoundException: TriviaQuizException
    {
        public UserNotFoundException(string username)
            : base($"User '{username}' was not found.") { }
    }
}
