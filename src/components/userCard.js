import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getRandomUser } from '../actions/appActions'
import SkateboardIcon from './../assets/skateboarding.gif'
import CalendarIcon from './../assets/svg/calendar.svg'
import UserIcon from './../assets/svg/user.svg'
import LockIcon from './../assets/svg/locked.svg'
import CallIcon from './../assets/svg/call.svg'
import MapIcon from './../assets/svg/map-location.svg'
import EmailIcon from './../assets/svg/email.svg'

// import './UserCard.scss'


const UserCard = () => {
  const appState = useSelector(state => state.app);
  const dispatch = useDispatch();
  const { randomUser, loading }  = appState;

  // variables for the info that is displayed on icon hover
  const [subtitle, setSubtitle] = useState('');
  const [details, setDetails] = useState('');

  // Updates the details displayed under avatar
  function updateDetails(heading, value){
      setSubtitle(heading);
      setDetails(value);
  }

  // get user from randomUser API
  useEffect(() => {
    dispatch(getRandomUser());
  },[dispatch]);

  // return if user not loaded
  if (loading) {
    return(
    <div className='l-container u-padding--none u-margin--tp-sm'>
          <div className='u-content--center'>
            <div className='c-card u-text--centered'>
              <div className='c-card__content u-padding--none u-border--none'>
                <div className='c-card__header u-border--bottom'>
                 <img src={SkateboardIcon} alt='loader' />
                </div>
              </div>
            </div>
          </div>
      </div>
    )
  }

  // Show once user is loaded. 
  return (
    <div className='row'>
      <div className='top-container'>

      </div>
        <div className='l-container u-padding--none u-margin--tp-sm'>
            <div className='u-content--center'>
              <div className='c-card u-text--centered'>
                <div className='c-card__content u-padding--none u-border--none'>
                  <div className='c-card__header u-border--bottom'>
                    <img className='u-image avatar u-image--150 u-image--rounded' src={randomUser.picture.large} alt='avatar' />
                  </div>
                  <div className='details-container'>
                    <h3 className='c-card__subtitle u-margin--none'>{subtitle? subtitle : 'Hi, My name is'}</h3>
                    <h2 className='c-card__title u-text--lg'>{details? details : randomUser.name.first + ' ' + randomUser.name.last}</h2>
                  </div>
                  <ul className='c-tabs l-row u-grid-justify--center u-padding--md'>
                    <li className='c-tabs__list u-padding--sm' onMouseEnter={() => updateDetails('Hi, My name is', randomUser.name.first + ' ' + randomUser.name.last)}>
                      <img className='u-image--24' src={UserIcon} alt='user icon' />
                    </li>
                    <li className='c-tabs__list u-padding--sm' onMouseEnter={() => updateDetails('My email address is', randomUser.email)}>
                      <img className='u-image--24' src={EmailIcon} alt='email icon' />
                    </li>
                    <li className='c-tabs__list u-padding--sm' onMouseEnter={() => updateDetails('My birthday is', new Date(randomUser.dob.date).toLocaleDateString())}>
                      <img className='u-image--24' src={CalendarIcon} alt='calendar icon' />
                    </li>
                    <li className='c-tabs__list u-padding--sm' onMouseEnter={() => updateDetails('My address is', randomUser.location.street.number + ' ' + randomUser.location.street.name)}>
                      <img className='u-image--24' src={MapIcon} alt='map icon' />
                    </li>
                    <li className='c-tabs__list u-padding--sm' onMouseEnter={() => updateDetails('My phone number is', randomUser.cell)}>
                      <img className='u-image--24' src={CallIcon} alt='call icon' />
                    </li>
                    <li className='c-tabs__list u-padding--sm' onMouseEnter={() => updateDetails('My password is', randomUser.login.password)}>
                      <img className='u-image--24' src={LockIcon} alt='lock icon' />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
        </div>
      </div>
  );
};



export default UserCard;