/* This data base will handle with my personal informations, they will works
   like a resumé, so I can use it to show my skills and experiences to the world.
*/

// Name of the data base
const databse = 'PORTFOLIO';

use (databse);

// Collection that handle with the user's informations
db.createCollection('USERS');

// Collection that handle with the address for works experiences
db.createCollection('LOCATION');

// Collection that handle with the work experiences
db.createCollection('WORK_EXPERIENCE');

// Collection that handle with the education informations
db.createCollection('EDUCATION');

// Collection that handle with the about me informations
db.createCollection('ABOUT');

// Collection that handle with the skills informations
db.createCollection('SKILLS');