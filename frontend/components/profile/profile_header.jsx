import React from 'react';
import { withRouter } from 'react-router';

class ProfileHeader extends React.Component {
  constructor(props) {

    super(props);
    this.state = {
      add: false,
      imageFile: null,
      id: parseInt(this.props.router.params.id)
    };
    this.updateFile = this.updateFile.bind(this);
  }

  componentDidMount () {
    this.props.fetchUser(this.state.id);
  }

  createChat () {
    const id1 = this.props.ownId;
    const id2 = this.props.id;

    this.props.createChat({lover_one_id: id1, lover_two_id: id2})
      .then((chat) => this.props.router.push(`threads/${chat.thread.id}`));
  }

  handleSubmit () {
    var formData = new FormData();
    formData.append("user[image]", this.state.imageFile);
    this.props.updateUser(this.state.id, formData);
  }

  updateFile (e) {
    // var reader = new FileReader();
    var file = e.currentTarget.files[0];
    // reader.onloadend = function() {
    // }.bind(this);
    this.setState({imageFile: file}, () => this.handleSubmit());

    // if (file) {
    //   reader.readAsDataURL(file);
    // } else {
    //   this.setState({ imageUrl: "", imageFile: null });
    // }
  }
  // onMouseOver={() => this.setState({add: true})}
  // onMouseLeave={() => this.setState({add: false})}
  render() {
    return (
      <div className="profile-header-outer">
        <div className="profile-header-inner">
          <img
            src={this.props.profile_pic} />

          <button
            onClick={() => this.fileInput.click()}
            className={this.props.ownProfile ? "" : "hidden"}>
            Change
          </button>

          <input type="file"
            onChange={this.updateFile}
            ref={input => this.fileInput = input} />

          <div className="profile-header-info">
            <div>{this.props.username}</div>
            <span className="sub-info">{this.props.age}</span>
            <span className="dot">•</span>
            <span className="sub-info">Manhattan, NY</span>
          </div>

          <button
            onClick={() => this.createChat()}
            className={this.props.ownProfile ? "hidden" : "message-button"}>
            Message
          </button>

        </div>
      </div>
    );
  }
}

export default withRouter(ProfileHeader);
