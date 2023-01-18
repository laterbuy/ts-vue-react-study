import Vue from 'vue'
import VueRouter from 'vue-router'
import BaseView from '../views/BaseView.vue'
import WatchView from '../views/WatchView.vue'
import CpmputedView from '../views/CpmputedView.vue'
import ClassView from '../views/ClassView.vue'
import ConditionView from '../views/ConditionView.vue'
import ListView from '../views/ListView.vue'
import EventView from '../views/EventView.vue'
import FormView from '../views/FormView.vue'
import PropsView from '../views/PropsView.vue'
import ModelView from '../views/ModelView.vue'
import NextTickView from '../views/NextTickView.vue'
import SlotView from '../views/SlotView.vue'
import DyView from '../views/DyView.vue'
import MixinView from '../views/MixinView.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/base',
      name: 'base',
      component: BaseView
    },
    {
      path: '/watch',
      name: 'watch',
      component: WatchView
    },
    {
      path: '/cpmputed',
      name: 'cpmputed',
      component: CpmputedView
    },
    {
      path: '/class',
      name: 'class',
      component: ClassView
    },
    {
      path: '/condition',
      name: 'condition',
      component: ConditionView
    },
    {
      path: '/list',
      name: 'list',
      component: ListView
    },
    {
      path: '/event',
      name: 'event',
      component: EventView
    },
    {
      path: '/form',
      name: 'form',
      component: FormView
    },
    {
      path: '/props',
      name: 'props',
      component: PropsView
    },
    {
      path: '/model',
      name: 'model',
      component: ModelView
    },
    {
      path: '/nextTick',
      name: 'nextTick',
      component: NextTickView
    },
    {
      path: '/slot',
      name: 'slot',
      component: SlotView
    },
    {
      path: '/dy',
      name: 'dy',
      component: DyView
    },
    {
      path: '/mixin',
      name: 'mixin',
      component: MixinView
    },
  ]
})

export default router
