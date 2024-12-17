import {Component} from 'react'
import {Link} from 'react-router-dom'
import { FaArrowUpRightFromSquare } from "react-icons/fa6"

import Header from '../Header'
import Footer from '../Footer'
import ProjectsCategoriesTab from '../ProjectsCategoriesTab'

import './index.css'

const categoriesTabList = [
    {id: 'REACT', displayText: 'React'},
    {id: 'DYNAMIC', displayText: 'Dynamic'},
    {id: 'RESPONSIVE', displayText: 'Responsive'},
    {id: 'STATIC', displayText: 'Static'}
]

const projectsList = [
    {
      projectId: 1,
      category: 'REACT',
      imgUrl: 'https://res.cloudinary.com/dmogabwqz/image/upload/v1734347130/Screenshot_2024-12-07_144531_bbfhjj.png',
      title: 'Insta Share',
      hostedLink: 'https://hkjinstashare.ccbp.tech/login',
      gitHubLink: 'https://github.com/jellaharikrishna/InstaShare-MiniProject.git',
    },
    {
        projectId: 2,
        category: 'REACT',
        imgUrl: 'https://res.cloudinary.com/dmogabwqz/image/upload/v1734347174/Screenshot_2024-12-06_183145_io1wyt.png',
        title: 'Nxt Trendz',
        hostedLink: 'https://hkjenhancenxttr.ccbp.tech/login',
        gitHubLink: 'https://github.com/jellaharikrishna/nxtTrendz-CartFeatures-43.git',
      },
      {
        projectId: 3,
        category: 'REACT',
        imgUrl: 'https://res.cloudinary.com/dmogabwqz/image/upload/v1734347207/Screenshot_2024-12-06_201654_fkpaly.png',
        title: 'Jobby App',
        hostedLink: 'https://hkjjobbyapp.ccbp.tech/login',
        gitHubLink: 'https://github.com/jellaharikrishna/jobbyApp-Assignment-5.git',
      },
      {
        projectId: 4,
        category: 'REACT',
        imgUrl: 'https://res.cloudinary.com/dmogabwqz/image/upload/v1734347240/Screenshot_2024-12-06_210053_d6jkoq.png',
        title: 'Nxt Watch',
        hostedLink: 'https://hkjnxtwatchs.ccbp.tech/login',
        gitHubLink: ' https://github.com/jellaharikrishna/nxtWatch-Assignment-7.git',
      },
      {
        projectId: 5,
        category: 'REACT',
        imgUrl: 'https://res.cloudinary.com/dmogabwqz/image/upload/v1734347258/Screenshot_2024-12-07_153551_dx9ptd.png',
        title: 'Simple Todos',
        hostedLink: ' https://hkjenhancesimpl.ccbp.tech/',
        gitHubLink: 'https://github.com/jellaharikrishna/simpleTodos-6.3.git',
      },
      {
        projectId: 6,
        category: 'REACT',
        imgUrl: 'https://res.cloudinary.com/dmogabwqz/image/upload/v1734347275/Screenshot_2024-12-07_152252_xx1ara.png',
        title: 'Restaurant App',
        hostedLink: 'https://hkjenhanceresta.ccbp.tech/login',
        gitHubLink: 'https://github.com/jellaharikrishna/restaurantApp.git',
      },
      {
        projectId: 7,
        category: 'REACT',
        imgUrl: 'https://res.cloudinary.com/dmogabwqz/image/upload/v1734347300/Screenshot_2024-12-06_205520_cdnu9v.png',
        title: 'Rock Paper Scissors',
        hostedLink: 'https://hkjrockpapersci.ccbp.tech/',
        gitHubLink: 'https://github.com/jellaharikrishna/rockPaperScissors-Assignment-6.git',
      },
      {
        projectId: 8,
        category: 'REACT',
        imgUrl: 'https://res.cloudinary.com/dmogabwqz/image/upload/v1734347317/Screenshot_2024-12-06_201149_bqnmnp.png',
        title: 'Prime Video',
        hostedLink: 'https://hkjprimevideo.ccbp.tech/',
        gitHubLink: 'https://github.com/jellaharikrishna/primeVideo-40.2.git',
      },
      {
        projectId: 9,
        category: 'REACT',
        imgUrl: 'https://res.cloudinary.com/dmogabwqz/image/upload/v1734347336/Screenshot_2024-12-07_143826_tdvqgp.png',
        title: 'Show Clock App',
        hostedLink: 'https://hkjshowclock.ccbp.tech/',
        gitHubLink: 'https://github.com/jellaharikrishna/sesssionCode-ShowClockAppEffectHook.git',
      },
      {
        projectId: 10,
        category: 'REACT',
        imgUrl: 'https://res.cloudinary.com/dmogabwqz/image/upload/v1734347349/Screenshot_2024-12-07_143359_hr7jhi.png',
        title: 'Leader Board App',
        hostedLink: 'https://hkjleaderboard.ccbp.tech/',
        gitHubLink: 'https://github.com/jellaharikrishna/sesssionCode-LeaderboardAppEffectHook.git',
      },
      {
        projectId: 11,
        category: 'REACT',
        imgUrl: 'https://res.cloudinary.com/dmogabwqz/image/upload/v1734359052/Screenshot_2024-12-07_114659_luqapw.png',
        title: 'My Tasks',
        hostedLink: 'https://hkjmytasks.ccbp.tech/',
        gitHubLink: 'https://github.com/jellaharikrishna/IMT-1B-myTasks-3.git',
      },
      {
        projectId: 12,
        category: 'REACT',
        imgUrl: 'https://res.cloudinary.com/dmogabwqz/image/upload/v1734359098/Screenshot_2024-12-06_181840_uyo8py.png',
        title: 'IPL Dashboard App',
        hostedLink: 'https://hkjdebugiplboad.ccbp.tech/',
        gitHubLink: 'https://github.com/jellaharikrishna/iPLDashboardApp-Assignment-4.git',
      },
      {
        projectId: 13,
        category: 'DYNAMIC',
        imgUrl: 'https://res.cloudinary.com/dmogabwqz/image/upload/v1734359285/Screenshot_2024-12-16_194102_nlsqjc.png',
        title: 'Todos Application',
        hostedLink: 'hkjtodosapp.ccbp.tech',
        gitHubLink: 'https://github.com/jellaharikrishna',
      },
      {
        projectId: 14,
        category: 'DYNAMIC',
        imgUrl: 'https://res.cloudinary.com/dmogabwqz/image/upload/v1734359285/Screenshot_2024-12-16_194102_nlsqjc.png',
        title: 'Library Management',
        hostedLink: 'hkjlibrarymanag.ccbp.tech',
        gitHubLink: 'https://github.com/jellaharikrishna',
      },
      {
        projectId: 15,
        category: 'DYNAMIC',
        imgUrl: 'https://res.cloudinary.com/dmogabwqz/image/upload/v1734359285/Screenshot_2024-12-16_194102_nlsqjc.png',
        title: 'Speed Typing Test',
        hostedLink: 'hkjspeedtyping.ccbp.tech',
        gitHubLink: 'https://github.com/jellaharikrishna',
      },
      {
        projectId: 16,
        category: 'DYNAMIC',
        imgUrl: 'https://res.cloudinary.com/dmogabwqz/image/upload/v1734359285/Screenshot_2024-12-16_194102_nlsqjc.png',
        title: 'Bookmark Maker',
        hostedLink: 'hkjbookmarkmake.ccbp.tech',
        gitHubLink: 'https://github.com/jellaharikrishna',
      },
      {
        projectId: 17,
        category: 'DYNAMIC',
        imgUrl: 'https://res.cloudinary.com/dmogabwqz/image/upload/v1734359285/Screenshot_2024-12-16_194102_nlsqjc.png',
        title: 'Go Rest Console',
        hostedLink: 'hkjgorestconsol.ccbp.tech',
        gitHubLink: 'https://github.com/jellaharikrishna',
      },
      {
        projectId: 18,
        category: 'DYNAMIC',
        imgUrl: 'https://res.cloudinary.com/dmogabwqz/image/upload/v1734359285/Screenshot_2024-12-16_194102_nlsqjc.png',
        title: 'Answer the Question',
        hostedLink: 'hkjans2question.ccbp.tech',
        gitHubLink: 'https://github.com/jellaharikrishna',
      },
      {
        projectId: 19,
        category: 'DYNAMIC',
        imgUrl: 'https://res.cloudinary.com/dmogabwqz/image/upload/v1734359285/Screenshot_2024-12-16_194102_nlsqjc.png',
        title: 'Select your Pet',
        hostedLink: 'hkjselectyourpe.ccbp.tech',
        gitHubLink: 'https://github.com/jellaharikrishna',
      },
      {
        projectId: 20,
        category: 'DYNAMIC',
        imgUrl: 'https://res.cloudinary.com/dmogabwqz/image/upload/v1734359285/Screenshot_2024-12-16_194102_nlsqjc.png',
        title: 'User Data Form',
        hostedLink: 'hkjuserdataform.ccbp.tech',
        gitHubLink: 'https://github.com/jellaharikrishna',
      },
      {
        projectId: 21,
        category: 'DYNAMIC',
        imgUrl: 'https://res.cloudinary.com/dmogabwqz/image/upload/v1734359285/Screenshot_2024-12-16_194102_nlsqjc.png',
        title: 'Update Password',
        hostedLink: 'hkjupdatepasswo.ccbp.tech',
        gitHubLink: 'https://github.com/jellaharikrishna',
      },
      {
        projectId: 22,
        category: 'DYNAMIC',
        imgUrl: 'https://res.cloudinary.com/dmogabwqz/image/upload/v1734359285/Screenshot_2024-12-16_194102_nlsqjc.png',
        title: 'Subscribe to Us',
        hostedLink: 'hkjsubscribe2us.ccbp.tech',
        gitHubLink: 'https://github.com/jellaharikrishna',
      },
      {
        projectId: 23,
        category: 'DYNAMIC',
        imgUrl: 'https://res.cloudinary.com/dmogabwqz/image/upload/v1734359285/Screenshot_2024-12-16_194102_nlsqjc.png',
        title: 'Know Fact About the Number',
        hostedLink: 'hkjknowfactabou.ccbp.tech',
        gitHubLink: 'https://github.com/jellaharikrishna',
      },
      {
        projectId: 24,
        category: 'DYNAMIC',
        imgUrl: 'https://res.cloudinary.com/dmogabwqz/image/upload/v1734359285/Screenshot_2024-12-16_194102_nlsqjc.png',
        title: 'Countries Search Page',
        hostedLink: 'hkjcountriessea.ccbp.tech',
        gitHubLink: 'https://github.com/jellaharikrishna',
      },
      {
        projectId: 25,
        category: 'RESPONSIVE',
        imgUrl: 'https://res.cloudinary.com/dmogabwqz/image/upload/v1734359298/Screenshot_2024-12-16_194705_ltgdqo.png',
        title: 'Virtual Reality Website',
        hostedLink: 'hkjvrwebsite.ccbp.tech',
        gitHubLink: 'https://github.com/jellaharikrishna',
      },
      {
        projectId: 26,
        category: 'RESPONSIVE',
        imgUrl: 'https://res.cloudinary.com/dmogabwqz/image/upload/v1734359298/Screenshot_2024-12-16_194705_ltgdqo.png',
        title: 'Jenny Portfolio Website',
        hostedLink: 'hkjjennywebsite.ccbp.tech',
        gitHubLink: 'https://github.com/jellaharikrishna',
      },
      {
        projectId: 27,
        category: 'RESPONSIVE',
        imgUrl: 'https://res.cloudinary.com/dmogabwqz/image/upload/v1734359298/Screenshot_2024-12-16_194705_ltgdqo.png',
        title: 'Fly Buy Ecommerce Website',
        hostedLink: 'hkjflybuyecomme.ccbp.tech',
        gitHubLink: 'https://github.com/jellaharikrishna',
      },
      {
        projectId: 28,
        category: 'RESPONSIVE',
        imgUrl: 'https://res.cloudinary.com/dmogabwqz/image/upload/v1734359298/Screenshot_2024-12-16_194705_ltgdqo.png',
        title: 'Food Much Website',
        hostedLink: 'hkjfoodmuch.ccbp.tech',
        gitHubLink: 'https://github.com/jellaharikrishna',
      },
      {
        projectId: 29,
        category: 'RESPONSIVE',
        imgUrl: 'https://res.cloudinary.com/dmogabwqz/image/upload/v1734359298/Screenshot_2024-12-16_194705_ltgdqo.png',
        title: 'Design Website',
        hostedLink: 'hkjdesignwebsit.ccbp.tech',
        gitHubLink: 'https://github.com/jellaharikrishna',
      },
      {
        projectId: 30,
        category: 'RESPONSIVE',
        imgUrl: 'https://res.cloudinary.com/dmogabwqz/image/upload/v1734359298/Screenshot_2024-12-16_194705_ltgdqo.png',
        title: 'Tourism Website',
        hostedLink: 'hkjtourismwebsi.ccbp.tech',
        gitHubLink: 'https://github.com/jellaharikrishna',
      },
      {
        projectId: 31,
        category: 'RESPONSIVE',
        imgUrl: 'https://res.cloudinary.com/dmogabwqz/image/upload/v1734359298/Screenshot_2024-12-16_194705_ltgdqo.png',
        title: 'RW Coding Testimonals-1',
        hostedLink: 'hkjrwct1.ccbp.tech',
        gitHubLink: 'https://github.com/jellaharikrishna',
      },
      {
        projectId: 32,
        category: 'RESPONSIVE',
        imgUrl: 'https://res.cloudinary.com/dmogabwqz/image/upload/v1734359298/Screenshot_2024-12-16_194705_ltgdqo.png',
        title: 'RW Coding Testimonals-2',
        hostedLink: 'hkjrwct2.ccbp.tech',
        gitHubLink: 'https://github.com/jellaharikrishna',
      },
      {
        projectId: 33,
        category: 'RESPONSIVE',
        imgUrl: 'https://res.cloudinary.com/dmogabwqz/image/upload/v1734359298/Screenshot_2024-12-16_194705_ltgdqo.png',
        title: 'RW Coding Testimonals-3',
        hostedLink: 'hkjrwct3.ccbp.tech',
        gitHubLink: 'https://github.com/jellaharikrishna',
      },
      {
        projectId: 34,
        category: 'RESPONSIVE',
        imgUrl: 'https://res.cloudinary.com/dmogabwqz/image/upload/v1734359298/Screenshot_2024-12-16_194705_ltgdqo.png',
        title: 'Shoes Shopping Section',
        hostedLink: 'hkjshoppingcart.ccbp.tech',
        gitHubLink: 'https://github.com/jellaharikrishna',
      },
      {
        projectId: 35,
        category: 'RESPONSIVE',
        imgUrl: 'https://res.cloudinary.com/dmogabwqz/image/upload/v1734359298/Screenshot_2024-12-16_194705_ltgdqo.png',
        title: 'Summer Collection Section',
        hostedLink: 'hkjsummercollec.ccbp.tech',
        gitHubLink: 'https://github.com/jellaharikrishna',
      },
      {
        projectId: 36,
        category: 'RESPONSIVE',
        imgUrl: 'https://res.cloudinary.com/dmogabwqz/image/upload/v1734359298/Screenshot_2024-12-16_194705_ltgdqo.png',
        title: 'Chat Screen',
        hostedLink: 'hkjchatscreen.ccbp.tech',
        gitHubLink: 'https://github.com/jellaharikrishna',
      },
      {
        projectId: 37,
        category: 'STATIC',
        imgUrl: 'https://res.cloudinary.com/dmogabwqz/image/upload/v1734359308/Screenshot_2024-12-16_194843_m9ohxa.png',
        title: 'Articles Page',
        hostedLink: 'hkjarticlespage.ccbp.tech',
        gitHubLink: 'https://github.com/jellaharikrishna',
      },
      {
        projectId: 38,
        category: 'STATIC',
        imgUrl: 'https://res.cloudinary.com/dmogabwqz/image/upload/v1734359308/Screenshot_2024-12-16_194843_m9ohxa.png',
        title: 'Flats Page',
        hostedLink: 'hkjflatspage.ccbp.tech',
        gitHubLink: 'https://github.com/jellaharikrishna',
      },
      {
        projectId: 39,
        category: 'STATIC',
        imgUrl: 'https://res.cloudinary.com/dmogabwqz/image/upload/v1734359308/Screenshot_2024-12-16_194843_m9ohxa.png',
        title: 'Yoga Page',
        hostedLink: 'hkjyogapage.ccbp.tech',
        gitHubLink: 'https://github.com/jellaharikrishna',
      },
      {
        projectId: 40,
        category: 'STATIC',
        imgUrl: 'https://res.cloudinary.com/dmogabwqz/image/upload/v1734359308/Screenshot_2024-12-16_194843_m9ohxa.png',
        title: 'Foundations Page',
        hostedLink: 'hkjfoundationsp.ccbp.tech',
        gitHubLink: 'https://github.com/jellaharikrishna',
      },
      {
        projectId: 41,
        category: 'STATIC',
        imgUrl: 'https://res.cloudinary.com/dmogabwqz/image/upload/v1734359308/Screenshot_2024-12-16_194843_m9ohxa.png',
        title: 'Favorite Stores Page',
        hostedLink: 'hkjfavoritestor.ccbp.tech',
        gitHubLink: 'https://github.com/jellaharikrishna',
      },
      {
        projectId: 42,
        category: 'STATIC',
        imgUrl: 'https://res.cloudinary.com/dmogabwqz/image/upload/v1734359308/Screenshot_2024-12-16_194843_m9ohxa.png',
        title: 'My Projects Page',
        hostedLink: 'hkjprojectpage.ccbp.tech',
        gitHubLink: 'https://github.com/jellaharikrishna',
      },
      {
        projectId: 43,
        category: 'STATIC',
        imgUrl: 'https://res.cloudinary.com/dmogabwqz/image/upload/v1734359308/Screenshot_2024-12-16_194843_m9ohxa.png',
        title: 'Book Store Page',
        hostedLink: 'hkjbookstorepag.ccbp.tech',
        gitHubLink: 'https://github.com/jellaharikrishna',
      },
      {
        projectId: 44,
        category: 'STATIC',
        imgUrl: 'https://res.cloudinary.com/dmogabwqz/image/upload/v1734359308/Screenshot_2024-12-16_194843_m9ohxa.png',
        title: 'Music Page',
        hostedLink: 'hkjsleepmusicpg.ccbp.tech',
        gitHubLink: 'https://github.com/jellaharikrishna',
      },
      {
        projectId: 45,
        category: 'STATIC',
        imgUrl: 'https://res.cloudinary.com/dmogabwqz/image/upload/v1734359308/Screenshot_2024-12-16_194843_m9ohxa.png',
        title: 'Podcast Page',
        hostedLink: 'hkjpodcastpage.ccbp.tech',
        gitHubLink: 'https://github.com/jellaharikrishna',
      },
      {
        projectId: 46,
        category: 'STATIC',
        imgUrl: 'https://res.cloudinary.com/dmogabwqz/image/upload/v1734359308/Screenshot_2024-12-16_194843_m9ohxa.png',
        title: 'Quiz Question Page',
        hostedLink: 'hkjquizpage.ccbp.tech',
        gitHubLink: 'https://github.com/jellaharikrishna',
      },
      {
        projectId: 47,
        category: 'STATIC',
        imgUrl: 'https://res.cloudinary.com/dmogabwqz/image/upload/v1734359308/Screenshot_2024-12-16_194843_m9ohxa.png',
        title: 'Conference Page',
        hostedLink: 'hkjconferencepg.ccbp.tech',
        gitHubLink: 'https://github.com/jellaharikrishna',
      },
      {
        projectId: 48,
        category: 'STATIC',
        imgUrl: 'https://res.cloudinary.com/dmogabwqz/image/upload/v1734359308/Screenshot_2024-12-16_194843_m9ohxa.png',
        title: 'Mobile Specifications Page',
        hostedLink: 'hkjmobilepage.ccbp.tech',
        gitHubLink: 'https://github.com/jellaharikrishna',
      },
]

