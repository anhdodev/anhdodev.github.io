function createTodo(text) {
    var markUp = '<li class="list-group-item"><input id="todo-checkbox" type="checkbox" value=""><label for="todo-checkbox">' + text + '</label></li>';
    $('.todo-list').append(markUp);
    $('.todo-add').val("");
}

$("#sortable").sortable();
    $("#sortable").disableSelection();

$(document).ready(function () {

    $("#sortable").sortable();
    $("#sortable").disableSelection();



    var checkedItems = $('.todo-list input[type=checkbox]:not(:checked)').length;
    $('#todo-items').html(checkedItems + " ");

    var buttonLightMode = $('body');
    $('.btn-light-mode').click(function (e) {
        e.preventDefault();
        if ($('body').hasClass('dark-mode')) {
            $('body').removeClass('dark-mode');
            $('#todo-icon').attr('src', '/images/icon-sun.svg');
        } else {
            $('body').addClass('dark-mode');
            $('#todo-icon').attr('src', '/images/icon-moon.svg');
        }
    });

    $('.todo-add').keypress(function (e) {
        e.preventDefault;
        if (e.which == 13) {
            var addToList = $(this).val();
            createTodo(addToList);
        }
    });

    $('.todo-list input[type=checkbox]').change(function () {
        if (this.checked) {
            $(this).parent().find('label').addClass('isDone');
        } else {
            $(this).parent().find('label').removeClass('isDone');
        }
        var checkedItems = $('.todo-list input[type=checkbox]:not(:checked)').length;
        $('#todo-items').html(checkedItems + " ");

    })

    $('.todo-list label').click(function (e) {
        e.preventDefault();
    })


    var activeStates = $('.todo-filter a');
    $('#delete-todo').click(function (e) {
        e.preventDefault();
        var completedItems = $('.todo-list input[type=checkbox]');
        $(completedItems).each(function () {
            if ($(this).is(':checked')) {
                $(this).parent().remove();
            }
        })
    });

    $('#all-todo').click(function (e) {
        e.preventDefault();

        $(this).addClass('active');
        $(activeStates).not(this).each(function () {
            $(this).removeClass('active');
        })

        var completedItems = $('.todo-list input[type=checkbox]');
        $(completedItems).each(function () {
            $(this).parent().show();
        })
    });

    $('#active-todo').click(function (e) {
        e.preventDefault();

        $(this).addClass('active');
        $(activeStates).not(this).each(function () {
            $(this).removeClass('active');
        })


        var completedItems = $('.todo-list input[type=checkbox]');
        $(completedItems).each(function () {
            if (!($(this).is(':checked'))) {
                $(this).parent().show();
            } else {
                $(this).parent().hide();
            }
        });
    });

    $('#completed-todo').click(function (e) {
        e.preventDefault();

        $(this).addClass('active');
        $(activeStates).not(this).each(function () {
            $(this).removeClass('active');
        })

        var completedItems = $('.todo-list input[type=checkbox]');
        $(completedItems).each(function () {
            if ($(this).is(':checked')) {
                $(this).parent().show();
            } else {
                $(this).parent().hide();
            }
        })
    });
});
