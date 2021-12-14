$(() => {

    $('body').prepend(
        $('<div>', { id: 'vore-warning' }).append(
            $('<h4>', { class: 'alert-danger container p-3' }).text('Heads up! This website will contain questionable content and vore.')
        )
    );

});