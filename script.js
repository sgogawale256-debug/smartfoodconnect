document.getElementById('donorForm')?.addEventListener('submit', function(e){
    e.preventDefault();
    alert('Donation submitted: ' + document.getElementById('foodName').value);
    this.reset();
});

document.getElementById('receiverForm')?.addEventListener('submit', function(e){
    e.preventDefault();
    alert('Request submitted: ' + document.getElementById('foodNeed').value);
    this.reset();
});