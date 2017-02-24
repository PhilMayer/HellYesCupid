import React from 'react';
import { withRouter } from 'react-router';

class ProfileQuestionsItem extends React.Component {
  constructor(props) {
    super(props);
    const isOwnProfile = (this.props.id === parseInt(this.props.router.params.id));

    this.state = {
      editing: false,
      questionText: this.questionText(),
      responseText: this.props.response,
      canEdit: isOwnProfile,
      canSave: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit () {
    const updatedQuestion = this.state.responseText;
    const formData = new FormData();
    formData.append(`user[${this.props.question}]`, updatedQuestion);
    const id = this.props.id;
    // const question = this.props.question;
    // const response = this.state.responseText;
    this.props.updateUser(id, formData).then(this.setState({editing: false}));
    // this.props.updateUser(this.props.id, formData).then(this.setState({editing: false}));
  }

  questionText() {
    switch(this.props.question) {
      case "summary":
        return "Summary";
      case "doing_with_life":
        return "What I'm doing with my Life";
      case "really_good_at":
        return "I'm really good at";
      case "favorite_things":
        return "Favorite books, movies, shows, music, and food";
      case "six_things":
        return "The six things I could never do without";
      case "think_about":
        return "I spend a lot of time thinking about";
      case "typical_friday":
        return "On a typical Friday night I am";
      case "message_me_if":
        return "You should message me if";
      default:
        return "";
    }
  }

  

  render() {
    let submittedText = "";
    if(this.state.responseText && !this.state.editing) {
      submittedText = this.props.response;
    }

    return (
      <section>
        <div>
          <span className="profile-question">{this.state.questionText}</span>

          <i onClick={() => this.setState({editing: true})}
            className={!this.state.canEdit || this.state.editing ? "hidden" : "fa fa-pencil"}
            aria-hidden="true">
          </i>

          <div className="response-text">{submittedText}</div>

          <form onSubmit={this.handleSubmit} className={this.state.editing ? "" : "hidden"}>

            <textarea
              onChange={(e) => this.setState({responseText: e.target.value, canSave: true})}
              placeholder="Just a summary people. Don't try too hard.">
              {this.state.responseText}
            </textarea>

            <div className="buttons">
              <button className={this.state.canSave ? "turn-green" : ""} type="submit">Save</button>
              <button onClick={() => this.setState({editing: false})}>Cancel</button>
            </div>

          </form>
        </div>
      </section>
    );
  }
}

export default withRouter(ProfileQuestionsItem);
