<template>
  <div id="vcomments"></div>
</template>

<script>
export default {
  name: 'Valine',
  mounted: function(){
    // require window 
    const Valine = require('valine');
    if (typeof window !== 'undefined') {
      this.window = window
      window.AV = require('leancloud-storage')
      
    }
     
    new Valine({
      el: '#vcomments' ,
      appId: 'oCufvf4OGKWeBYa3ELID7xKq-gzGzoHsz',// your appId
      appKey: 'ErwSsOeUN4QpaSWg9kVowok0', // your appKey
      notify:false, 
      verify:false, 
      avatar:'mm', 
      placeholder: 'just go go',
      path:window.location.pathname
    });
  },
}
</script>