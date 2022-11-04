function deleteSong() {
  let td = event.target.parentNode
  let tr = td.parentNode
  tr.parentNode.removeChild(tr)
}
