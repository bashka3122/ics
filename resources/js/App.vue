<template>
  <div id="app">

    <link rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.10.5/font/bootstrap-icons.min.css">
    <nav-bar />
    <aside-menu :menu="menu" />

    <router-view />

    <footer-bar />
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar'
import AsideMenu from '@/components/AsideMenu'
import FooterBar from '@/components/FooterBar'

export default {
  name: 'home',
  components: {
    FooterBar,
    AsideMenu,
    NavBar
  },
  computed: {
    menu() {
      return [
        'General',
        [
          {
            to: '/',
            icon: 'desktop-mac',
            label: 'Dashboard'
          }
        ],

        [{
          to: '/school/index',
          label: 'schools',
          icon: 'bi bi-book',

        },


        ],

        [

          {
            label: 'Teachers',
            subLabel: 'Submenus Example',
            icon: 'view-list',
            menu: [
              {
                icon: 'account-multiple',
                to: '/teachers/index',
                label: 'Teachers form'
              },
              {
                icon: 'bi bi-arrow-down-up',
                to: '/bedel/index',
                label: 'Substitution form'
              },
              {
                icon: 'bi bi-arrows-collapse',
                to: '/transfers/index',
                label: 'Transfers'
              },

            ],


          },
          {

            label: 'Students',
            icon: 'bi bi-cast',
            menu: [
              {
                to: '/student/index',
                label: 'Projects'
              },
              {
                to: '/assign/index',
                label: 'Assign to teacher'
              },


            ],


          },

        ],


        [
          {
            label: 'Reports',
            subLabel: 'Submenus Example',
            icon: 'bi bi-file-earmark-bar-graph',
            menu: [
              {
                icon: 'bi bi-paperclip',
                to: '/att/index',
                label: 'Attendance'
              },


            ],


          },
        ],
      ]
    }
  },
  created() {
    axios
      .get('/user')
      .then(r => {
        this.$store.commit('user', r.data.data)
      })
      .catch(err => {
        this.$buefy.toast.open({
          message: `Error: ${err.message}`,
          type: 'is-danger'
        })
      })
  },

}
</script>
