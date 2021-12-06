import './footer.styles.css';

const Footer = () => (

  //---------- Code Review-------------
  // do you mean className? 
  // check CSS of the footer, when there is no movie to show, footer moves up
  //---------- End Code Review-------------

    <footer id="sticky-footer" class="flex-shrink-0 py-4 bg-dark text-white-50">
    <div class="container text-center">
      <small>Copyright &copy; Your Website</small>
    </div>
  </footer>
);

export default Footer;