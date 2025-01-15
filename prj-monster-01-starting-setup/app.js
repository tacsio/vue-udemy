function randomInt(max, min) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 1,
      winner: null,
      logMessages: []
    };
  },
  computed: {
    monsterHealthBar() {
      if (this.monsterHealth < 0) {
        return {width: 0}
      }
      return {width: this.monsterHealth + '%'}
    },
    playerHealthBar() {
      if (this.playerHealth < 0) {
        return {width: 0}
      }
      return {width: this.playerHealth + '%'}
    },
    mayUseSpecialAttack() {
      return this.currentRound % 3 !== 0;
    }
  },
  watch: {
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "monster";
      }
    },
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "player";
      }
    }
  },
  methods: {
    restartGame() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.currentRound = 0;
      this.winner = null;
      this.logMessages = [];
    },
    surrender() {
      this.winner = 'monster';
    },
    handleAttack() {
      this.currentRound++;

      const damage = randomInt(15, 5)
      this.monsterHealth -= damage;

      this.addLogMessage('player', 'attack', damage);
      this.monsterAttack();
    },

    monsterAttack() {
      const damage = randomInt(15, 8);
      this.playerHealth -= damage;
      this.addLogMessage('monster', 'attack', damage)
    },
    specialAttack() {
      this.currentRound++;

      const damage = randomInt(25, 10);
      this.monsterHealth -= damage;
      this.addLogMessage('player', 'special-attack', damage)
      this.monsterAttack();
    },
    handleHeal() {
      this.currentRound++;

      const healValue = randomInt(20, 8);
      if (this.playerHealth + healValue > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += healValue;
      }
      this.addLogMessage('player', 'heal', healValue)
      this.monsterAttack();
    },
    addLogMessage(who, what, value) {
      this.logMessages.unshift({
        actionBy: who,
        actionType: what,
        actionValue: value,
      });
    }
  }
});

app.mount('#game');