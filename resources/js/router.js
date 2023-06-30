import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({

  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },

    {
      path: '/profile',
      name: 'profile',
      component: () => import('./views/Profile.vue')
    },
    //schools
    {
      path: '/school/index',
      name: 'school.index',
      component: () => import('./views/school/view.vue'),
    },
    {
      path: '/school/new',
      name: 'school.new',
      component: () => import('./views/school/register.vue'),
    },
    {
      path: '/school/:id',
      name: 'school.edit',
      component: () => import('./views/school/register.vue'),
      props: true
    },
    //projects
    {
      path: '/projects/index',
      name: 'projects.index',
      component: () => import('./views/projects/view.vue'),
    },
    {
      path: '/projects/new',
      name: 'projects.new',
      component: () => import('./views/projects/register.vue'),
    },
    {
      path: '/projects/:id',
      name: 'projects.edit',
      component: () => import('./views/projects/register.vue'),
      props: true
    },
    //students
    {
      path: '/student/index',
      name: 'student.index',
      component: () => import('./views/student/view.vue'),
    },
    {
      path: '/student/new',
      name: 'student.new',
      component: () => import('./views/student/register.vue'),
    },
    {
      path: '/student/:id',
      name: 'student.edit',
      component: () => import('./views/student/register.vue'),
      props: true
    },
    //Teachers
    {
      path: '/teachers/index',
      name: 'teachers.index',
      component: () => import('./views/teachers/view.vue'),
    },
    {
      path: '/teachers/new',
      name: 'teachers.new',
      component: () => import('./views/teachers/register.vue'),
    },
    {
      path: '/teachers/:id',
      name: 'teachers.edit',
      component: () => import('./views/teachers/register.vue'),
      props: true
    },
    {
      path: '/printTeacher/:id',
      name: 'printTeacher.edit',
      component: () => import('./views/teachers/printTeacher.vue'),
      props: true
    },

    //bedel
    {
      path: '/bedel/index',
      name: 'bedel.index',
      component: () => import('./views/teachers/bedel.vue'),
    },
    {
      path: '/bedel/new',
      name: 'bedel.new',
      component: () => import('./views/teachers/bedelform.vue'),
    },
    {
      path: '/bedel/:id',
      name: 'bedel.edit',
      component: () => import('./views/teachers/bedelreport.vue'),
      props: true
    },
    //district

    {
      path: '/district',
      name: 'district.new',
      component: () => import('./views/setting/index.vue'),
    },
    {
      path: '/district/:id',
      name: 'district.edit',
      component: () => import('./views/setting/index.vue'),
      props: true
    },
    //attendance
    {
      path: '/att/index',
      name: 'att.index',
      component: () => import('./views/attendances/view.vue'),
    },
    {
      path: '/att/new',
      name: 'att.new',
      component: () => import('./views/attendances/index.vue'),
    },
    {
      path: '/att/:id',
      name: 'att.edit',
      component: () => import('./views/attendances/index.vue'),
      props: true
    },
    //assign
    {
      path: '/assign/index',
      name: 'assign.index',
      component: () => import('./views/teachers/assign.vue'),
    },
    {
      path: '/assign/new',
      name: 'assign.new',
      component: () => import('./views/teachers/newassign.vue'),
    },
    {
      path: '/assign/:id',
      name: 'assign.edit',
      component: () => import('./views/teachers/newassign.vue'),
      props: true
    },
    //Transfers
    {
      path: '/transfers/index',
      name: 'transfers.index',
      component: () => import('./views/teachers/transfers.vue'),
    },
    {
      path: '/transfers/new',
      name: 'transfer.new',
      component: () => import('./views/teachers/newtransfer.vue'),
    },
    {
      path: '/transfers/:id',
      name: 'transfers.edit',
      component: () => import('./views/teachers/newtransfer.vue'),
      props: true
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
