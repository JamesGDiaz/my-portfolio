import Home from './pages/Home.vue';
import Projects from './pages/Projects.vue';
import Experience from './pages/Experience.vue';
import Knowledge from './pages/Knowledge.vue';
import Error404 from './pages/Error404.vue'

const User = {
  template: '<div>User fsdfsdf</div>'
}

const routes = [
  { path: '/', component: Home, name: 'home' },
  { path: '/evan', component: User },
  { path: '/experience', component: Experience, name: 'experience' },
  { path: '/projects', component: Projects, name: 'projects' },
  { path: '/knowledge', component: Knowledge, name: 'knowledge' },
  { path: '*', component: Error404, name:'error404' },
];

export default routes;
