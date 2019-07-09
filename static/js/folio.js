/* 
 - Documentaion: http://docs.foliodot.com/options
 - This demo uses foliodot javascript which is subject 
   to the terms at https://foliodot.com/legal/eula
*/

FOLIO.init({
  project: {
    views : 'normal cover',
    transition: 'fade' //transition attribute on page element have priority
  },
  thumbnails: {
    transition: 'up'
  },
  content: {
    transition: 'fold-up'
  }
});
