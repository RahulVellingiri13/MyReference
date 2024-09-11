// import React from 'react'
// import {Card , Button,} from 'react-bootstrap';
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-icons/font/bootstrap-icons.css";



// function Userdetails() {
//   return (
//     <div>
// <Card className="user-profile-card">
//       <Card.Body className="text-center">
//         <img src="/path-to-profile-pic" alt="Profile" className="profile-pic mb-3" />
//         <Card.Title>SANJAY</Card.Title>
//         <Card.Text>@SANJAY1987765</Card.Text>
//         <Card.Text>Joined May 2024</Card.Text>
//         <Card.Text>10 Following | 0 Followers</Card.Text>
//         <Button variant="primary" className="mb-2">Get verified</Button>
//         <Button variant="secondary" className="edit-profile-button">Edit profile</Button>
//       </Card.Body>
//     </Card>


//     </div>
//   )
// }



// export default Userdetails


// import React, { useState, useEffect } from 'react';
// import { Card, Button, Col, Row } from 'react-bootstrap';
// import axios from 'axios';

// const Userdetails = () => {
//   const [userData, setUserData] = useState({}); // State to hold user details
//   const [polls, setPolls] = useState([]); // State to hold polls data
//   const [activeTab, setActiveTab] = useState(''); // State to keep track of the active tab
//   const [profileImage, setProfileImage] = useState('https://via.placeholder.com/150'); // State to manage profile image

//   // Fetch user details when the component mounts
//   useEffect(() => {
//     axios.get('http://92.205.109.210:8028/api/getone')
//       .then(response => {
//         setUserData(response.data); // Set the user data to the state
//         if (response.data.profileImage) {
//           setProfileImage(response.data.profileImage); // Set the profile image if available in response
//         }
//       })
//       .catch(error => {
//         console.error('There was an error fetching the user details!', error);
//       });
//   }, []);

//   // Function to handle image file input changes
//   const handleImageChange = (event) => {
//     const file = event.target.files[0]; // Get the selected file
//     if (file) {
//       const imageURL = URL.createObjectURL(file); // Create a URL for the selected image
//       setProfileImage(imageURL); // Update the profile image state with the new image URL
//     }
//   };

//   // Function to handle button clicks and API calls for polls
//   const handleButtonClick = (type) => {
//     let url = '';

//     switch (type) {
//       case 'created':
//         url = 'http://92.205.109.210:8028/polls/getall';
//         break;
//       case 'voted':
//         url = 'http://92.205.109.210:8028/polls/getvoted';
//         break;
//       case 'liked':
//         url = 'http://92.205.109.210:8028/polls/likeonpoll';
//         break;
//       case 'commented':
//         url = 'http://92.205.109.210:8028/comment/getbyid';
//         break;
//       default:
//         return;
//     }

//     axios.get(url)
//       .then(response => {
//         setPolls(response.data); // Set the fetched data to the state
//         setActiveTab(type); // Update the active tab
//       })
//       .catch(error => {
//         console.error('There was an error fetching the data!', error);
//       });
//   };

//   return (
//     <div>
//       {/* Profile Section */}
//       <Card className="mb-4">
//         <Card.Body>
//           <div className="text-center">
//             {/* Profile Image */}
//             <img src={profileImage} alt="profile" className="rounded-circle" style={{ width: '150px', height: '150px' }} />
            
//             {/* Input to Upload Image */}
//             <input 
//               type="file" 
//               accept="image/*" 
//               onChange={handleImageChange} 
//               style={{ marginTop: '10px' }} 
//             />

//             {/* Display User Name and Stats */}
//             <h5>{userData.username || 'User Name'}</h5>
//             <p>{userData.posts || 0} post | {userData.followers || 0} Follower | {userData.following || 0} Following</p>
//             <Button variant="primary">User Details</Button>
//           </div>
//         </Card.Body>
//       </Card>

//       {/* Main Content - Polls Section */}
//       <Card className="mb-4">
//         <Card.Body>
//           <Row>
//             <Col>
//               <Button variant="info" onClick={() => handleButtonClick('created')}>Created Polls</Button>
//             </Col>
//             <Col>
//               <Button variant="info" onClick={() => handleButtonClick('voted')}>Voted Polls</Button>
//             </Col>
//             <Col>
//               <Button variant="info" onClick={() => handleButtonClick('liked')}>Liked Polls</Button>
//             </Col>
//             <Col>
//               <Button variant="info" onClick={() => handleButtonClick('commented')}>Commented Polls</Button>
//             </Col>
//           </Row>
//         </Card.Body>
//       </Card>

