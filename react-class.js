class HelloWorld extends React.Component {
    constructor() {
      super();
      const url = "https://246gg84zg8.execute-api.us-west-2.amazonaws.com/prod/projects";
      console.log("url", url);
      fetch(url).then(response => {return response.json();}).then(data => {
        let output = '';
        data.Items.forEach(function(project){
          console.log("project", project);
          output += `<li>
          <div class='company'>${project.Name}</div>
          <div class='position'>${project.Position}</div>
          <div class='address-link'>${project.Address}</div>
          <div class="cb"></div></li>`;
        });
        document.getElementById('project_list').innerHTML = output;
      }).catch(err => {console.log("error", err);});
    }
    render() {}
  }
  ReactDOM.render(<HelloWorld />, document.getElementById("project_list"));