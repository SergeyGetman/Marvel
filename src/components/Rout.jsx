import React from 'react';
import { Redirect } from 'react-router-dom';

class Routing extends React.Component {
  state = {
    redirect: false,
  };
  setRedirect = () => {
    this.setState({
      redirect: true,
    });
  };
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="www.google.com" push />;
    }
  };
  render() {
    return (
      <div>
        {this.renderRedirect()}
        <button type="button" onClick={this.setRedirect}>
          ПЕРЕНАПРАВИТЬ КУДА НИБУДЬ
        </button>
      </div>
    );
  }
}
export default Routing;
