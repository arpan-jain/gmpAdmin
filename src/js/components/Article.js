import React from "react";

export default class extends React.Component {
  render() {
     var title  = this.props.title;
      console.log(this.props.title);
    return (
      <div class="col-md-4">
        <h4>Title:  {title}</h4>
        <p>This is the admin Dashboard. Please wait while all other content is being developed.</p>
        <a class="btn btn-default" href="#">More Info</a>
      </div>
    );
  }
}
