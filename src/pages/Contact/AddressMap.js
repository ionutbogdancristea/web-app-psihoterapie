import React from 'react';

const AddressMap=()=>{
   return (
       <div className="google-map-code">
         <iframe className="flex md:hidden w-max" width="600" height="450" style={{border:0}} allowFullScreen="" aria-hidden="false" tabIndex="0" title="locatie_harta" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.16647981201!2d25.97311211572807!3d44.45025740854139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b2012fe0cdca59%3A0x343c12772cfa6cb3!2sStr.%20Sergent%20Ilie%20Petre%208%2C%20Chiajna!5e0!3m2!1sro!2sro!4v1675352502699!5m2!1sro!2sro"></iframe>
         <iframe className="md:flex hidden" width="600" height="450" style={{border:0}} allowFullScreen="" aria-hidden="false" tabIndex="0" title="locatie_harta" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.16647981201!2d25.97311211572807!3d44.45025740854139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b2012fe0cdca59%3A0x343c12772cfa6cb3!2sStr.%20Sergent%20Ilie%20Petre%208%2C%20Chiajna!5e0!3m2!1sro!2sro!4v1675352502699!5m2!1sro!2sro"></iframe>       
       </div>
   );
}

 export{AddressMap}