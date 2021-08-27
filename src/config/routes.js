import ExampleOne from "../containers/ExampleOne";
import ExampleTwo from "../containers/ExampleTwo";
import FirstPage from "../containers/FirstPage";

const routes = [
  {
    path: '/example-one',
    component: ExampleOne,
  },
  {
    path: '/example-two',
    component: ExampleTwo,
  },
  {
    path: '/first-page',
    component: FirstPage
  }
]

export default routes