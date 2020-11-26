<template>
  <header>
    <nav>
      <div class="logo-container">
        <router-link to="/">
          <img src="../assets/logo.png" alt="postIt">
        </router-link>
      </div>
      <div class="search-container">
        <input type="text" name="search">
        <button type="button">Search</button>
      </div>
      <div class="avatar-container">
        <img @click="toggleMenu()" v-bind:src="user.avatar" class="avatar">
        <div v-if="menuClicked" class="drop-down-container">
          <span id="user-name">{{user.firstname + " " + user.lastname}}</span>
          <span id="user-email"></span>
          <span class="separator"></span>
          <span>
            <router-link to="/browse">
              <a>Browse</a>
            </router-link>
            </span>
          <span class="separator"></span>
          <span>
            <router-link to="/login">
              <a>Log Out</a>
            </router-link>
          </span>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      menuClicked: false
    }
  },
  computed: {
    user: function () {
      return this.$store.state.user
    }
  },
  methods: {
    toggleMenu: function() {
      this.menuClicked = !this.menuClicked
    }
  },
  mounted: function() {
    fetch('https://private-517bb-wad20postit.apiary-mock.com/users/1', {
      method: 'get'
    })
        .then((response) => {
          return response.json()
        })
        .then((jsonData) => {
          this.$store.commit('addUser', jsonData)
          console.log(this.user)
        })
  }

}
</script>

<style scoped>

  header {
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1;
  }

  header:hover {
    box-shadow: 0 -20px 30px #4d4d4d;
  }

  nav {
    display: flex;
    background-color: #ffffff;
    align-items: center;
  }

  nav div {
    height: 30px;
    flex-grow: 4;
    padding: 10px;
  }

  nav div img {
    height: 100%;
    width: 30px;
    margin-left: 15px;
    border-radius: 100%;
    object-fit: cover;
    object-position: top center;
  }

  nav div.search-container > input {
    box-sizing: border-box;
    height: 30px;
    width: 80%;
    margin: 0;
    padding: 5px;
    border: 1px solid #e0e0e0;
  }

  nav div.search-container > button {
    height: 30px;
    width: 20%;
    margin: 0;
    padding: 5px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  nav div.avatar-container {
    margin-right: 15px;
    text-align: right;
  }


</style>