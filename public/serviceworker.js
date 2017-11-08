self.addEventListener('fetch', function(event){
  console.log("offline fetch event");
  event.respondWith(
    fetch(event.request).catch(function(){
      return new Response(
        "Welcome to GOtham Imperial Hotel \n."+
        "There seems to be a problem with your connection \n"+
        "We look forward to telling you about our hotel as soon as you go online "
      );
    })
  );
});
// 
// self.addEventListener('fetch',function(event){
//   console.log("fetch event  ");
//   if (event.request.url.includes("bootstrap.min.css")){
//     console.log("url uncludes bootstrap");
//     event.respondWith(
//       new Response(
//         ".hotel-slogan{background:green !important;} nav {display:none}",
//         {headers:{
//           "Content-Type":"text/css",
//         }}
//       )
//     );
//   }
// });
