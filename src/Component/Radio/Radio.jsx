import React, { Component } from "react";

class Radio extends Component {
  state = {
    "type": "radio",
    "soal": "1. Siapakah penemu baling-baling bambu?",
    "a": "Doraemon",
    "b": "hanif",
    "c": "nobita",
    "d": "naruto",
    "jawab": "a"
  }

  render() {
    return (
      <div class="card-body">
        <p class="card-text">{this.state.soal}</p>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
            checked={this.state.jawab === "a"}
          />
          <label class="form-check-label" for="flexRadioDefault1">
            {this.state.a}
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
            checked={this.state.jawab === "b"}
          />
          <label class="form-check-label" for="flexRadioDefault2">
            {this.state.b}
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
            checked={this.state.jawab === "c"}
          />
          <label class="form-check-label" for="flexRadioDefault2">
            {this.state.c}
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
            checked={this.state.jawab === "d"}
          />
          <label class="form-check-label" for="flexRadioDefault2">
            {this.state.d}
          </label>
        </div>
      </div>
    );
  }
}
export default Radio;