//       {/* Display the Fetched Polls */}
//       <div>
//         {polls && polls.length > 0 ? (
//           polls.map((poll, index) => (
//             <Card className="mb-4" key={index}>
//               <Card.Body>
//                 <h6>{poll.title || 'Poll Title'}</h6>
//                 <p>{poll.description || 'Poll Description'}</p>
//                 {/* Display other poll details as needed */}
//               </Card.Body>
//             </Card>
//           ))
//         ) : (
//           <p>No data available.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Userdetails;


//---------------------------------------------------------------------
// import React, { useState, useEffect } from 'react';
// import { Card, Button, Col, Row } from 'react-bootstrap';
// import axios from 'axios';

// const Userdetails = () => {
//  let  userId=sessionStorage.getItem("loginuserId")||sessionStorage.getItem("googleuserId")
//  console.log("userId",userId)
//   const [userData, setUserData] = useState({}); // State to hold user details
//   // const [polls, setPolls] = useState([]); // State to hold polls data
//   const [activeTab, setActiveTab] = useState(''); // State to keep track of the active tab
//   const [profileImage, setProfileImage] = useState('https://via.placeholder.com/150'); // State to manage profile image
// const [createdpolls,setCreatedpolls]=useState("")
// const [votedpolls,setVotedpolls]=useState("")
//   // Fetch user details when the component mounts
//   useEffect(() => {
//     axios.get('http://92.205.109.210:8028/api/getProfile')
//       .then(response => {
//         setUserData(response.data); 
//         if (response.data.profileImage) {
//           setProfileImage(response.data.profileImage); // Set the profile image if available in response
//         }
//       })
//       .catch(error => {
//         console.error('There was an error fetching the user details!', error);
//       });
//   }, []);

//   // Function to handle image file input changes
//   const handleImageChange = (event) => {
//     const file = event.target.files[0]; // Get the selected file
//     if (file) {
//       const imageURL = URL.createObjectURL(file); // Create a URL for the selected image
//       setProfileImage(imageURL); // Update the profile image state with the new image URL
//     }
//   };

//   // Function to fetch created polls
//   const fetchCreatedPolls = () => {
//     const pollId = 'your_poll_id_here'; // Replace with the actual poll_id value
//     axios.post('http://92.205.109.210:8028/api/getProfile', {
//       user_id: userId
//     })
//     .then(response => {
//       console.log(response.data.user.created_polls)
//       setCreatedpolls(response.data.user.created_polls); // Set the fetched data to the state
//       setActiveTab('created'); // Update the active tab
//     })
//     .catch(error => {
//       console.error('There was an error fetching created polls!', error);
//     });
//   };

//   // Function to fetch voted polls
//   const fetchVotedPolls = () => {
//     const userId = sessionStorage.getItem("loginuserId") || sessionStorage.getItem("googleuserId"); // Retrieve the user_id from sessionStorage
//     axios.post('http://92.205.109.210:8028/api/getProfile', {
//       user_id: userId
//     })
//     .then(response => {
//       console.log(response.data.user.voted_polls)
//       setVotedpolls(response.data.user.voted_polls); // Set the fetched data to the state
//       setActiveTab('voted'); // Update the active tab
//     })
//     .catch(error => {
//       console.error('There was an error fetching voted polls!', error);
//     });
//   };

//   return (
//     <div>
//       {/* Profile Section */}
//       <Card className="mb-4">
//         <Card.Body>
//           <div className="text-center">
//             {/* Profile Image */}
//             <img src={profileImage} alt="profile" className="rounded-circle" style={{ width: '150px', height: '150px' }} />
            
//             {/* Input to Upload Image */}
//             <input 
//               type="file" 
//               accept="image/*" 
//               onChange={handleImageChange} 
//               style={{ marginTop: '10px' }} 
//             />

//             {/* Display User Name and Stats */}
//             <h5>{userId=sessionStorage.getItem("loginuserId")||sessionStorage.getItem("googleuserId")}</h5>
//             <p>{userData.posts || 0} post | {userData.followers || 0} Follower | {userData.following || 0} Following</p>
//             <Button variant="primary">Edit Profile</Button>
//           </div>
//         </Card.Body>
//       </Card>

//       {/* Main Content - Polls Section */}
//       <Card className="mb-4">
//         <Card.Body>
//           <Row>
//             <Col sm={6}>
//               <Button variant="info" style={{ marginLeft: "70px" }} onClick={fetchCreatedPolls}>Created Polls</Button>
//             </Col>
//             <Col sm={6}>
//               <Button variant="info" style={{ marginLeft: "90px" }} onClick={fetchVotedPolls}>Voted Polls</Button>
//             </Col>
//           </Row>
//         </Card.Body>
//       </Card>

//       {/* Display the Fetched Polls */}
//       {/* <div>
//         {polls && polls.length > 0 ? (
//           polls.map((poll, index) => (
//             <Card className="mb-4" key={index}>
//               <Card.Body>
//                 <h6>{poll.title || 'Poll Title'}</h6>
//                 <p>{poll.description || 'Poll Description'}</p> */}
//                 {/* Display other poll details as needed */}
//               {/* </Card.Body>
//             </Card>
//         //   )) */}
//         {/* ) : (
//           <p>No data available.</p>
//          )}
//       </div> */}
//     </div>
//   );
// };

