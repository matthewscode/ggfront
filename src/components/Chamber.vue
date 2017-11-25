<template>
 <div id="wrapper">
<h1>Skill Chamber</h1>
   <h5>user: Whirrun</h5>
   Available configs
   <button @click="pause()" v-if="paused">Play</button>
   <button @click="pause()" v-if="!paused">Pause</button>

 </div>
</template>

<script>
  var aPath = "https://s3-us-west-2.amazonaws.com/skillchamber/packs/"

  export default {
      data: function() {
          return {
              audioList: [
                new Audio(aPath + 'relax_1.m4a'),
                new Audio(aPath + 'relax_2.m4a'),
                new Audio(aPath + 'relax_3.m4a'),
                new Audio(aPath + 'lean_1.m4a'),
                new Audio(aPath + 'breathe_1.m4a'),
                new Audio(aPath + 'breathe_2.m4a'),
                new Audio(aPath + 'ballsout_1.m4a'),
                new Audio(aPath + 'aim_arm_1.m4a'),
                new Audio(aPath + 'aim_arm_2.m4a')
              ],
              paused: true,
          }
      },
      methods: {
          pause: function() {
              this.paused = !this.paused;
          }
      },
      mounted: function() {
        setInterval(function() {
          if(!this.paused){
            this.audioList[Math.floor(Math.random() * (8))].play();
          }
        }.bind(this), 20000);
      }
  }
</script>
