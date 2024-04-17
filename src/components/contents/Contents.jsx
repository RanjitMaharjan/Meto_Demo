import React from 'react';
import './contents.css';
import img2 from '../../Assets/img2.png';
import img3 from '../../Assets/img3.png';
import img4 from '../../Assets/img4.png';

const Contents = () => {
    return (
        <section id="contents">
        <div className="container contents_container">
        <div className="contents_image">
                <img src={img2} alt="" />
            </div>
            <div className="contents_textcontent">
                <div className="contents_head">
                    OUR METHODOLOGY
                </div>
                <div className="contents_title">
                    Agile development methodology
                </div>
                <div className="contents_text">
                    We use the agile development methodology to minimize risk, such as bugs, 
                    cost overruns, and changing requirements, when adding new functionality. 
                    In our approach, we develop the software in iterations that contain 
                    mini-increments of the new functionality. We consider different forms of 
                    the agile development method, including scrum, crystal, extreme programming 
                    (XP), and feature-driven development (FDD).
                </div>
            </div>
            
        </div>

        <div className="container contents_container">
            <div className="contents_textcontent">
                <div className="contents_head">
                    CUSTOMIZATION AND SCALABILITY
                </div>
                <div className="contents_title">
                    Crafting Solutions Just for You
                </div>
                <div className="contents_text">
                    Discover how we personalize your experience with customized features and 
                    effortlessly scale your system to match your growing needs. Our approach 
                    ensures that your software is uniquely tailored to fit your business, allowing 
                    you to adapt easily and efficiently. Explore simplicity and adaptability in our 
                    Customization and Scalability
                </div>
            </div>
            <div className="contents_image">
                <img src={img3} alt="" />
            </div>
        </div>

        <div className="container contents_container">
        <div className="contents_image">
                <img src={img4} alt="" />
            </div>
            <div className="contents_textcontent">
                <div className="contents_head">
                    BENEFITS OF WORKING WITH US
                </div>
                <div className="contents_title">
                    Reliability in Partnership
                </div>
                <div className="contents_text">
                    Rely on us for more than just solutions—rely on a steadfast partnership. 
                    Discover the assurance of reliability, commitment, and a shared commitment 
                    to your sustained success.
                </div>
            </div>
            
        </div>
        </section>

        
    )
  }

export default Contents
