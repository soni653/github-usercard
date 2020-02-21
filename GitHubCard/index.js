/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/



/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

const followersArray = ['bschatzj','jambis','berdiyeva','tetondan','dustinmyers','justsml','luishrd','bigknell'];
followersArray.forEach(item => {axios.get(`https://api.github.com/users/${item}`).then(response => {
  cards.append(GithubCard(response.data))
  });
})

const cards = document.querySelector('.cards');
axios.get('https://api.github.com/users/soni653')
.then((response) =>{ 
  cards.append(GithubCard(response.data))
  console.log(response);
})

.catch((error => {
  console.log('Info not found', error)
}))





function GithubCard(obj){
  const hubcard = document.createElement('div');
  const hubimg = document.createElement('img');
  const hubInfo = document.createElement('div');
  const hubName = document.createElement('h3');
  const hubUser = document.createElement('p');
  const hubLocation = document.createElement('p');
  const hubProfile = document.createElement('p');
  const hubUrl = document.createElement('a');
  const hubFollowers = document.createElement('p');
  const hubFollowing = document.createElement('p');
  const hubBio = document.createElement('p');


  hubcard.append(hubimg,hubInfo);
  hubInfo.append(hubName,hubUser,hubLocation,hubProfile,hubFollowers,hubFollowing,hubBio);
  hubProfile.append(hubUrl);

  hubcard.classList.add('card');
  hubInfo.classList.add('card-info');
  hubName.classList.add('name');
  hubUser.classList.add('username');

  hubimg.src = obj.avatar_url;
  hubName.textContent = obj.name;
  hubUser.textContent = obj.login;
  hubLocation.textContent = obj.location;
  hubUrl.textContent = obj.html_url;
  hubFollowers.textContent = obj.followers;
  hubFollowing.textContent = obj.following;
  hubBio.textContent = obj.hubBio

  return hubcard;

  
}














