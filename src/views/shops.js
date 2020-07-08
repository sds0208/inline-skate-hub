import React from 'react';

function Shops() {
  return <div className="Shops">
    <h2>Shops</h2>
    {
      maps.map(map => {
        return <div class="shop-container">
          <iframe src={map.src} width="300" height="225" frameBorder="0" style={{"border":0}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
          <div class="shop-name">{map.name}</div>
        </div>
      })
    }
  </div>
}

const maps = [
  {
    src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21245.49012570292!2d-120.68433379322691!3d35.25078542871202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80ecf0d0e2818b5b%3A0x848ad0871d9e05a0!2sInline%20Warehouse!5e0!3m2!1sen!2sus!4v1594242013039!5m2!1sen!2sus',
    name: 'Inline Warehouse'
  },
  {
    src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2880.64575265881!2d-79.47763068489665!3d43.780211852226884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2e0b65e674a9%3A0x63b7bfa03a4fbaa9!2sProSkaters%20Place%20Inline%2FRoller%20Skate%2C%20Scooter%2C%20Skateboard%20%26%20Nordic%20Ski%20Shop%20www.proskatersplace.com!5e0!3m2!1sen!2sus!4v1594242650075!5m2!1sen!2sus',
    name: 'Pro Skater\'s Place'
  },
  {
    src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3345.1441527007332!2d-96.99261468522144!3d33.026332478539146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c2e6445f1b9ed%3A0x713207c389deecbb!2sLow%20Price%20Skates!5e0!3m2!1sen!2sus!4v1594243226405!5m2!1sen!2sus',
    name: 'Low Price Skates'
  },
  {
    src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1355065.103371957!2d-123.84226619823731!3d48.444795099116945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490146018d1cfef%3A0x5b4d072f58dc5393!2sShop-Task%20Seattle%20-%20Inline%20Skate%20Shop!5e0!3m2!1sen!2sus!4v1594244103823!5m2!1sen!2sus',
    name: 'Shop Task Seattle'
  }
];

export default Shops;
