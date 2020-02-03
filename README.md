# Proposal

### What problem does your app solve?
One of the biggest obstacles women face while pregnant is getting to a health facility to safely deliver. Most people do not own a car or a motorcycle in Uganda, and a majority live greater than 5 km from a health center (an hour by foot). Can you imagine trying to walk an hour on foot when you were pregnant, and in labor? SAFE provides motorcycle ambulances to improve this problem, but mothers have a hard time contacting them in time. This app identifies and sends a text to the nearest motorcycle ambulance driver.


### Be as specific as possible; how does your app solve the problem?
This app identifies and sends a text to the nearest motorcycle ambulance driver the moment a mother or caregiver sends a request.



### What is the mission statement?
Use SAFE to Provide safe travel to health facilities. 
# Features

### What features are required for your minimum viable product?
- The app must contain two user types. A ride requester (pregnant mom, or their caregiver) and a trained motorcycle ambulance drive.
- An on-boarding process for a new general user (user that will consume the service)
- On-boarding process for driver (create their profile with name, location, and price)
- Ability for driver to edit and delete their profile
- Ability for user easily create, edit and delete driver reviews.
- Ability for user to search for drivers based on their location and view their profile page.
	
### What features may you wish to put in a future release?
Progress bar for driver

### What do the top 3 similar apps do for their users?
- Provides reviews for drivers
- Allows Address input for location to pickup and deliver
- Gives ETA for drivers arrival

# Design - Planning


### What design system will you use?
React components with libraries listed below.

### What will you User Flow be?
- Marketing & About Page
- Sign Up & Login Page
- Dashboard (?)
- Ride Requester (User)
  - Onboarding
  - Driver Reviews
  - Search
- Ambulance Driver
  - Onboarding
  - Profile

# Frameworks - Libraries

### What 3rd party frameworks are you considering using?
#### UI
- LESS
- HTML
- Flexbox
#### Front End
- axios: 0.19.2,
- react-hook-form: ^4.8.1,
- react-loader-spinner: ^3.1.5,
- react-router-dom": ^5.1.2,
- react-scripts: 3.3.1,
- redux: 4.0.5,
- redux-logger: ^3.0.6,
- redux-thunk: ^2.3.0

#### Backend
- Express
- Sqlite3
- Bcryptjs
- Helmet
- Knex
#### Deployment
- Netlify
- Zeit
- Heroku

### Do APIs require you to contact its maintainer to gain access?
No
### Are you required to pay to use the API?
No
### Have you considered using Apple Frameworks? (MapKit, Healthkit, ARKit?)
No

Target Audience

### Who is your target audience? Be specific.
Pregnant women in Uganda where safe travel to a health facility may be difficult or unsafe.

### What feedback have you gotten from potential users?
It would be useful and good for potential users.

### Have you validated the problem and your solution with your target audience? How?

Yes, through assumption.