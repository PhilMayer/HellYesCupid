
import React from 'react';

class ProfileHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageFile: null,
      add: false
    };
    this.updateFile = this.updateFile.bind(this);
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

  handleSubmit () {
    var formData = new FormData();
    formData.append("user[image]", this.state.imageFile);
    this.props.updateUser(this.props.id, formData);
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
            className={this.state.add ? "" : ""}>
            Add
          </button>
          <input type="file" onChange={this.updateFile} ref={input => this.fileInput = input} />

          <div className="profile-header-info">
            <div>{this.props.username}</div>
            <span className="sub-info">{this.props.age}</span>
            <span className="dot">•</span>
            <span className="sub-info">Manhattan, NY</span>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileHeader;
