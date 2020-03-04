
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkoutStage: 0
    }

    this.changeStageOnClick = this.changeStageOnClick.bind(this);
  }
  changeStageOnClick (event) {
    if (event.type === 'click') {
      if (this.state.checkoutStage === 3) {
        this.setState({
          checkoutStage: 0
        })
      } else if (this.state.checkoutStage < 3 && this.state.checkoutStage >= 0) {
        this.setState({
          checkoutStage: this.state.checkoutStage + 1
        })
      }

    }
  }
  render() {
    if (this.state.checkoutStage === 0) {
      return <button onClick={(event) => this.changeStageOnClick(event)}>Checkout</button>
    } else if (this.state.checkoutStage === 1) {
      return <FormEntry1 form={this.props.form1} onClickFunction={this.changeStageOnClick} />
    } else if (this.state.checkoutStage === 2) {
      return <FormEntry2 form={this.props.form2} onClickFunction={this.changeStageOnClick} />
    } else if (this.state.checkoutStage === 3) {
      return <FormEntry3 form={this.props.form3} onClickFunction={this.changeStageOnClick} />
    }
  }
}


var FormEntry1 = (props) => (
  <form>
    <label></label>
    <input></input>
    <label></label>
    <input></input>
    <label></label>
    <input></input>
    <button onClick={(event) => {props.onClickFunction(event)}}>Next
  </button>
  </form>

)

var FormEntry2 = (props) => (
  <form>
    <label></label>
    <input></input>
    <label></label>
    <input></input>
    <label></label>
    <input></input>
    <label></label>
    <input></input>
    <label></label>
    <input></input>
    <button onClick={(event) => props.onClickFunction(event)}>Next</button>
  </form>
)

var FormEntry3 = (props) => (
  <form>
    <label></label>
    <input></input>
    <label></label>
    <input></input>
    <label></label>
    <input></input>
    <label></label>
    <input></input>
    <button onClick={(event) => props.onClickFunction(event)}>Complete</button>
  </form>
)

const forms = {
  form1: {

  },
  form2: {

  },
  form3: {

  }
}

ReactDOM.render(<App forms={forms}/>, document.getElementById('app'));