import Icons from '../../components/Icons'
import Buttons from '../../components/Buttons'
import { TbMessageCircle } from "react-icons/tb";
import { FiCoffee } from "react-icons/fi";
import styles from './styles.module.scss'

export default function Contact() {
    return (
        <div className={styles.container}>
            <h2>Contato</h2>
                <section>
                    <h3>Sobre mim<FiCoffee/></h3>
                    <p>Sou desenvolvedor web e possuo experiência na criação de sites utilizando a stack HTML, CSS e Javascript, com conhecimento em bibliotecas como o React. Além de novas tecnologias estudo bastante sobre experiência do usuário, acessibilidade e otimização para mecanismos de busca. Possuo graduação em Análise e desenvolvimento de sistemas, e estou realizando transição de carreira para a área de Tecnologia.</p>
                    <Icons/>
                </section>
                <section>
                    <h3>Redes sociais<TbMessageCircle/></h3>
                    <Buttons/>
                </section>
        </div>
    )
}