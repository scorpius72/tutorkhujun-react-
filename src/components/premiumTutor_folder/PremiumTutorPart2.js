import React from 'react';
import './PremiumTutorPart2.scss';
import { useNavigate } from 'react-router-dom';

function PremiumTutorPart2(props) {
    const navigate = useNavigate();

    const goToTutorProfile = (id) => {
        // console.log(id);
        navigate(`/tutor-details/${id}`);
    };

    return (
        <div className='premium-part-2'>
            <div className='title-1'>Showing <span style={{fontWeight:'600', fontSize:'16px'}}>{props.allTutorInfo.length}</span> tutors</div>
            <div className='line'></div>

            <div className='text-center premium-tutor-slider' style={{ display: 'flex' }}>
                <div className='row'>
                    {props.allTutorInfo && props.allTutorInfo.map((obj, i) => {
                        return (
                            <div key={i} className="col tutor-card tutor-card-view" style={{maxWidth:'300px', margin: '4px' }}>

                                <div className="text-center for-premium-style">
                                    <div className={obj.isPremium ? "activate" : ""}>
                                        <img
                                            className="teacher-style"
                                            src={obj.profilePicture}
                                            alt="teacher"
                                            style={{ display: "block", margin: "0 auto" }} // Centering image
                                        ></img>
                                    </div>
                                  
                                </div>

                                <div className="teacher-name">{obj.tutorName}</div>
                                <div className="teacher-university">
                                    {obj.varsity}
                                </div>
                                <div className="teacher-subject">{obj.subject}</div>
                                <div className="place-style">
                                    <div>
                                        <i
                                            className="fa-solid fa-location-dot"
                                            style={{ marginRight: "3px", color: "red" }}
                                        ></i>
                                        {obj.tutionDistrict}
                                    </div>
                                </div>
                                <button className="btn btn-1 gradient_bg text-light" onClick={() => goToTutorProfile(obj.id)}>
                                    View Details
                                </button>
                            </div>

                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default PremiumTutorPart2;
