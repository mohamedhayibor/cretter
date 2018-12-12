import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import SignUp from '@/components/SignUp'
import Cretters from '@/components/Cretters'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Cretters',
      component: Cretters
    },
    {
    	path: '/login',
    	name: 'Login',
    	component: Login
    },
    {
    	path: '/sign-up',
    	name: 'Sign Up',
    	component: SignUp
    }
  ]
})
