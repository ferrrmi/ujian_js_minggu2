import React, { Component } from "react";

class Checkbox extends Component {

    state = {
        "type": "checkbox",
        "soal": "2. Pilihlah 3 hal yang benar mengenai Aqil senpai!",
        "option": ["Trainer Juara Coding", "Manusia", "Anggota Avenger","WIBU","Main Mobile Legends"],
        "jawab": ["Manusia","Main Mobile Legends","WIBU"]
    }
    
    render() {
        return (
            <div class="card-body">
                <p class="card-text">{this.state.soal}</p>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked={this.state.option[0].toString() === this.state.jawab[0].toString()||this.state.option[0].toString() === this.state.jawab[1].toString()||this.state.option[0].toString() === this.state.jawab[2].toString()}/>
                    <label class="form-check-label" for="flexCheckDefault">
                        {this.state.option[0]}
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked={this.state.option[1].toString() === this.state.jawab[0].toString()||this.state.option[1].toString() === this.state.jawab[1].toString()||this.state.option[1].toString() === this.state.jawab[2].toString()} />
                    <label class="form-check-label" for="flexCheckChecked">
                        {this.state.option[1]}
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked={this.state.option[2].toString() === this.state.jawab[0].toString()||this.state.option[2].toString() === this.state.jawab[1].toString()||this.state.option[2].toString() === this.state.jawab[2].toString()} />
                    <label class="form-check-label" for="flexCheckChecked">
                        {this.state.option[2]}
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked={this.state.option[3].toString() === this.state.jawab[0].toString()||this.state.option[3].toString() === this.state.jawab[1].toString()||this.state.option[3].toString() === this.state.jawab[2].toString()} />
                    <label class="form-check-label" for="flexCheckChecked">
                        {this.state.option[3]}
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked={this.state.option[4].toString() === this.state.jawab[0].toString()||this.state.option[4].toString() === this.state.jawab[1].toString()||this.state.option[4].toString() === this.state.jawab[2].toString()} />
                    <label class="form-check-label" for="flexCheckChecked">
                        {this.state.option[4]}
                    </label>
                </div>
            </div>
        )
    }
}
export default Checkbox;