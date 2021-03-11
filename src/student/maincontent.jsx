import React from 'react';
import {useState} from 'react'
import { FaBars, FaPhoneAlt, FaRegCalendarAlt} from 'react-icons/fa';
import { FiSettings, FiSearch } from 'react-icons/fi';
import { GrNotification } from 'react-icons/gr';
import {MdEmail, MdContactMail} from 'react-icons/md'
import {days, months} from '../date'
const dat = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga veritatis delectus beatae voluptas maxime enim ipsum labore eveniet repudiandae natus ad, tempora quaerat animi ipsa molestiae porro non laudantium adipisci dolorem consequatur aperiam. Exercitationem adipisci, eveniet quibusdam dignissimos consequatur asperiores blanditiis architecto fugit sapiente, cumque velit. Maxime quae culpa nobis quasi ea aliquid! Excepturi deleniti ad similique commodi dolore placeat delectus quisquam odio quaerat, suscipit provident nihil laborum, incidunt doloribus aliquid magni temporibus! Consequuntur iusto assumenda illo vitae harum corrupti natus sint aliquam aut sunt non libero, earum quo, odio optio deserunt aspernatur possimus sed placeat? Repudiandae expedita asperiores similique."

const Content = () => {
    const [info, setInfo] = useState(false)
//     useEffect(()=>{
//    setInfo(dat.slice(0, 100))
//     }, [])
    const format =(n)=>{
    if(n==1 ||n == 21 ||n== 31){
     return `${n}st`
    }else if(n == 2 || n==22){
      return `${n}nd`
    }else if(n == 3 || n== 23){
     return `${n}rd`
    }
    else{
        return `${n}th`
    }
    
}
    const date = format(new Date().getDate())
    const Year = new Date().getFullYear()
    const month = months[new Date().getMonth()]
    const day = days[new Date().getDay()]

    console.log(date, Year, month, day);
  return (
    <div className="main-content">
       <div className="profile-container">
           <div className="profile-details">
             <div className="user-image">
                 <img src="chair.jpeg" alt=""/>
             </div>
             <div className="user-profile">
              <h4>Emmanuel Oluwatundun </h4>
              <h5>Year 12</h5>
              <div className="online-container"><div className="online"></div><h6>online status</h6></div>
              <h2>Welcome to Roemichs International Schools</h2>
              <h3>Excellence in all things...</h3>
             </div>
           </div>
           <div className="other-user-details">
            <div className="simple-detail">
                <h5>Current session</h5>
                <p>2020/2021</p>
            </div>
            <div className="simple-detail">
                <h5>term</h5>
                <p>First</p>
            </div>
            <div className="simple-detail">
                <h5>Gender</h5>
                <p>Male</p>
            </div>
            <div className="simple-detail">
                <h5>Class Section</h5>
                <p>Purple</p>
            </div>
            <div className="simple-detail">
                <h5>Admission Type</h5>
                <p>Border</p>
            </div>
            <div className="simple-detail">
                <h5>Sport House</h5>
                <p>King</p>
            </div>
           </div>
       </div>
       <div className="other-details">
          <div className="contact-container">
              <div className="contact-content">
               <div className="contact contact-1">
                   <MdEmail className="contact-logo"/>
                   <h5>Email: </h5>
                   <p>info@roemichsschools.com</p>
               </div>
               <div className="contact">
                   <FaPhoneAlt className="contact-logo"/>
                   <h5>Phone: </h5>
                   <p>08035125100</p>
               </div>
              </div>
              <div className="contacts-logo">
               <MdContactMail/>
              </div>
          </div>
          <div className="calender-container">
          <div className="contact-content">
               <div className="contact contact-3">
                  
                   <h3>{day}</h3>
                   
               </div>
               <div className="contact">
                 
                   <h4>{`${date}, ${month} ${Year}`}</h4>
               </div>
              </div>
              <div className="contacts-logo">
               <FaRegCalendarAlt className="calendar-icon"/>
              </div>
          </div>
       </div>
       <div className="footer">
           <h6>Important Notice</h6>
           <p>{info ? dat : dat.slice(0, 200)}
           <a href="" onClick={(e)=>{
               e.preventDefault()
               setInfo(!info)
            }}>{!info ? "read more..." : "hide"}</a>
            </p>
       </div>
    </div>
  );
};

export default Content;