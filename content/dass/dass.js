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

class DassForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { liked: false }
  }

  render() {
    if (this.state.liked) {
      return "Your results are: ..."
    }

    return (
      <form>
        <ol>
          {questions.map((question, i) => {
            return (
              <li key={"q" + i}>
                <div className="form-group">
                  <p>{question.text}</p>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name={"q-" + i}
                      id={"q-" + i + "-0"}
                      value="0"
                    />
                    <label
                      className="form-check-label"
                      htmlFor={"q-" + i + "-0"}
                    >
                      Never
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name={"q-" + i}
                      id={"q-" + i + "-1"}
                      value="0"
                    />
                    <label
                      className="form-check-label"
                      htmlFor={"q-" + i + "-1"}
                    >
                      Sometimes
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name={"q-" + i}
                      id={"q-" + i + "-2"}
                      value="0"
                    />
                    <label
                      className="form-check-label"
                      htmlFor={"q-" + i + "-2"}
                    >
                      Often
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name={"q-" + i}
                      id={"q-" + i + "-3"}
                      value="0"
                    />
                    <label
                      className="form-check-label"
                      htmlFor={"q-" + i + "-3"}
                    >
                      Almost always
                    </label>
                  </div>
                </div>
              </li>
            )
          })}
        </ol>
        <button
          type="submit"
          className="btn btn-success"
          onClick={() => this.setState({ liked: true })}
        >
          Calculate
        </button>
      </form>
    )
  }
}

const domContainer = document.querySelector("#dass")
ReactDOM.render(<DassForm />, domContainer)