class Projects extends Component{
    state = {activeTabId: categoriesTabList[0].id}

    onClickCategoriesTab = id => {
        this.setState({activeTabId: id})
    }

    renderCategoriesTabList = () => {
        const {activeTabId} = this.state
        return (
            <ul className="projects-categoriestab-ul">
                {categoriesTabList.map(tabDetails => (
                <ProjectsCategoriesTab
                    key={tabDetails.id}
                    tabDetails={tabDetails}
                    onClickCategoriesTab={this.onClickCategoriesTab}
                    isActiveTabId={activeTabId === tabDetails.id}
                />
                ))}
            </ul>
        )
    }

    getFilterProjects = () => {
        const {activeTabId} = this.state
        const filteredProjects = projectsList.filter(
          eachProject => eachProject.category === activeTabId,
        )
        return filteredProjects
    }

    renderProjectsList = () => {
        const filteredProjects = this.getFilterProjects()
        return (
            <ul className="projects-lists-ul">
                {filteredProjects.map(eachProject => (
                <li className="project-list-li" key={eachProject.projectId}>
                <img src={eachProject.imgUrl} alt={eachProject.title} className="project-list-li-img" />
                <p className='project-list-li-title-heading'>{eachProject.title}</p>
                <div className='project-list-li-hosted-github-card'>
                    <Link to={eachProject.hostedLink} target='_blank' className='link'>
                        <button className="project-list-li-btn"> Hosted
                        <FaArrowUpRightFromSquare className="project-list-li-view-icon" />
                        </button>
                    </Link>
                    <Link to={eachProject.gitHubLink} target='_blank' className='link'>
                        <button className="project-list-li-btn"> Github
                        <FaArrowUpRightFromSquare className="project-list-li-view-icon" />
                        </button>
                    </Link>
                </div>
                </li>
                ))}
        </ul>
        )
    }

    render() {
        return (
            <div>
            <Header />
            <div className='projects-card'>
                <h1 className='projects-heading'>Projects</h1>
                <p className="projects-description">
                My skills and achievements showcase my strengths and abilities.
                Speak about any new skills or software I learnt to perform the
                project responsibilities.
                </p>
                {this.renderCategoriesTabList()}
                {this.renderProjectsList()}
            </div>
            <Footer/>
            </div>
        )
    }
}

export default Projects