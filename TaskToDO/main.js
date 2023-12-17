function submitfn() {
    var form = document.getElementById('internApplicationForm');
    var internName = document.getElementById('internName');
    var description = document.getElementById('description');
    var imageUpload = document.getElementById('imageUpload');
    var duration = document.getElementById('duration');
    var q1 = document.querySelector('input[name="q1"]:checked');
    var q2 = document.querySelector('input[name="q2"]:checked');
    var q3 = document.querySelector('input[name="q3"]:checked');

    document.getElementById('nameerror').textContent = '';
    document.getElementById('descerror').textContent = '';
    document.getElementById('durationerror').textContent = '';

    if (!internName.value.trim()) {
        document.getElementById('nameerror').textContent = 'Name is required';
        return;
    }

    if (!description.value.trim()) {
        document.getElementById('descerror').textContent = 'Description is required';
        return;
    }

    if (!imageUpload.value) {
        alert('Please select an image');
        return;
    }

    if (duration.value === '') {
        document.getElementById('durationerror').textContent = 'Duration is required';
        return;
    }

    if (!q1 || !q2 || !q3) {
        alert('Please answer all the questions');
        return;
    }

    // If all validation passed, you can submit the form or perform further actions
    // For example, you can uncomment the line below to submit the form
    // form.submit();

    // For demonstration purposes, let's display the form data in an alert
    var formData = 
        'Intern Name: ' + internName.value + '\n' +
        'Description: ' + description.value + '\n' +
        'Duration: ' + duration.value + '\n' +
        'Role: ' + q1.value + '\n' +
        'Mode of Work: ' + q2.value + '\n' +
        'Type of Work: ' + q3.value;

    alert(formData);
}
