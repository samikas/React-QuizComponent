import React, { Component } from 'react'

class QuizEnd extends Component{
    render(){
        const isQuizEnd = (this.state.quiz_position - 1) === quizData.quiz_questions.length
        return(
            <div>
                <p>Thanks for playing!</p>
                <a href=''>Reset Quiz</a>
          </div>
        )
    }
}

export default QuizEnd