using Microsoft.AspNetCore.Mvc;
using TriviaQuiz.Core.Exceptions;
using TriviaQuiz.Core.Interfaces;

namespace TriviaQuiz.WebApi.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class QuizController : Controller
    {
        private readonly IQuizService _quizService;

        public QuizController(IQuizService quizService)
        {
            _quizService = quizService;
        }

        [HttpPost("register")]
        public IActionResult RegisterUser([FromQuery] string username)
        {
            try
            {
                _quizService.RegisterUser(username);
                return Ok($"User '{username}' registered successfully.");
            }
            catch (TriviaQuizException ex)
            {
                return BadRequest(new { Message = ex.Message });
            }
        }

        [HttpGet("leaderboard")]
        public IActionResult GetLeaderboard()
        {
            try
            {
                var leaderboard = _quizService.GetLeaderboard();
                return Ok(leaderboard);
            }
            catch (TriviaQuizException ex)
            {
                return BadRequest(new { Message = ex.Message });
            }
        }

        [HttpPut("update-score")]
        public IActionResult UpdateScore([FromQuery] string username, [FromQuery] int score)
        {
            try
            {
                _quizService.UpdateScore(username, score);
                return Ok($"Score updated for user '{username}'.");
            }
            catch (TriviaQuizException ex)
            {
                return BadRequest(new { Message = ex.Message });
            }
        }

        [HttpDelete("remove")]
        public IActionResult RemoveUser([FromQuery] string username)
        {
            try
            {
                _quizService.RemoveUser(username);
                return Ok($"User '{username}' removed successfully.");
            }
            catch (TriviaQuizException ex)
            {
                return BadRequest(new { Message = ex.Message });
            }
        }
    }
}
