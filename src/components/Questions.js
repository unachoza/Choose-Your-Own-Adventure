import React, {Component} from 'react'
import '../AdventureArrays'

class Questions extends Component {
    constructor(props)
    super(props)
    state = {
        currentQuestion: '',
    }

    componentDidMount() {
        axios.fetch(this.props.questionsArray[0])
        .this.setState(this.state.currentQuestion[0])
        }
    nextQuestion() {
        // when user chooses answer, depending on answer needs to display correct quesiton that corresponds.
    }

    render() {
    
    return (
        <div>?</div>
    )
    }

}
export default Questions 
