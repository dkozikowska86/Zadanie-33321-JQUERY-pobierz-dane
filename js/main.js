$(document).ready(function () {
    $('#pobierz').click(function () {

        // Wariant 1

/*         $.get('https://akademia108.pl/api/ajax/get-post.php')
            .done(function (data) {

                let pId = $('<p></p>').text(`POST ID: ${data.id}`);
                let pUserId = $('<p></p>').text(`USER ID: ${data.userId}`);
                let pTitle = $('<p ></p>').text(`TITLE: ${data.title}`);
                let pBody = $('<p ></p>').text(`BODY: ${data.body}`);
                let jqBody = $('body');
                let hr = $('<hr />');

                jqBody.append(pId);
                jqBody.append(pUserId);
                jqBody.append(pTitle);
                jqBody.append(pBody);
                jqBody.append(hr);
            })

            .fail(function (error) {
                console.error('Błąd: ' + error);
            })
 */


            // Wariant 2
            $.getJSON('https://akademia108.pl/api/ajax/get-post.php')
            .done(function (data) {

                let pId = $('<p></p>').text(`POST ID: ${data.id}`);
                let pUserId = $('<p></p>').text(`USER ID: ${data.userId}`);
                let pTitle = $('<p ></p>').text(`TITLE: ${data.title}`);
                let pBody = $('<p ></p>').text(`BODY: ${data.body}`);
                let jqBody = $('body');
                let hr = $('<hr />');

                jqBody.append(pId);
                jqBody.append(pUserId);
                jqBody.append(pTitle);
                jqBody.append(pBody);
                jqBody.append(hr);
            })

            .fail(function (error) {
                console.error('Błąd: ' + error);
            })
    })
})