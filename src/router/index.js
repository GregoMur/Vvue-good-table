import VueRouter from 'vue-router'
import List from '../pages/List'
import Zabor from '../pages/Zabor'
import Item from '../pages/Item'

export default new VueRouter({
  mode: 'history',
  routes: [
      {
        path:'/',
        name: 'list',
        component: List
      },
      {
        path:'/zabor',
        name: 'Zabor',
        component: Zabor
      },
      {
        path:'/item/:id',
        name: 'item',
        component: Item
      },
    ]
  })