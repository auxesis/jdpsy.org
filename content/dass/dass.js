"use strict"

const questions = [
  { type: "stress", text: "I found it hard to wind down." },
  { type: "anxiety", text: "I was aware of dryness of my mouth." },
  {
    type: "depression",
    text: "I couldn’t seem to experience any positive feeling at all.",
  },
  { type: "anxiety", text: "I experienced breathing difficulty." },
  {
    type: "depression",
    text: "I found it difficult to work up the initiative to do things.",
  },
  { type: "stress", text: "I tended to over-react to situations." },
  { type: "anxiety", text: "I experienced trembling (eg, in the hands)." },
  { type: "stress", text: "I felt that I was using a lot of nervous energy." },
  {
    type: "anxiety",
    text: "I was worried about situations in which I might panic and make a fool of myself.",
  },
  { type: "depression", text: "I felt that I had nothing to look forward to." },
  { type: "stress", text: "I found myself getting agitated." },
  { type: "stress", text: "I found it difficult to relax." },
  { type: "depression", text: "I felt down-hearted and blue." },
  {
    type: "stress",
    text: "I was intolerant of anything that kept me from getting on with what I was doing.",
  },
  { type: "anxiety", text: "I felt I was close to panic." },
  {
    type: "depression",
    text: "I was unable to become enthusiastic about anything.",
  },
  { type: "depression", text: "I felt I wasn’t worth much as a person." },
  { type: "stress", text: "I felt that I was rather touchy." },
  {
    type: "anxiety",
    text: "I was aware of the action of my heart in the absence of physical exertion.",
  },
  { type: "anxiety", text: "I felt scared without any good reason." },
  { type: "depression", text: "I felt that life was meaningless." },
]

class DassQuestion extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const i = this.props.number
    return (
      <li>
        <div className="form-group">
          <p>{this.props.text}</p>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name={"q-" + i}
              id={"q-" + i + "-0"}
              value="0"
              onClick={() => this.props.onAnswer({ number: i, value: 0 })}
              required
            />
            <label className="form-check-label" htmlFor={"q-" + i + "-0"}>
              Never
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name={"q-" + i}
              id={"q-" + i + "-1"}
              value="1"
              onClick={() => this.props.onAnswer({ number: i, value: 1 })}
              required
            />
            <label className="form-check-label" htmlFor={"q-" + i + "-1"}>
              Sometimes
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name={"q-" + i}
              id={"q-" + i + "-2"}
              value="2"
              onClick={() => this.props.onAnswer({ number: i, value: 2 })}
              required
            />
            <label className="form-check-label" htmlFor={"q-" + i + "-2"}>
              Often
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name={"q-" + i}
              id={"q-" + i + "-3"}
              value="3"
              onClick={() => this.props.onAnswer({ number: i, value: 3 })}
              required
            />
            <label className="form-check-label" htmlFor={"q-" + i + "-3"}>
              Almost always
            </label>
          </div>
        </div>
      </li>
    )
  }
}

class DassResults extends React.Component {
  constructor(props) {
    super(props)
  }
  depressionScore() {
    return this.props.answers
      .filter((q) => q.type == "depression")
      .map((q) => q.value)
      .reduce((a, b) => a + (b || 0), 0)
  }
  anxietyScore() {
    return this.props.answers
      .filter((q) => q.type == "anxiety")
      .map((q) => q.value)
      .reduce((a, b) => a + (b || 0), 0)
  }
  stressScore() {
    return this.props.answers
      .filter((q) => q.type == "stress")
      .map((q) => q.value)
      .reduce((a, b) => a + (b || 0), 0)
  }
  render() {
    return (
      <div>
        <p>Depression: {this.depressionScore()}</p>
        <p>Anxiety: {this.anxietyScore()}</p>
        <p>Stress: {this.stressScore()}</p>
      </div>
    )
  }
}

class DassForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      submitted: false,
      questions: questions,
    }
  }

  onAnswer = ({ number, value }) => {
    this.setState((state, props) => {
      state.questions[number].value = value
      return { questions: state.questions }
    })
  }

  Calculate = (event) => {
    event.preventDefault()
    this.setState({ submitted: true })
  }

  render() {
    if (this.state.submitted) {
      return <DassResults answers={this.state.questions} />
    }

    return (
      <form onSubmit={this.Calculate}>
        <ol>
          {questions.map((question, i) => {
            return <DassQuestion key={i} number={i} onAnswer={this.onAnswer} {...question} />
          })}
        </ol>
        <button type="submit" className="btn btn-success">
          Calculate
        </button>
      </form>
    )
  }
}

const domContainer = document.querySelector("#dass")
ReactDOM.render(<DassForm />, domContainer)
