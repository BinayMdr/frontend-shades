import FooterLogo from "../assets/img/footer-logo.png"
import Image from 'next/image';

export default function Footer() {
    return (
      <footer className="footer">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="footer__about">
                        <div className="footer__logo">
                            <a href="#"><Image src={FooterLogo} alt=""/></a>
                        </div>
                        <p>Bring yourself to us and let us style you to perfection.😎</p>
                    </div>
                </div>
                <div className="col-lg-2 offset-lg-1 col-md-3 col-sm-6">
                    <div className="footer__widget">
                        <h6>Category</h6>
                        <ul>
                            <li><a href="#">Male Category</a></li>
                            <li><a href="#">Female Category</a></li>
                            <li><a href="#">Child Category</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-6">
                    <div className="footer__widget">
                        <h6>Hot Trends</h6>
                        <ul>
                            <li><a href="#">Blue Cut</a></li>
                            <li><a href="#">Ray Ban</a></li>
                            <li><a href="#">Gucci</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3 offset-lg-1 col-md-6 col-sm-6">
                    <div className="footer__widget">
                        <h6>Feedback</h6>
                        <div className="footer__newslatter">
                            <p>Send us your feedback</p>
                            <form action="#">
                                <input type="text" placeholder="Your feedback"/>
                                <button type="submit"><span className="icon_mail_alt"></span></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12 text-center">
                    <div className="footer__copyright__text">
                        <p>Copyright ©
                            2020
                            All rights reserved | This template is made with <i className="fa fa-heart-o"
                            aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </footer>
    );
  }