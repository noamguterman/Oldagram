const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];

const main = document.getElementById("main");

posts.forEach((post) => {
  return (main.innerHTML += `
            <div class="post">
                <div class="post--userinfo">
                    <img src="${post.avatar}" class="user--avatar">
                    <div>
                        <p class="user--name">${post.name}</p>
                        <p class="user--location">${post.location}</p>
                    </div>
                </div>
                <img src="${post.post}" class="user--post">
                <div class="post--buttons">
                    <button class="btn">
                        <img src="/images/icon-heart.png" alt="Heart button." class="btn--heart">
                    </button>
                    <button class="btn">
                        <img src="/images/icon-comment.png" alt="Comment button." class="btn--comment">
                    </button>
                    <button class="btn">
                        <img src="/images/icon-dm.png" alt="DM button." class="btn--dm">
                    </button>
                </div>
                <p class="likes"><span class="likes--number">${post.likes}</span> likes</p>
                <p class="post--text"><span class="username">${post.username}</span> ${post.comment}</p>
            </div>
        `);
});
