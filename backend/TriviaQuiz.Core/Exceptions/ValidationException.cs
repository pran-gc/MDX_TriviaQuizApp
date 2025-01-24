namespace TriviaQuiz.Core.Exceptions
{
    public class ValidationException: TriviaQuizException
    {
        public ValidationException(string message) : 
            base($"Validation error: '{message}'.") { }
    }
}
