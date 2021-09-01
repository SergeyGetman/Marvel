import Header from './header';
import Footer from './footer';

import './default.css';

export default function DefaultLayout(props) {
  return (
    <>
      <Header></Header>
      <main className="content">{props.children}</main>
      <Footer></Footer>
    </>
  );
}
