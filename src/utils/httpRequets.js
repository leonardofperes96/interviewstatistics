/* using John Smilga API to do all the requests and CRUD of the website
 */

/* DEPENDENCIES THAT NEEDS TO BE INSTALED */
// styled components
// react router dom
//react toastify npm install --save react-toastify
// redux-redux-toolkit npm install @reduxjs/toolkit react-redux
// axios npm install axios
// react icons npm install react-icons
// moment for date npm install moment
// recharts for build graphics etc npm install recharts

/* All HTTP Requests */
// GET - get resources from the server
// - POST - submit resource to the server
// - PUT/PATCH - modify resource on the server
// - DELETE - delete resource form the server

// ```js
// // GET
// axios.get(url, options);
// // POST
// axios.post(url, resource, options);
// // PATCH
// axios.patch(url, resource, options);
// // DELETE
// axios.delete(url, options);

// ROOT URL - https://jobify-prod.herokuapp.com/api/v1/toolkit

// ###### Register USER

// - https://jobify-prod.herokuapp.com/api/v1/toolkit/auth/register

// - POST /auth/register
// - {name:'john',email:'john@gmail.com',password:'secret'}
// - sends back the user object with token

// ###### Login USER

// - POST /auth/login
// - {email:'john@gmail.com',password:'secret'}
// - sends back the user object with token

// ###### Update USER

// - PATCH /auth/updateUser
// - { email:'john@gmail.com', name:'john', lastName:'smith', location:'my location' }
// - sends back the user object with token
// - authorization header : 'Bearer token'

// #### 55) Create Job Request

// - POST /jobs
// - { position:'position', company:'company', jobLocation:'location', jobType:'full-time', status:'pending' }
// - authorization header : 'Bearer token'
// - sends back the job object

// #### 61) GetAllJobs Request

// - GET /jobs
// - authorization header : 'Bearer token'
// - returns {jobs:[],totalJobs:number, numOfPages:number }

// #### 66) Delete Job Request

// - DELETE /jobs/jobId
// - authorization header : 'Bearer token'

// #### 68) EditJob Request

// - PATCH /jobs/jobId
// - { position:'position', company:'company', jobLocation:'location', jobType:'full-time', status:'pending' }
// - authorization header : 'Bearer token'
// - sends back the updated job object

// #### 73) Test User

// - email : testUser@test.com
// - password : secret
// - read only!
// - dummy data

// #### 74) Get Stats Request

// - GET /jobs/stats
// - authorization header : 'Bearer token'
// - returns
//   {
//   defaultStats:{pending:24,interview:27,declined:24},
//   monthlyApplications:[{date:"Nov 2021",count:5},{date:"Dec 2021",count:4} ]
//   }
// - last six months

// get jobs complete let url = `/jobs?status=${searchStatus}&jobType=${searchType}&sort=${sort}&page=${page}`;
