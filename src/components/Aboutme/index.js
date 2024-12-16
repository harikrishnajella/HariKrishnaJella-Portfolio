import {Component} from 'react'
import {Link} from 'react-router-dom'
import { MdOutlineDownloadForOffline } from "react-icons/md"
import { FaArrowUpRightFromSquare } from "react-icons/fa6"

import resume from '../../assets/HariKrishnaResume.pdf'

import Header from '../Header'
import Footer from '../Footer'

import './index.css'

const technicalSkillsList = [
    {
        id: 1,
        imgUrl: 'https://res.cloudinary.com/dmogabwqz/image/upload/v1734150469/Html_icon_uk2dg1.png',
        title: 'HTML',
    },
    {
        id: 2,
        imgUrl: 'https://res.cloudinary.com/dmogabwqz/image/upload/v1734151367/css_natqnj.jpg',
        title: 'CSS',
    },
    {
        id: 3,
        imgUrl: 'https://res.cloudinary.com/dmogabwqz/image/upload/v1734151623/bootstarp_img_bwkgll.jpg',
        title: 'Bootstrap',
    },
    {
        id: 4,
        imgUrl: 'https://res.cloudinary.com/dmogabwqz/image/upload/v1734150444/Javascript_icon_asge0h.png',
        title: 'Java Script',
    },
    {
        id: 5,
        imgUrl: 'https://res.cloudinary.com/dmogabwqz/image/upload/v1734150436/React_js_icon_yd208w.png',
        title: 'React JS',
    },
    {
        id: 6,
        imgUrl: 'https://res.cloudinary.com/dmogabwqz/image/upload/v1734150430/Node_js_icon_lojv3k.png',
        title: 'Node JS',
    },
    {
        id: 7,
        imgUrl: 'https://res.cloudinary.com/dmogabwqz/image/upload/v1734150424/Express_js_icon_dpg7cj.png',
        title: 'Express JS',
    },
    {
        id: 8,
        imgUrl: 'https://res.cloudinary.com/dmogabwqz/image/upload/v1734150418/Sql_icon_g9201h.png',
        title: 'SQL',
    },
    {
        id: 9,
        imgUrl: 'https://res.cloudinary.com/dmogabwqz/image/upload/v1734151061/MongoDB_icon._flvwll.png',
        title: 'MongoDB',
    },
    {
        id: 10,
        imgUrl: 'https://res.cloudinary.com/dmogabwqz/image/upload/v1734150403/python_icon_i1nyiw.jpg',
        title: 'Python',
    },
    {
        id: 11,
        imgUrl: 'https://res.cloudinary.com/dmogabwqz/image/upload/v1734151067/Figma_icon._ggfpfd.jpg',
        title: 'Figma',
    },
    {
        id: 12,
        imgUrl: 'https://res.cloudinary.com/dmogabwqz/image/upload/v1734103022/Git-Icon-1788C_axmw8c.png',
        title: 'Git',
    },

]

const certificatesList = [
    {
        id: 1,
        imgUrl: 'https://res.cloudinary.com/dmogabwqz/image/upload/v1734155989/Screenshot_2024-12-14_111745_vnrf8v.png',
        title: 'Industry Ready Certificate',
        hostedLink: 'https://certificates.ccbp.in/intensive/irc?id=2ENOMVZ4DU',
    },
    {
        id: 2,
        imgUrl: 'https://res.cloudinary.com/dmogabwqz/image/upload/v1734155959/Screenshot_2024-12-14_111945_jw5ynl.png',
        title: 'Python',
        hostedLink: 'https://certificates.ccbp.in/intensive/programming-foundations?id=WPIOBJKJMJ',
    },
    {
        id: 3,
        imgUrl: 'https://res.cloudinary.com/dmogabwqz/image/upload/v1734155854/Screenshot_2024-12-14_112605_isckv1.png',
        title: 'SQL',
        hostedLink: 'https://certificates.ccbp.in/intensive/introduction-to-databases?id=MHIHILRBMC',
    },
    {
        id: 4,
        imgUrl: 'https://res.cloudinary.com/dmogabwqz/image/upload/v1734155970/Screenshot_2024-12-14_111920_nujb4s.png',
        title: 'Git',
        hostedLink: 'https://certificates.ccbp.in/intensive/developer-foundations?id=ZZOKXGJGZG',
    },
    {
        id: 5,
        imgUrl: 'https://res.cloudinary.com/dmogabwqz/image/upload/v1734155932/Screenshot_2024-12-14_112414_ewakif.png',
        title: 'React JS',
        hostedLink: 'https://certificates.ccbp.in/intensive/react-js?id=FDSHVGHXYR',
    },
    {
        id: 6,
        imgUrl: 'https://res.cloudinary.com/dmogabwqz/image/upload/v1734155939/Screenshot_2024-12-14_112351_cxnvew.png',
        title: 'Node JS',
        hostedLink: 'https://certificates.ccbp.in/intensive/node-js?id=FJNCFIBUKN',
    },
    {
        id: 7,
        imgUrl: 'https://res.cloudinary.com/dmogabwqz/image/upload/v1734155910/Screenshot_2024-12-14_112440_ux4hee.png',
        title: 'Javascript',
        hostedLink: 'https://certificates.ccbp.in/intensive/javascript-essentials?id=AXOTXFAYLH',
    },
    {
        id: 8,
        imgUrl: 'https://res.cloudinary.com/dmogabwqz/image/upload/v1734155947/Screenshot_2024-12-14_112013_srgjwp.png',
        title: 'Dynamic Website',
        hostedLink: 'https://certificates.ccbp.in/intensive/dynamic-web-application?id=IFDUBTVWDG',
    },
    {
        id: 9,
        imgUrl: 'https://res.cloudinary.com/dmogabwqz/image/upload/v1734155978/Screenshot_2024-12-14_111832_fnldey.png',
        title: 'Responsive Web Design Using Flexbox',
        hostedLink: 'https://certificates.ccbp.in/intensive/flexbox?id=ISCZLMMHJN',
    },
    {
        id: 10,
        imgUrl: 'https://res.cloudinary.com/dmogabwqz/image/upload/v1734155895/Screenshot_2024-12-14_112526_opspcw.png',
        title: 'Responsive Website',
        hostedLink: 'https://certificates.ccbp.in/intensive/responsive-website?id=PXRNRBENCU',
    },
    {
        id: 11,
        imgUrl: 'https://res.cloudinary.com/dmogabwqz/image/upload/v1734155902/Screenshot_2024-12-14_112502_vne96y.png',
        title: 'Static Website',
        hostedLink: 'https://certificates.ccbp.in/intensive/static-website?id=UELDHRJXRQ',
    },
    {
        id: 12,
        imgUrl: 'https://res.cloudinary.com/dmogabwqz/image/upload/v1734155890/Screenshot_2024-12-14_112548_dqsfv5.png',
        title: 'XPM 4.0',
        hostedLink: 'https://certificates.ccbp.in/intensive/xpm-4-0-fundamentals?id=MIIYBOKFOB',
    },

]

