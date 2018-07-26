function enlarge(word){
  word.style.fontSize="30px";
}

function smaller(word){
  word.style.fontSize= "10px";
}

SC.initialize({
  client_id: 'YOUR_CLIENT_ID'
  
});

var track_url = 'https://soundcloud.com/';
SC.oEmbed(track_url, { auto_play: true }).then(function(oEmbed) {
  console.log('oEmbed response: ', oEmbed);
});
