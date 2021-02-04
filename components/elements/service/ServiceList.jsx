import React, { Component } from "react";
import { FiLayers , FiUsers , FiMonitor, FiTarget, FiGitPullRequest } from "react-icons/fi";

const ServiceList = [
    {
        icon: <FiTarget />,
        title: 'Business Goals',
        description: 'We discuss your business objectives and tailor the project to achieving just that.'
    },
    {
        icon: <FiUsers />,
        title: 'User Experience',
        description: 'I design your websites and apps to be as easy to use as possible, guiding users towards the end goal.'
    },
    {
        icon: <FiLayers />,
        title: 'Tailored Development',
        description: 'I build with your objectives at the forefront, working closely with you through the entire process.'
    },
    {
        icon: <FiGitPullRequest />,
        title: 'Meticulous Testing',
        description: 'I ensure the quality of your project by meticulously testing using multiple approaches.'
    },
    { 
        icon: <FiMonitor />,
        title: 'Ongoing Support',
        description: 'Whether you\'re adding new features or making improvements, I’m there to provide all the support you\'d require.'
    },
]


class ServiceThree extends Component{
    render(){
        const {column } = this.props;
        const ServiceContent = ServiceList.slice(0 , this.props.item);
        
        return(
            <React.Fragment>
                <div className="row">
                    {ServiceContent.map( (val , i) => (
                        <div className={`${column}`} key={i}>
                            <span>
                                <div className="service service__style--2">
                                    <div className="icon">
                                        {val.icon}
                                    </div>
                                    <div className="content">
                                        <h3 className="title">{val.title}</h3>
                                        <p>{val.description}</p>
                                    </div>
                                </div>
                            </span>
                        </div>
                    ))}
                </div>
            </React.Fragment>
        )
    }
}
export default ServiceThree;
