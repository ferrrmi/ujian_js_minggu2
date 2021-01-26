import React, { Component } from "react";
import Radio from "../../Component/Radio/Radio";
import Checkbox from "../../Component/Checkbox/Checkbox";
import Essay from "../../Component/Essay/Essay";
import Soal from "../../Component/Soal/Soal";

class Home extends Component {
  render() {
    return (
      <div class="card-header">
        <div class="card-body">
          <div class="card-body">
            <h5 class="text-header">Ujian minggu ke 2 Bootcamp JuaraCoding</h5>
          </div>
          <div class="card-body">
            <Soal />
          </div>
          <div class="card-body">
            <Radio />
          </div>
          <div class="card-body">
            <Checkbox />
          </div>
          <div class="card-body">
            <Essay />
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
