namespace TriviaQuiz.Core.Exceptions
{
    /// <summary>
    /// Base Exception Class for the application
    /// </summary>
    public class TriviaQuizException : Exception
    {
        public TriviaQuizException(string message) : base(message) { }
    }
}
