import { posts } from "./data.js";
const everything = document.getElementById("everything")



function render(theArray){
    let everythingTesting = ''
    const arrays = theArray.map(array => {
        const {name, username, location, avatar, post, comment, likes} = array
            everythingTesting += `  <main>
                <section id="first-section">
                    <img class="profile-pic dp" src="${avatar}">
                    <div class="head-txt">
                    <h1 class="dp-txt">${name}</h1>
                    <p class="dp-txt2">${location}</p>
                    </div>
                </section>
                <section id="main-image">
                    <img class="body-img" src="${post}">
                </section>
                <section class="interaction">
                    <img src="/images/icon-heart.png" alt="like">
                    <img src="/images/icon-comment.png" alt="comment">
                    <img src="/images/icon-dm.png" alt="Direct message">
                </section>
            </main>
            <footer id="footer">
                    <h1>${likes} Likes</h1>
                    <p> <span class="span">${username}</span>${comment}</p>
            </footer>
            <hr width="100%">`           
    }).join('')
    everything.innerHTML = everythingTesting
}
render(posts)

