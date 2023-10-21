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
            <svg onclick="deleteGardenMember(${gardenMember.id})" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-octagon-fill" viewBox="0 0 16 16">
            <path d="M11.46.146A.5.5 0 0 0 11.107 0H4.893a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353L11.46.146zm-6.106 4.5L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"/>
            </svg>
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
        membershipType: $('#membershipType').val(),
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

    