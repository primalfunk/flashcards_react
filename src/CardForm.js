import React from 'react';

class CardForm extends React.Component {
  render() {
    return (
      <form>
        <input required placeholder="Card Question" /> *|-!-|* <input required placeholder="Answer" />
      </form>
    )
  }
}

export default CardForm;