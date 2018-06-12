import React, { Component } from 'react';
import CardForm from './CardForm'

class App extends Component {
  constructor(props, cards) {
    super(props, cards);
    this.toggle = this.toggle.bind(this)
  }
  
  state = {
    cards: [
      { id: 1, question: 'How many roads must a man walk down?', answer: '42.', showing: false  },
      { id: 2, question: 'What is the sound of one hand clapping?', answer: '~Clap~', showing: false  },
      { id: 3, question: 'How much wood would a woodchuck chuck?', answer: 'Many!', showing: false },
    ],
  }

  make_new = () => {
    console.log("Triggered New function")
    this.setState((state) => {
      console.log(state.cards)
      return { state }
    })
  }

  edit_card = () => {
    console.log("Triggered the Edit function")
  }

  delete_card = () => {
    console.log("Triggered the Delete function")
  }

  toggle = () => {
    console.log("Triggered Toggle function")
    this.setState((state) => {
      console.log(state.cards[0].showing)
      return { state }
    })
  }

  render() {
    const { cards } = this.state
    return (
      <div className="wrapper">
        <h1>React Flash Cards</h1>
        <CardForm /> <br />
        <button onClick={this.make_new}>New</button><hr />
        <div className="cards">
          <br />
          { cards.map( card => <p key={ Math.random() * 10000 }> {card.question} 
            <br />
            <button onClick={this.toggle}>Toggle</button> 
            <button onClick={this.edit_card}>Edit</button>
            <button onClick={this.delete_card}>Delete</button>
            </p> 
          )}
        </div>
      </div>
    )
  }
}

export default App
