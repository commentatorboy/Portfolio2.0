// Get the Sequence element
var sequenceElement = document.getElementById("sequence");

var options = {
  // Place your Sequence options here to override defaults
  // See: https://sequencejs.com/documentation/#options
  keyNavigation: true,
  fadeStepWhenSkipped: false
}

// Launch Sequence on the element, and with the options we specified above
var mySequence = sequence(sequenceElement, options);