<template>
  <main
    class="d-flex bg-dark flex-column justify-content-center align-items-center"
  >
    <div class="container">
      <div class="row justify-content-center mt-3">
        <div class="col col-6">
          <div class="text-center">
            <div v-if="!winMessage">
              <h1 class="text-info" v-show="isCross">
                Cross Turn
              </h1>
              <h1 class="text-info" v-show="!isCross">
                Circle Turn
              </h1>
            </div>
            <div v-else>
              <h1 class="text-warning">
                {{ winMessage.toUpperCase() }}
              </h1>
            </div>
          </div>
          <div class="grid">
            <div 
            
            class="card card-body box justify-content-center align-items-center bg-light"
            >
              <Icon :iconname="empty"></Icon>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Icon from "./Components/Icons";
import Swal from "sweetalert2/dist/sweetalert2";

export default {
  name: "App",
  components: { Icon },
  data() {
    return {
      winMessage: "",
      isCross: true,
      itemArray: new Array(9).fill("empty"),
    };
  },
  watch: {
    winMessage: function(message) {
      if (message) {
        this.showDialog();
      }
    },
  },
  method: {
    showDialog() {
      Swal.fire({
        icon: "info",
        title: "Game Over",
        text: `${this.winMessage}`,
      });
    },
    handleClick(itemNumber) {
      if (this.winMessage) {
        return this.showDialog;
      }
      if (this.itemArray[itemNumber] === "empty") {
        this.itemArray[itemNumber] = this.isCross ? "cross" : "circle";
        this.isCross = !this.isCross;
      } else {
        return Swal.fire("already filled");
      }

      this.checkIsWinner();
    },
    checkIsWinner() {
      // checking winner of the game
      if (
        this.itemArray[0] === this.itemArray[1] &&
        this.itemArray[0] === this.itemArray[2] &&
        this.itemArray[0] != "empty"
      ) {
        this.message = `${this.itemArray[0]} won`;
      } else if (
        this.itemArray[3] === this.itemArray[3] &&
        this.itemArray[3] === this.itemArray[4] &&
        this.itemArray[3] != "empty"
      ) {
        this.message = `${this.itemArray[3]} won`;
      } else if (
        this.itemArray[6] === this.itemArray[7] &&
        this.itemArray[6] === this.itemArray[8] &&
        this.itemArray[6] != "empty"
      ) {
        this.message = `${this.itemArray[6]} won`;
      } else if (
        this.itemArray[0] === this.itemArray[3] &&
        this.itemArray[0] === this.itemArray[6] &&
        this.itemArray[0] != "empty"
      ) {
        this.message = `${this.itemArray[0]} won`;
      } else if (
        this.itemArray[1] === this.itemArray[4] &&
        this.itemArray[1] === this.itemArray[7] &&
        this.itemArray[1] != "empty"
      ) {
        this.message = `${this.itemArray[1]} won`;
      } else if (
        this.itemArray[2] === this.itemArray[5] &&
        this.itemArray[2] === this.itemArray[8] &&
        this.itemArray[2] != "empty"
      ) {
        this.message = `${this.itemArray[2]} won`;
      } else if (
        this.itemArray[0] === this.itemArray[4] &&
        this.itemArray[0] === this.itemArray[8] &&
        this.itemArray[0] != "empty"
      ) {
        this.message = `${this.itemArray[0]} won`;
      } else if (
        this.itemArray[2] === this.itemArray[4] &&
        this.itemArray[2] === this.itemArray[6] &&
        this.itemArray[2] != "empty"
      ) {
        this.message = `${this.itemArray[2]} won`;
      }
    },
    reloadGame() {
      this.winMessage = "";
      this.isCross = true;
      this.itemArray = new Array(9).fill("empty");
    },
  },
};
</script>

<style></style>
