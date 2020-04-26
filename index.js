document.addEventListener('load', (e) => {
  console.log('loaded page')
})
window.addEventListener('load', (e) => {
  console.log('loaded page')
})

function playpause() {
  console.log('pause!')
}

function clickForward() {
  console.log('clickForward')
}
function clickBack() {
  console.log('clickBack')
}

function longPoll(params) {
  console.log('polling...')
}

function logIn() {
  const client_id = env.CLIENT_ID

  var url = 'https://accounts.spotify.com/authorize'
  url += '?response_type=token'
  url += '&client_id=' + encodeURIComponent(client_id)
  url += '&scope=' + encodeURIComponent(scope)
  url += '&redirect_uri=' + encodeURIComponent(redirect_uri)
  url += '&state=' + encodeURIComponent(state)
}
