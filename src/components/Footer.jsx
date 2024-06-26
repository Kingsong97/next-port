import { footerText } from "@/constants";

export default function Footer() {
    return (
        <footer id="footer" role="contentinfo">
            <div class="footer__inner">
                <div class="footer__text">
                    <span>kingsong</span>
                    <span>© kingsong</span>
                </div>
                <div class="footer__info">
                    <div class="left">
                        <div class="title">
                            <a href="#">sign up</a>
                        </div>
                        <p>회원가입을 하시면 댓글과 게시판 기능을 이용할 수 있습니다.</p>
                    </div>
                    <div class="right">
                        <h3>social</h3>
                        <ul>
                            {footerText.map((footer, key) => (
                                <li key={key}>
                                    <a href={footer.link}>{footer.title}</a>
                                    <em>{footer.desc}</em>
                                </li>
                            ))}

                        </ul>
                    </div>
                </div>
                <div class="footer__right">
                    © 2024 kingsong<br />
                    이 사이트는 next.js를 이용하여 제작하였습니다.
                </div>
            </div>
        </footer>
    )
}