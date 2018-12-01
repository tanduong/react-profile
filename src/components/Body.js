import React, { Component } from "react";

export class Body extends Component {
  render() {
    let content = {
      Profile:
        "Final-year undergraduate in Computer Engineering with keen interests in software development and web development. Possess strong problem solving and analytical skills with great attention to details. Organized, self-motivated individual, who can work well under pressure, both independently and as a team player. Aspiring to gain relevant experience and skills through technical entry-level jobs and internships.",
      Education:
        "Cras consequat nulla non mauris faucibus luctus. In massa nisl, suscipit quis ullamcorper id, egestas nec turpis. Proin iaculis aliquet felis, et tristique justo tempus vel. Etiam sit amet neque est. Nunc sit amet dolor eget ex facilisis scelerisque. Nulla at lorem purus. Fusce dapibus quam eget urna viverra, a ullamcorper enim vestibulum. Fusce venenatis viverra nunc, at mollis mi aliquet ut. Sed posuere tellus sit amet arcu dictum, sit amet tincidunt lectus rutrum.",
      Skills:
        "Maecenas vitae ultricies tortor, vitae luctus lectus. Nunc vitae turpis quam. Sed quis tincidunt nulla. Nunc eu pretium lectus, quis placerat tortor. Integer sollicitudin magna ac ipsum rhoncus pharetra. Morbi id tincidunt tellus, non pulvinar nisi. Etiam turpis libero, dictum vel ex id, pharetra lacinia mauris. Sed mattis velit enim, quis imperdiet tortor pharetra vitae. Nunc nulla ex, mollis ut purus id, posuere ultrices nisl.",
      "Work Experience":
        "Aenean vitae quam nec lacus semper varius vel eu tortor. Sed convallis condimentum molestie. Cras placerat nulla sit amet placerat bibendum. Quisque ac mattis nisi. Praesent malesuada, ligula id efficitur tempor, felis ipsum vestibulum mi, pulvinar malesuada felis nisl mattis erat. Integer ex eros, hendrerit a sem quis, mollis facilisis est. Suspendisse euismod pharetra quam. Etiam dictum lectus nibh, a pretium risus tincidunt eu. Vestibulum id nisi congue, gravida nisl nec, pharetra sapien. Donec in finibus tortor, et bibendum massa.",
      Projects:
        "Morbi auctor placerat ultrices. Sed sed posuere enim. Vestibulum vel tincidunt ipsum, vitae cursus orci. Curabitur nec pretium lacus. Fusce placerat porttitor tincidunt. Sed imperdiet condimentum pharetra. Nulla rhoncus quam nec tortor dapibus semper."
    };
    return (
      <main>
        <div className="title">{this.props.title}</div>
        <div className="content">{content[this.props.title]}</div>
      </main>
    );
  }
}