class Aboutme extends Component{

    renderAboutmeDetailsCard = () => (
        <div className='aboutme-details-card'>
            <div className='aboutme-image-resume-card'>
                <img className='aboutme-image' src='https://res.cloudinary.com/dmogabwqz/image/upload/v1734098782/WhatsApp_Image_2024-12-13_at_7.34.52_PM_ac3kvp.jpg' alt='img' />
                <Link to={resume} target='_blank' download={resume} className='link'>
                <button className='aboutme-resume-btn' type='button'>
                    <MdOutlineDownloadForOffline className='aboutme-resume-icon'/>
                    Download Resume
                </button>
                </Link>
            </div>
            <div className='aboutme-know-aboutme-card'>
            <h1 className='aboutme-know-aboutme-heading'>Know About me</h1>
            <p className='aboutme-know-aboutme-description'>I’m a Full Stack Developer with a strong foundation in HTML, CSS, JavaScript, Bootstrap, SQL, Python, MongoDB, Node.js, Express.js, ReactJS, Git, and Figma. I’m passionate about using these skills to develop innovative web applications that are user-friendly. I’m always eager to learn more about web development and marketing. I enjoy the challenge of coding and solving real-world problems. Currently, I’m looking for opportunities to join a team that values innovation and shares my enthusiasm for technology.</p>
            </div>
        </div>
    )

    renderTechnicalSkills = () => (
        <div className='aboutme-techincal-skills-card'>
            <h1 className='aboutme-techincal-skill-heading'>Technical Skills</h1>
            <ul className="aboutme-technical-skillslist-card">
            {technicalSkillsList.map(eachSkill => (
                <li className="aboutme-technical-skill-li" key={eachSkill.id}>
                <img src={eachSkill.imgUrl} alt={eachSkill.title} className="aboutme-technical-skill-img" />
                <p className="aboutme-technical-skill-title">{eachSkill.title}</p>
            </li>
            ))}
            </ul>
        </div>
    )

    renderMyServices = () => (
        <div className='aboutme-myservices-card'>
            <h1 className='aboutme-myservices-heading'>My Services</h1>
            <ul className='aboutme-myservices-ul'>
                <li className='aboutme-myservice-li'>
                    <h1 className='aboutme-myservice-li-heading'>Web Development</h1>
                    <p className='aboutme-myservice-li-description'>I create and maintain websites, focusing on functionality and visual appeal. My expertise includes responsive design, performance optimization, and seamless user experiences.</p>
                </li>
                <li className='aboutme-myservice-li'>
                    <h1 className='aboutme-myservice-li-heading'>Custom Website</h1>
                    <p className='aboutme-myservice-li-description'>I offer tailored website solutions based on individual client needs. By collaborating closely with clients, I create custom designs that incorporate features like e-commerce functionality, content management systems (CMS), and interactive elements.</p>
                </li>
                <li className='aboutme-myservice-li'>
                    <h1 className='aboutme-myservice-li-heading'>UI Development</h1>
                    <p className='aboutme-myservice-li-description'>I specialize in creating user-friendly interfaces (UI) for websites and applications. My focus is on designing and implementing visually appealing elements, including layout, colors, and typography. The goal is to enhance usability and create engaging user experiences.</p>
                </li>
            </ul>
        </div>
    )

    renderCertificates = () => (
        <div className='aboutme-certificates-card'>
            <h1 className='aboutme-certificate-heading'>Certificates</h1>
            <ul className="aboutme-certificates-list-card">
            {certificatesList.map(eachCertificate => (
                <li className="aboutme-certificate-li" key={eachCertificate.id}>
                <img src={eachCertificate.imgUrl} alt={eachCertificate.title} className="aboutme-certificate-img" />
                <Link to={eachCertificate.hostedLink} target='_blank' className='link'>
                    <button className="aboutme-certificate-title-btn">{eachCertificate.title}
                    <FaArrowUpRightFromSquare className="aboutme-certificate-view-icon" />
                    </button>
                </Link>
            </li>
            ))}
            </ul>
        </div>
    )

    render(){
        return(
            <div className='bg-aboutme-container'>
            <Header/>
            <div className='aboutme-container'>
                {this.renderAboutmeDetailsCard()}
                {this.renderTechnicalSkills()}
                {this.renderMyServices()}
                {this.renderCertificates()}
            </div>
            <Footer />
            </div>
        )
    }
}

export default Aboutme