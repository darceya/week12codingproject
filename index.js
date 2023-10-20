const URL_ENDPOINT = 'http://localhost:3001/gardenMembers'

$.get(URL_ENDPOINT).then(data => console.log(data));

$.get(URL_ENDPOINT).then(data => {
    data.map(gardenMember => {
       $('tbody').append(
        $(`
        <tr>
        <td>${gardenMember.id}</td>
        <td>${gardenMember.firstName}</td>
        <td>${gardenMember.lastName}</td>
        <td>${gardenMember.favoritePlant}</td>
        <td>${gardenMember.membershipType}</td>
        <td>
            <button onclick="deleteGardenMember(${gardenMember.id})">Remove</button>
        </td>
        </tr>`)
       )    
    })
})

$('#add').click(function () {
    $.post(URL_ENDPOINT, {
        firstName: $('#firstName').val(),
        lastName: $('#lastName').val(),
        favoritePlant: $('#favoritePlant').val(),
        type: $('#membershipType').val(),
    
    })
})

function deleteGardenMember (id) {

    $.ajax(`${URL_ENDPOINT}/${id}`, {
        method: 'DELETE'
    })
}

function updateGardenMember() {
    let id = $('#updateId').val();
    
        $.ajax(`${URL_ENDPOINT}/${id}`, {
            method: 'PUT', 
            data: {
                firstName: $('#updatefirstName').val(),
                lastName: $('#updatelastName').val(),
                favoritePlant: $('#updatefavoritePlant').val(),
                membershipType: $('#updatemembershipType').val(),
                
            }
        });
    }
    
    $('#updateGardenMember').click(updateGardenMember);

    