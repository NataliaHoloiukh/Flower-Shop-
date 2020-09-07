new Splide( '.splide', {
    type: 'loop',
    speed: 2000,
    autoplay: true,
    perPage: 2,
    perMove: 2,
    gap: '1.2em',
    pagination: true,
    arrows: false
} ).mount();

new Splide( '.splideSmall', {
    type: 'loop',
    speed: 2000,
    autoplay: true,
    perPage: 1,
    perMove: 1,
    gap: '1em',
    pagination: true,
    arrows: false
} ).mount();