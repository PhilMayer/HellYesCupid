import React from 'react';

class ProfileQuestionsItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {editing: false, questionText: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit () {
    const updatedQuestion = this.state.questionText;
    const formData = new FormData();
    formData.append("user[summary]", this.state.questionText);

    this.props.updateUser(this.props.id, formData).then(this.setState({editing: false}));
  }

  render() {
    return (
      <section>
        <div>
          <span className="profile-question">My self-summary</span>
          <i onClick={() => this.setState({editing: true})}
            className={this.state.editing ? "hidden" : "fa fa-pencil"}
            aria-hidden="true">
          </i>

          <div>{this.props.summary}</div>

          <form onSubmit={this.handleSubmit} className={this.state.editing ? "" : "hidden"}>
            <textarea
              onChange={(e) => this.setState({questionText: e.target.value})}
              placeholder="Just a summary people. Don't try too hard.">
              {this.state.questionText}
            </textarea>
            <button type="submit">Save</button>
            <button onClick={() => this.setState({editing: false})}>Cancel</button>
          </form>
        </div>
      </section>
    );
  }
}

export default ProfileQuestionsItem;
