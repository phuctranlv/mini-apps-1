class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkoutStage: 0
    }
    this.changeCheckoutStageOnClick = this.changeCheckoutStageOnClick.bind(this);
  }

  changeCheckoutStageOnClick (event) {
    if (event.type === 'click') {
      if (this.state.checkoutStage === 3) {
        this.setState({
          checkoutStage: 0
        })
      } else if (this.state.checkoutStage >= 0 && this.state.checkoutStage < 3) {
        this.setState({
          checkoutStage: this.state.checkoutStage + 1
        })
      }
    }
  }

  render() {
    if (this.state.checkoutStage === 0) {
      return <button id="checkout-submit-button" name="checkout" value="checkout" onClick={(event) => this.changeCheckoutStageOnClick(event)}>Checkout</button>
    } else if (this.state.checkoutStage === 1) {
      return <FormEntry1 form={this.props.form1} changeCheckoutStageOnClick={this.changeCheckoutStageOnClick} />
    } else if (this.state.checkoutStage === 2) {
      return <FormEntry2 form={this.props.form2} changeCheckoutStageOnClick={this.changeCheckoutStageOnClick} />
    } else if (this.state.checkoutStage === 3) {
      return <FormEntry3 form={this.props.form3} changeCheckoutStageOnClick={this.changeCheckoutStageOnClick} />
    }
  }
}


class FormEntry1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange (event) {
    console.log(event.target);
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit () {
    $.ajax({
      type: 'post',
      url: 'http://localhost:3000/',
      data: this.state,
      success: () => {},
    })
  }

  render () {
    return (
      <form>
      <h2>Please enter your information:</h2>
      <div>
        <label>Name:</label>
        <input name="name" type="text" onChange={(event) => this.handleInputChange(event)}></input>
      </div>
      <div>
        <label>Email:</label>
        <input name="email" type="email" onChange={(event) => this.handleInputChange(event)}></input>
      </div>
      <div>
        <label>Password:</label>
        <input name="password" type="password" onChange={(event) => this.handleInputChange(event)}></input>
      </div>
      <div>
        <button id="form-1-submit-button" onClick={(event) => {
          this.handleSubmit();
          this.props.changeCheckoutStageOnClick(event);
          }}>Next
        </button>
      </div>
    </form>
    )
  }
}

class FormEntry2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addressLine1: '',
      addressLine2: '',
      city: '',
      state: '',
      zipCode: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange (event) {
    console.log(event.target);
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit () {
    $.ajax({
      type: 'post',
      url: 'http://localhost:3000/',
      data: this.state,
      success: () => {},
    })
  }

  render () {
    return (
      <form>
        <h2>Please enter your shipping address:</h2>
        <div>
          <label>Address line 1:</label>
          <input name="addressLine1" type="text" onChange={(event) => this.handleInputChange(event)}></input>
        </div>
        <div>
          <label>Address line 2:</label>
          <input name="addressLine2" type="text" onChange={(event) => this.handleInputChange(event)}></input>
        </div>
        <div>
          <label>City:</label>
          <input name="city" type="text" onChange={(event) => this.handleInputChange(event)}></input>
        </div>
        <div>
          <label>State:</label>
          <input name="state" type="text" onChange={(event) => this.handleInputChange(event)}></input>
        </div>
        <div>
          <label>Zip code:</label>
          <input name="zipCode" type="number" onChange={(event) => this.handleInputChange(event)}></input>
        </div>
        <div>
          <button id="form-2-submit-button" onClick={(event) => {
            this.handleSubmit();
            props.changeCheckoutStageOnClick(event);
          }}>
          Next</button>
        </div>
      </form>
    )
  }
}

class FormEntry3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      creditCard: '',
      expiryDate: '',
      cvv: '',
      billingZipCode: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange (event) {
    console.log(event.target);
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit () {
    $.ajax({
      type: 'post',
      url: 'http://localhost:3000/',
      data: this.state,
      success: () => {},
    })
  }

  render() {
    return (
      <form>
        <h2>Please enter your credit card information:</h2>
        <div>
          <label>Credit card:</label>
          <input name="creditCard" type="number" onChange={(event) => this.handleInputChange(event)}></input>
        </div>
        <div>
          <label>Expiry date:</label>
          <input name="expiryDate" type="date" onChange={(event) => this.handleInputChange(event)}></input>
        </div>
        <div>
          <label>CVV:</label>
          <input name="cvv" type="number" onChange={(event) => this.handleInputChange(event)}></input>
        </div>
        <div>
          <label>Billing zip code:</label>
          <input name="billingZipCode" type="number" onChange={(event) => this.handleInputChange(event)}></input>
        </div>
        <div>
          <button id="form-3-submit-button" onClick={(event) => {
            this.handleSubmit();
            props.changeCheckoutStageOnClick(event);
          }}>Complete</button>
        </div>
      </form>
    )
  }
}


let forms ={
  form1: {},
  form2: {},
  form3: {}
}


ReactDOM.render(<App forms={forms}/>, document.getElementById('app'));