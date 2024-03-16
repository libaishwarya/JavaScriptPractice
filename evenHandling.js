document.addEventListener("DOMContentLoaded", function() {
  let randomColorBtn = document.getElementById("randomColorBtn");
  let randomPictureBtn = document.getElementById("randomPictureBtn");
  let randomTextBtn = document.getElementById("randomTextBtn");
  let contentDiv = document.getElementById("content");

  randomColorBtn.addEventListener("click", generateRandomColor);
  randomPictureBtn.addEventListener("click", addRandomPicture);
  randomTextBtn.addEventListener("click", addRandomText);

  function generateRandomColor() {
    let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
  }

  function addRandomPicture() {
    let images = ['https://scontent.fcjb3-3.fna.fbcdn.net/v/t39.30808-6/326223558_900707654414935_4210238581143884303_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=V4xJ_hS9qAwAX_wRvQf&_nc_ht=scontent.fcjb3-3.fna&oh=00_AfBfyiXDDaIlGXkeTNKz_J7FhdmNrYtfqWmW0m9kgndMjw&oe=65F9E1A8','https://scontent.fcjb3-1.fna.fbcdn.net/v/t39.30808-6/392945579_2127016457630427_436449204713487441_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=VdQAwUGjSawAX8Twt9_&_nc_ht=scontent.fcjb3-1.fna&oh=00_AfCACslTnM4qvqYgmE14uvnwn_Z78RhgVZ_bQ3PN7rb9Sw&oe=65FAC36C','https://scontent.fcjb3-3.fna.fbcdn.net/v/t1.18169-9/21151512_520354428296646_2311264260086230704_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=7ZpaGxdlu9wAX8xJrj9&_nc_ht=scontent.fcjb3-3.fna&oh=00_AfDeMXc5k_qs3XvkVTa7FW7k0dOOqxZt0zVkF5s1gdcqzA&oe=661CAE11'];
    let randomIndex = Math.floor(Math.random() * images.length);
    let imageUrl = images[randomIndex];
    

    let img = document.createElement('img');
    img.src = imageUrl;
    contentDiv.appendChild(img);
  }

  function addRandomText() {
    let texts = ['Aishu', 'Mohan', 'Aishwarya Mohan']; // Add your texts here
    let randomIndex = Math.floor(Math.random() * texts.length);
    let randomText = texts[randomIndex];

    let p = document.createElement('p');
    p.textContent = randomText;
    contentDiv.appendChild(p);
  }
});
