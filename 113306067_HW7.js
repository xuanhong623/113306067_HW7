document.addEventListener('DOMContentLoaded', () => {
  const nameElement = document.getElementById('name');
  const editBtn = document.getElementById('edit-btn');
  const addBtn = document.getElementById('add-btn');
  const addMusicForm = document.getElementById('add-music-form');
  const musicGallery = document.querySelector('.music-gallery'); 
  const submitMusicBtn = document.getElementById('submit-music-btn');

  let isEditing = false; 

      
  editBtn.addEventListener('click', () => {
    if (isEditing) {
          
    const input = document.getElementById('name-input');
    nameElement.textContent = input.value || 'Neil'; 
    editBtn.textContent = 'edit';
    isEditing = false; 
    } else {
          
    const currentName = nameElement.textContent;
    nameElement.innerHTML = `<input type="text" id="name-input" value="${currentName}">`;
    editBtn.textContent = 'save';
    isEditing = true; 
      }
    });

     
      addBtn.addEventListener('click', () => {
        addMusicForm.style.display = 'block';
      });

      
  submitMusicBtn.addEventListener('click', () => {
  const musicLink = document.getElementById('music-link').value;
  const musicName = document.getElementById('music-name').value;
    if (musicLink && musicName) {
          
    const musicItem = document.createElement('a');
    musicItem.href = musicLink;
    musicItem.target = '_blank';
    musicItem.innerHTML = `
    <img src="youtube_icon.jpg" alt="${musicName}" width="100">
    <p style="text-align: center;">${musicName}</p>
    `;
    musicGallery.appendChild(musicItem);
        
      addMusicForm.style.display = 'none';
      document.getElementById('music-link').value = '';
      document.getElementById('music-name').value = '';
    } else {
      alert('Please fill out all fields!');
    }
  });
});


