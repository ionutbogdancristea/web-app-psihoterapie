import React from 'react';

const AddressMap=()=>{
   return (
       <div className="google-map-code">

         <iframe className="flex md:hidden w-max" width="600" height="450" style={{border:0}} allowFullScreen="" aria-hidden="false" tabIndex="0" title="locatie_harta" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2849.121629450903!2d26.1053975157276!3d44.43066720982585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff3c34bf9d15%3A0x4e3721bfab9bdc11!2sBloc%20103%2C%20Bulevardul%20Corneliu%20Coposu%205%2C%20Bucure%C8%99ti%20030167!5e0!3m2!1sro!2sro!4v1677944624698!5m2!1sro!2sro"></iframe>    
         <iframe className="md:flex hidden" width="600" height="450" style={{border:0}} allowFullScreen="" aria-hidden="false" tabIndex="0" title="locatie_harta" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2849.121629450903!2d26.1053975157276!3d44.43066720982585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff3c34bf9d15%3A0x4e3721bfab9bdc11!2sBloc%20103%2C%20Bulevardul%20Corneliu%20Coposu%205%2C%20Bucure%C8%99ti%20030167!5e0!3m2!1sro!2sro!4v1677944624698!5m2!1sro!2sro"></iframe>    
              
       </div>
   );
}

 export{AddressMap}