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

const imgNamesHS = [
    'https://picsum.photos/id/21/500/800', 
    'https://picsum.photos/id/22/500/800',
    'https://picsum.photos/id/23/500/800',
    'https://picsum.photos/id/24/500/800',
    'https://picsum.photos/id/25/500/800',
    'https://picsum.photos/id/26/500/800'
];
const imagesArrayHS = [];
const galleryHS = document.getElementById('HS-img');

function startGaleryHS() 
{
    imgNamesHS.forEach(HS => {
        const imgHS = new Image();
 
        imgHS.addEventListener('load', e => {
            imagesArrayHS.push(imgHS);
            galleryHS.appendChild(imgHS);
        });
 
        imgHS.src = HS;
        if(imgHS.complete)
        {
            imgHS.addEventListener(new Event('load'));
        }
    });
}

startGaleryHS();