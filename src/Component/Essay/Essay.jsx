import React, { Component } from "react";

class Essay extends Component {
    state = {
        "type": "essay",
        "soal": "3. Ceritakan pengalaman anda ketika sedang tidur :",
        "isi": "Pengalaman saya ketika tidur semalam, isinya cuma mimpiin dia pak"
    }
    render() {
        return (
            <div class="card-body">
                <p class="card-text">{this.state.soal}</p>
                <div class="form-floating">
                    <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height:200}} value={this.state.isi}></textarea>
                    <label for="floatingTextarea2">leave a comment here</label>
                </div>
            </div>
        )
    }
}
export default Essay;