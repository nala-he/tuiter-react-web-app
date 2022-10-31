import React from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import "./index.css";

const ProfileComponent = () => {
    const profile = useSelector(state => state.profile);
    const birthdayOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };
    const joinDayOptions = {
        year: 'numeric',
        month: 'long',
    };

    return (

        <div className="border border-light">
            <div className="row row-cols-12 mt-2 mb-2">
                <div className="col-2 d-flex align-items-center justify-content-center">
                    <i className="bi bi-arrow-left-short wd-icon-large"> </i>
                </div>
                <div className="col-10">
                    <span className="h4">{profile.firstName} {profile.lastName}</span>
                    <br/>
                    <span className="text-secondary">
                        {profile.tuits.toLocaleString('en-US')} Tuits</span>
                </div>
            </div>
            <div className="position-relative wd-banner">
                <img src={`/images/${profile.bannerPicture}`}
                     className="w-100" height={200}/>
                <img className="wd-portrait position-absolute start-0 ms-3"
                     src={`/images/${profile.profilePicture}`}/>
                <Link to="../edit-profile"
                      className="btn btn-white border rounded-pill fw-bolder position-relative
            float-end me-3 mt-2">
                    Edit Profile</Link>
            </div>
            <div className="m-3 position-relative">
                <span className="h5 fw-bolder">{profile.firstName} {profile.lastName}
                </span><br/>
                <span className="text-secondary">{profile.handle}</span>
                <p className="mt-3 mb-3">{profile.bio}</p>
                <div className="d-flex flex-row mb-3">
                    <div>
                        <i className="bi bi-geo-alt me-1"> </i>
                        <span className="text-secondary me-3">{profile.location}</span>
                    </div>
                    <div>
                        <i className="bi bi-balloon me-1"> </i>
                        <span className="text-secondary me-3">
                        Born {
                            new Date(profile.dateOfBirth)
                                .toLocaleString('en-US', birthdayOptions)
                        }</span>
                    </div>
                    <div>
                        <i className="bi bi-calendar3 me-1"> </i>
                        <span className="text-secondary">Joined {
                            new Date(profile.dateJoined.split('/')[0] + '/1/'
                                     + profile.dateJoined.split('/')[1])
                                .toLocaleString('en-US', joinDayOptions)
                        }</span>
                    </div>
                </div>
                <div className="d-flex flex-row">
                    <span className="fw-bolder me-1">{profile.followingCount
                        .toLocaleString('en-US')}</span>
                    <span className="text-secondary me-3">Following</span>
                    <span className="fw-bolder me-1">{profile.followersCount
                        .toLocaleString('en-US')}</span>
                    <span className="text-secondary">Followers</span>
                </div>
            </div>
            {/*<pre>{JSON.stringify(profile, null, 2)}</pre>*/}
        </div>
    );
};
export default ProfileComponent;