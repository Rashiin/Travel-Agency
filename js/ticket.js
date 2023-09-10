async function Ticket() {
    $(document).ready(function() {
        var selectedCountry = null; 
        var checkInDate = null;
        var checkOutDate = null; 

        $('#search').keyup(function() {
            $('#result').html('');

            var searchField = $('#search').val();

            // Make a GET request to the REST Countries API
            fetch(`https://restcountries.com/v2/name/${searchField}`)
                .then(response => response.json())
                .then(data => {
                    if (Array.isArray(data)) {
                        data.forEach(country => {
                            var listItem = $('<li>');
                            var image = $('<img>').attr('src', country.flag).css({
                                width: '50px',
                                height: 'auto',
                                marginRight: '10px'
                            });
                            var name = $('<span>').text(country.name);
                            var region = $('<span>').text(country.region);

                            listItem.append(image, name, ' | ', region);

                            listItem.css({
                                marginBottom: '10px',
                                padding: '10px',
                                border: '1px solid #ccc',
                                borderRadius: '5px',
                                backgroundColor: '#fff',
                                display: 'flex',
                                alignItems: 'center',
                                cursor: 'pointer'
                            });

                            listItem.click(function() {
                                selectedCountry = country;
                                alert('Selected Country: ' + selectedCountry.name);
                            });

                            $('#result').append(listItem);
                        });
                    } else {
                    }
                })
                .catch(error => console.error(error));
        });

        // Check-in Date Selection
        $('#checkInDate').datepicker({
            onSelect: function(date) {
                checkInDate = date;
            }
        });

        // Check-out Date Selection
        $('#checkOutDate').datepicker({
            onSelect: function(date) {
                checkOutDate = date;
            }
        });
    });
}


export default Ticket;