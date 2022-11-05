const addBtn = document.getElementById("add-btn")
const tracklistTable = document.querySelector("#table-body")
const modal = document.getElementById("add-track-modal")

function deleteSong() {
  let td = event.target.parentNode
  let tr = td.parentNode
  tr.parentNode.removeChild(tr)
}

function addTrack() {
  let newRow = document.createElement("tr")
  let newTrackNumber = document.getElementById("track-number-modal").value
  let newTrackTitle = document.getElementById("track-title-modal").value
  let newArtistName = document.getElementById("artist-name-modal").value
  let newTrackDuration = document.getElementById("track-duration-modal").value

  newRow.innerHTML = `  
  <th scope="row">${newTrackNumber}</th>
  <td>${newTrackTitle}</td>
  <td>${newArtistName}</td>
  <td>${newTrackDuration}</td>
  <td></td>`
  tracklistTable.appendChild(newRow)
}

function clearValues() {
  let newTrackNumber = document.getElementById("track-number-modal").value
  let newTrackTitle = document.getElementById("track-title-modal").value
  let newArtistName = document.getElementById("artist-name-modal").value
  let newTrackDuration = document.getElementById("track-duration-modal").value
  newTrackNumber.value = ""
  newTrackTitle.value = ""
  newArtistName.value = ""
  newTrackDuration.value = ""
}

function changeSong() {
  let songHeader = document.getElementById("song-title")
  let td = event.target
  songHeader.innerHTML = td.innerHTML
}
