<script>
export default {
  props: {
    label: String,
    color: String,
  },
  methods: {
    async deleteProfile() {
      try {
        const apiUrl = 'https://balandrau.salle.url.edu/i3/players/';
        const token = this.$store.getters.getplayer.token;
        console.log('RegisThe value of the token is: ' , token);
        const headers = {
          'Bearer': token,
          'Content-Type': 'application/json',
        };

        const response = await fetch(apiUrl, {
          method: 'DELETE',
          headers: headers,
        });

        if (response.ok) {
          console.log('Profile deleted successfully');
          // Perform any additional actions after successful profile deletion
          this.$router.push('/'); // Redirect to the home page or another page
        } else {
          console.error('Failed to delete profile');
          // Handle the error if needed
        }
      } catch (error) {
        console.error('Error during profile deletion:', error);
        // Handle the error if needed
      }
    },
  },
};
</script>
<template>
  <button type="button" class="custom-button" :style="{ backgroundColor: color }" @click="deleteProfile">
    <h3>{{ label }}</h3>
  </button>
</template>
