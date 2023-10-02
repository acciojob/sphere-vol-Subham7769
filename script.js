function volume_sphere() {
    // Get the input values from the form
    let radius = parseFloat(document.getElementById("radius").value);
    let volume = document.getElementById("volume");

    // Calculate the volume of the sphere
    let sphereVolume = (4 / 3) * Math.PI * Math.pow(radius, 3);

    // Display the calculated volume in the "volume" input field
    volume.value = sphereVolume.toFixed(4); // Rounded to 2 decimal places

    // Prevent the form from submitting
    return false;
}

// Attach the volume_sphere function to the form's onsubmit event
document.getElementById("MyForm").onsubmit = volume_sphere;