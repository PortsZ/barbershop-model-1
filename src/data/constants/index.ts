export const barbershopInfo = { 
   name: "BARBERSHOP NAME", 
   city: 'CITY',
   xp: '',//I always try to show customers my love for Puerto Rico, my roots are part of my history, and working in Orlando, I can show other people where I came from and where I learned to do what I love! Always with God first of all and giving the best for our customers,
   representing: ``, //Bringing the latin way of cutting hair in the best way straight from Puerto Rico. This is what makes William's Barbershop a different and a special place.
   address: 'address', //4512 South Orange Blossom Trail, Orlando, State 32839
   
};

export const hero = 'lorem ipsum dolor sit amet ipsus cum dasos'
// `Bringing the latin way of cutting hair in the best way straight from Puerto Rico.`

export const logo =  
    {
    nav: 'BARBERSHOP',
    establishment: 'The Establishment',
    gallery: 'GALLERY',
    services: 'SERVICES',
    about: 'ABOUT'
  };

export const services =  [
    {
        id:1, 
        name: 'Skin Fade', 
        price: '40', 
        description: 'Any type of haircut & style you desire, Lathered neck & straight razor edging, eyebrows & ears maintenance,relax and enjoy over 20 years of experience comes to work! Beard trim $5..'
    },

    {
        id:2, 
        name: 'Haircut & Style', 
        price: '30', 
        description: 'Any type of haircut & style you desire, Lathered neck & straight razor edging, eyebrows & ears maintenance, blow-dry and style, free cold beer or beverage. Sit back relax and enjoy over 20 years of experience comes to work! Beard trim $5.'
    },

    {
        id:3, 
        name: 'Haircut & Beard trim', 
        price: '35', 
        description: 'Any type of haircut & style you desire, Lathered neck & straight razor edging, Beard trim, (No beard detailing) eyebrows & ears maintenance, blow-dry and style, cold beer or beverage'
    },

    {
        id:4, 
        name: "Woman's Services", 
        price: '35+', 
        description: "Woman's Haircut( $35+) Color ($65+) Blow Dry ($45) Hair Extensions ($400+) " 
    },

   
  ]; 

export const theEstablishment = 
  `The ${barbershopInfo.name} is a place decorated in my own way and always with good music, ${barbershopInfo.representing}. Besides a great haircut, at ${barbershopInfo.name} you can enjoy a place where men can go to be my friend, I want them to feel comfortable here. So come get a haircut and a cold one at ${barbershopInfo.name}!`;


export const workingHours = {start: `Monday`, end: 'saturday', from: '9:30', to:'7:00', exception: 'Sunday', excFrom: 'closed', excTo:''};


  export const images = [
    '/images/gallery/gallery1.jpg', 
    '/images/gallery/gallery2.jpg',    
    '/images/gallery/gallery3.jpg',      
    '/images/gallery/gallery4.jpg', 
  ];

  export const about = 
    {

        description: `${barbershopInfo.name} is your Personal Barbershop. We are specialized in all types of men's haircuts and we do our best to please our customers. With the Style you desire by a consultation that fits your lifestyle, ${barbershopInfo.xp} delivering a great result so they feel better when they walk out my door.`,
        address: barbershopInfo.address,
    }
;