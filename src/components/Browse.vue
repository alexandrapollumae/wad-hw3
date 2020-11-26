<template>
  <div class="browse">
  <Header/>
  <section class="main-container">
    <div class="profile-feed">
      <div class="profile" v-bind:key="profile.id" v-for="profile in profiles">
        <img v-bind:src =profile.avatar alt = "Post autohor">
        <p>{{profile.firstname + " " + profile.lastname}}</p>
        <button @click="followed = !followed" v-show="followed" class="follow-button">
          Follow
        </button>
        <button @click="followed = !followed" v-show="!followed" class="follow-button.followed">
          Followed
        </button>
      </div>
    </div>
  </section>
  </div>
</template>

<script>

import Header from "@/components/Header";
export default {
  name: "Browse",
  components: {
    Header

  },
  data: function () {
    return {
      followed: true
    }
  },
  computed: {
    profiles: function () {
      return this.$store.state.profiles
    }
  },
  mounted() {
    this.$store.dispatch("getProfiles")
  }
}
</script>

<style scoped>

.profile {
  width: 45%;
  display: inline-block;
  border: 1px solid #dedede;
  border-radius: 5px;
  text-align: center;
  margin: 1%;
}
.profile img{
  width: 75px;
  height: 75px;
  border-radius: 100%;
  object-fit: cover;
  object-position: top;
  margin: 5px;
}

.profile h2{
  font-size: 16px;
}

.main-container {
  width: 50%;
  min-height: 100%;
  margin: auto auto;
  padding: 90px 15px 15px 15px;
  background-color: #ffffff;
}

.follow-button{
  background-color: #82008f;
}

.follow-button.followed{
  background-color: #ffffff;
  border: 1px solid #82008f;
  color: #82008f;
}


</style>