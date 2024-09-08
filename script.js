document.addEventListener('DOMContentLoaded', function() {
    const images = [
        {
            src: 'https://www.boat-lifestyle.com/cdn/shop/products/main1_65ff249b-c4f8-4dad-ae88-2aae76723ce2_600x.png?v=1643477993',
            background: 'IMAGES/blob-scene-haikei.svg',
            infoStyle: {
                h4: { textAlign: 'center', marginLeft: '-800px', marginTop: '-550px' },
                h6: { textAlign: 'center', marginLeft: '1000px', marginTop: '-100px'},
                h5: { textAlign: 'center', marginLeft: '-930px', marginTop: '200px' }
            },
            h4: 'boAt Immortal 700<br>Immortal 700 - 7.1 Channel<br> Gaming Headphones',
            h6: 'Gaming Headphone with 7.1 <br>Channel, 50mm drivers, RGB LED<br> Modes, ENxTM Technology',
            h5: 'Take total control with 7.1<br> Channel Surround Sound for<br> superior audio immersion. <br>Get pinpoint positional accuracy of <br>players and make your game come alive.'
        },
        {
            src: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Rockid_Rush_FI_01__1_-removebg-preview_500x.png?v=1692356698',
            background: 'IMAGES/blob-scene-haikei.png',
            infoStyle: {
                h6: { textAlign: 'center', marginLeft: '-800px', marginTop: '-150px' },
                h4: { textAlign: 'center', marginLeft: '1000px', marginTop: '-500px' },
                h5: { textAlign: 'center', marginLeft: '-930px', marginTop: '200px' }
            },
            h6: 'Another Headphone Model<br> with Enhanced Features,<br> Improved Drivers,<br> Latest Technology',
            h4: 'boAt Immortal 800<br>Immortal 800 <br> Premium Gaming Headphones',
            h5: 'Experience unmatched audio<br> quality with the latest advancements<br> in headphone technology.<br> Perfect for gamers looking <br>for the best sound experience.'
        },
        {
            src: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/products/709d5346-3135-495f-ba7b-80fae784af83_600x.png?v=1685709753',
            background: 'IMAGES/blue.png',
            infoStyle: {
                h6: { textAlign: 'center', marginLeft: '-800px', marginTop: '-150px' },
                h4: { textAlign: 'center', marginLeft: '1000px', marginTop: '-500px' },
                h5: { textAlign: 'center', marginLeft: '-930px', marginTop: '200px' }
            },
            h6: 'Another Headphone Model<br> with Enhanced Features,<br> Improved Drivers,<br> Latest Technology',
            h4: 'boAt Immortal 800<br>Immortal 800 - Premium<br> Gaming Headphones',
            h5: 'Experience unmatched audio quality<br> with the latest advancements in<br> headphone technology. Perfect<br> for gamers looking for the<br> best sound experience.'
        },
    ];

    let currentIndex = 0;

    const imgElement = document.querySelector('.slider-image');
    const h6Element = document.querySelector('.info h6');
    const h4Element = document.querySelector('.info h4');
    const h5Element = document.querySelector('.info h5');
    const majorElement = document.querySelector('.major');

    function updateSlider() {
        imgElement.src = images[currentIndex].src;
        h6Element.innerHTML = images[currentIndex].h6;
        h4Element.innerHTML = images[currentIndex].h4;
        h5Element.innerHTML = images[currentIndex].h5;
        majorElement.style.backgroundImage = `url(${images[currentIndex].background})`;

        // Apply dynamic styles
        Object.assign(h6Element.style, images[currentIndex].infoStyle.h6);
        Object.assign(h4Element.style, images[currentIndex].infoStyle.h4);
        Object.assign(h5Element.style, images[currentIndex].infoStyle.h5);
    }

    document.getElementById('next-btn').addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % images.length;
        updateSlider();
    });

    // Initialize with the first image
    updateSlider();
});











