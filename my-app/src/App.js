import React, { Component } from "react";
import "./App.css";
import Header from "./components/header/header.js";
import Content from "./components/content/content.js";

const data = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496"
      }
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets"
    }
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: {
        lat: "-43.9509",
        lng: "-34.4618"
      }
    },
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {
      name: "Deckow-Crist",
      catchPhrase: "Proactive didactic contingency",
      bs: "synergize scalable supply-chains"
    }
  }
];

let lights = [
  {
    id: 1,
    name: "Living",
    lightState: 0
  },
  {
    id: 2,
    name: "Hol",
    lightState: 1
  },
  {
    id: 3,
    name: "Balcon",
    lightState: 0
  },
  {
    id: 4,
    name: "Balcon2",
    lightState: 1
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    // bind a function to reference Cards to it
    this.handleClick = this.handleClick.bind(this);
    // bind a function to be a reference for all Cards
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleLightChange = this.handleLightChange.bind(this);
    this.state = {
      name: "Vali",
      lightsData: lights,
      lightColor: "white",
      allData: data,
      title: "My App"
    };
  }

  handleClick(name) {
    alert(name);
  }

  handleChangeTitle(event) {
    this.setState({ title: event.target.value });
  }

  handleLightChange(lightState, lightName) {
    const index = this.state.lightsData
      .map(function(light) {
        return light.name;
      })
      .indexOf(lightName);

    if (lightState === 1) {
      this.setState(state => {
        const list = state.lightsData;
        list[index].lightState = 0;
        return {
          list
        };
      });
    } else if (lightState === 0) {
      this.setState(state => {
        const list = state.lightsData;
        list[index].lightState = 1;
        return {
          list
        };
      });
    }
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Content
          name={this.state.name}
          handleClick={this.handleClick}
          allData={this.state.allData}
          title={this.state.title}
          handleChangeTitle={this.handleChangeTitle}
          lightsData={this.state.lightsData}
          handleLightChange={this.handleLightChange}
        />
      </div>
    );
  }
}

export default App;
