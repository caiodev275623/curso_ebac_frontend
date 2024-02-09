$(document).ready(function(){

        $("#task-form").hide();

        $('header button').click(function(){
            $("#task-form").slideToggle();
        });

        $('#task-form').submit(function(event){
            event.preventDefault();
            var tarefaNome = $('#adm-form').val();
            if(tarefaNome.trim() !== ''){

                $('#tarefa-lista').append('<li><span class="tarefa-nome">' + tarefaNome + '</span><span class="tarefa-actions"><button class="complete-btn" type="button">Concluir</button><button class="delete-btn" type="button">Deletar</button></span></li>'); 
                $('#adm-form').val('');
            }
    });

    $(document).on('click', '.complete-btn', function(){
        $(this).closest('li').find('.tarefa-nome').toggleClass('completed');
    });

    $(document).on('click', '.delete-btn', function(){
        $(this).closest('li').remove();
    })
});