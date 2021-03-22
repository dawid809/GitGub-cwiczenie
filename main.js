const imgNamesDD = [
    'https://picsum.photos/id/11/500/800', 
    'https://picsum.photos/id/12/500/800',
    'https://picsum.photos/id/13/500/800',
    'https://picsum.photos/id/14/500/800',
    'https://picsum.photos/id/15/500/800',
    'https://picsum.photos/id/16/500/800'
];
const imagesArrayDD = [];
const galleryDD = document.getElementById('DD-img');

function startGaleryDD() 
{
    imgNamesDD.forEach(DD => {
        const imgDD = new Image();
 
        imgDD.addEventListener('load', e => {
            imagesArrayDD.push(imgDD);
            galleryDD.appendChild(imgDD);
        });
 
        imgDD.src = DD;
        if(imgDD.complete)
        {
            imgDD.addEventListener(new Event('load'));
        }
    });
}

startGaleryDD();