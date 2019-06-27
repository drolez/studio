<template lang="pug">
    .dash
        | Welcome to the dashboard
        router-link(to='/') Go home
        AuthenticatedUser
        LogoutButton
</template>

<script>
  import LogoutButton from '../components/LogoutButton'
  import AuthenticatedUser from '../components/AuthenticatedUser'
  export default {
    name: 'Dashboard',
    components: { AuthenticatedUser, LogoutButton }
  }
</script>
