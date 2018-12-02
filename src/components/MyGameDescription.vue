<template>
  <div class="description">
    <h1>게임을 만들거야</h1>
    <p>재밌겠다</p>
    <h2>무슨 게임을 만들까?</h2>
  </div>
</template>

<template>
  <div>
    <md-radio v-model="RegularRadio" value="포켓몬 싸움 게임">포켓몬 싸움 게임</md-radio>
    <md-radio v-model="RegularRadio" value="영어단어게임">영어단어게임</md-radio>
    <md-radio v-model="RegularRadio" value="피자만들기 게임">피자만들기 게임</md-radio>
    <md-radio v-model="RegularRadio" value="체스">체스</md-radio>

    <small>내가 선택한 게임은: {{ RegularRadio }}</small>

    <md-button class="md-raised md-primary" v-on:click="moveGamePage">Game Start</md-button>
  </div>
</template>

<script>
import common from '../assets/js/common.js'

export default {
  name: 'RegularRadio',
  mixins: [common],
  data: () => ({
    RegularRadio: "포켓몬 싸움 게임"
  }),
  methods: {
    moveGamePage: async function() {
      let response = await this.requestGet('http://localhost:8000/hello.do')
      console.log(response);
    }
  }
};
</script>

<style lang="scss" scoped>
  small {
    display: block;
  }
</style>