// export default Userdetails;





import React, { useState, useEffect } from 'react';
import { Card, Button, Col, Row } from 'react-bootstrap';
import axios from 'axios';

const Userdetails = () => {
  let userId = sessionStorage.getItem("loginuserId") || sessionStorage.getItem("googleuserId");
  console.log("userId", userId);

  const [userData, setUserData] = useState({}); // State to hold user details
  const [activeTab, setActiveTab] = useState(''); // State to keep track of the active tab
  const [profileImage, setProfileImage] = useState('https://via.placeholder.com/150'); // State to manage profile image
  const [createdpolls, setCreatedpolls] = useState([]); // State to hold created polls
  const [votedpolls, setVotedpolls] = useState([]); // State to hold voted polls

  // Fetch user details when the component mounts
  useEffect(() => {
    axios.get('http://92.205.109.210:8028/api/getProfile')
      .then(response => {
        setUserData(response.data); 
        if (response.data.profileImage) {
          setProfileImage(response.data.profileImage); // Set the profile image if available in response
        }
      })
      .catch(error => {
        console.error('There was an error fetching the user details!', error);
      });
  }, []);

  // Function to handle image file input changes
  const handleImageChange = (event) => {
    const file = event.target.files[0]; // Get the selected file
    if (file) {
      const imageURL = URL.createObjectURL(file); // Create a URL for the selected image
      setProfileImage(imageURL); // Update the profile image state with the new image URL
    }
  };

  // Function to fetch created polls
  const fetchCreatedPolls = () => {
    axios.post('http://92.205.109.210:8028/api/getProfile', {
      user_id: userId
    })
    .then(response => {
      console.log(response.data.user.created_polls);
      setCreatedpolls(response.data.user.created_polls || []); // Set the fetched data to the state
      setActiveTab('created'); // Update the active tab
    })
    .catch(error => {
      console.error('There was an error fetching created polls!', error);
    });
  };

  // Function to fetch voted polls
  const fetchVotedPolls = () => {
    axios.post('http://92.205.109.210:8028/api/getProfile', {
      user_id: userId
    })
    .then(response => {
      console.log(response.data.user.voted_polls);
      setVotedpolls(response.data.user.voted_polls || []); // Set the fetched data to the state
      setActiveTab('voted'); // Update the active tab
    })
    .catch(error => {
      console.error('There was an error fetching voted polls!', error);
    });
  };

  return (
    <div>
      {/* Profile Section */}
      <Card className="mb-4">
        <Card.Body>
          <div className="text-center">
            {/* Profile Image */}
            <img src={profileImage} alt="profile" className="rounded-circle" style={{ width: '150px', height: '150px' }} />
            
            {/* Input to Upload Image */}
            <input 
              type="file" 
              accept="image/*" 
              onChange={handleImageChange} 
              style={{ marginTop: '10px' }} 
            />

            {/* Display User Name and Stats */}
            <h5>{userId}</h5>
            <p>{userData.posts || 0} post | {userData.followers || 0} Follower | {userData.following || 0} Following</p>
            <Button variant="primary">Edit Profile</Button>
          </div>
        </Card.Body>
      </Card>

      {/* Main Content - Polls Section */}
      <Card className="mb-4">
        <Card.Body>
          <Row>
            <Col sm={6}>
              <Button variant="info" style={{ marginLeft: "70px" }} onClick={fetchCreatedPolls}>Created Polls</Button>
            </Col>
            <Col sm={6}>
              <Button variant="info" style={{ marginLeft: "90px" }} onClick={fetchVotedPolls}>Voted Polls</Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* Display the Fetched Polls */}
      {activeTab === 'created' && (
        <div>
          {createdpolls.length > 0 ? (
            createdpolls.map((poll, index) => (
              <Card className="mb-4" key={index}>
                <Card.Body>
                  <h6>{poll.title || 'Poll Title'}</h6>
                  <p>{poll.description || 'Poll Description'}</p>
                  {/* Display other poll details as needed */}
                </Card.Body>
              </Card>
            ))
          ) : (
            <p>No created polls available.</p>
          )}
        </div>
      )}

      {activeTab === 'voted' && (
        <div>
          {votedpolls.length > 0 ? (
            votedpolls.map((poll, index) => (
              <Card className="mb-4" key={index}>
                <Card.Body>
                  <h6>{poll.title || 'Poll Title'}</h6>
                  <p>{poll.description || 'Poll Description'}</p>
                  {/* Display other poll details as needed */}
                </Card.Body>
              </Card>
            ))
          ) : (
            <p>No voted polls available.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Userdetails;