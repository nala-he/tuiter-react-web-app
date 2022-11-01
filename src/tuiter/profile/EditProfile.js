import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import "./index.css";
import {Link} from "react-router-dom";
import {updateProfile} from "./profile-reducer";

const EditProfile = () => {
    const profile = useSelector(state => state.profile);
    let [showEdit, setShowEdit] = useState(false);
    let [editedProfile, setEditedProfile] = useState(profile);

    // let [updatedProfile, setUpdatedProfile] = useState(editedProfile);
    let [newName, setName] = useState(profile.firstName + " " + profile.lastName);
    const dispatch = useDispatch();

    const saveClickHandler = () => {
        dispatch(updateProfile(editedProfile));
    }

    const birthdayOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };
    return (
        <div className="border border-light">
            <div className="row row-cols-12 mt-2 mb-2 d-flex align-items-center">
                <div className="col-2 d-flex justify-content-center">
                    <Link to="/tuiter/profile">
                        <i className="bi bi-x wd-icon-large text-black"> </i>
                    </Link>
                </div>
                <div className="col-7">
                    <span className="h4">Edit profile</span>
                </div>
                <div className="col-3 d-flex justify-content-center">

                        <Link to="/tuiter/profile" className="wd-link-no-decor">
                            <button onClick={saveClickHandler}
                                    className="btn btn-sm btn-dark text-white ps-3 pe-3
                          rounded-pill fw-bolder">Save</button>
                        </Link>
                </div>
            </div>
            <div className="position-relative wd-banner">
                <img src={`/images/${profile.bannerPicture}`}
                     className="w-100 wd-grayscale" height={200} alt="banner"/>
                <img className="wd-portrait position-absolute start-0 ms-3 wd-grayscale"
                     src={`/images/${profile.profilePicture}`} alt="portrait"/>
            </div>

            <div className="m-3 position-relative">
                <div className="form-group border rounded mb-4">
                    <label className="text-secondary ps-2 pt-1" htmlFor="name">Name</label>
                    <input className="form-control border-0 ps-2" id="name"
                           onChange={(e) => {
                               setName(e.target.value);
                               setEditedProfile({...editedProfile,
                                                 firstName: e.target.value.split(" ")[0],
                                                 lastName: e.target.value.split(" ")[1]
                               })
                           }}
                           value={newName}
                    />
                </div>
                <div className="form-group border rounded mb-4">
                    <label className="text-secondary ps-2 pt-1" htmlFor="bio">Bio</label>
                    <textarea className="form-control border-0 ps-2 wd-textarea"
                              id="bio" rows={3}
                              onChange={(e) => {
                                  setEditedProfile({...editedProfile, bio: e.target.value})
                              }}
                              value={editedProfile.bio}/>
                </div>
                <div className="form-group border rounded mb-4">
                    <label className="text-secondary ps-2 pt-1" htmlFor="location">Location</label>
                    <input className="form-control border-0 ps-2" id="location"
                           onChange={(e) =>
                               {setEditedProfile({
                                               ...editedProfile,
                                               location: e.target.value})
                               }
                           }
                           value={editedProfile.location}
                    />
                </div>
                <div className="form-group border rounded mb-4">
                    <input className="form-control border-0 ps-2 pt-3 pb-3" id="website"
                           placeholder="Website"
                           onChange={(e) => {
                               setEditedProfile({...editedProfile, website: e.target.value})
                           }}
                           value={editedProfile.website}/>
                </div>
                <div className="form-group mb-4">
                    <div className="d-flex align-items-center mb-2">
                        <span className="text-secondary ps-0 pe-1">
                        Birth date · </span>
                        <a className="text-primary btn border-0 p-0"
                           onClick={() => {setShowEdit(true)}}>
                            Edit
                        </a>
                    </div>
                        {
                            showEdit ? <input className="me-3 form-control border p-0"
                                              onChange={(e) => {
                                                  setEditedProfile({...editedProfile,
                                                                 dateOfBirth: e.target.value})
                                              }}
                                              value={editedProfile.dateOfBirth}/>
                                     : <span className="me-3 border-0 p-0">
                                            {
                                                new Date(editedProfile.dateOfBirth)
                                                .toLocaleString('en-US',
                                                birthdayOptions)
                                            }
                                       </span>
                        }
                </div>
                <div className="form-group mb-4">
                    <span className="">Switch to professional</span>
                    <a href="#"><i className="bi bi-chevron-right float-end text-black"> </i></a>
                </div>
            </div>
            {/*<pre>{JSON.stringify(newProfile, null, 2)}</pre>*/}
        </div>
    );
};
export default EditProfile;
