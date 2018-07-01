$(document).ready(function(){
    // contact form

        $('#name').on('focus', () => {
            $('.name').addClass('animate-label');
            $('#name').addClass('animate-input');
        });
        $('#name').on('blur', () => {
            if (!$('#name').val()) {
                $('.name').removeClass('animate-label');
                $('#name').removeClass('animate-input');
            }
        });
    
        $('#email').on('focus', () => {
            $('.email').addClass('animate-label');
            $('#email').addClass('animate-input');
        });
        $('#email').on('blur', () => {
            if (!$('#email').val()) {
                $('.email').removeClass('animate-label');
                $('#email').removeClass('animate-input');
            }
        });
    
        $('#msg').on('focus', () => {
            $('.msg').addClass('animate-label');
            $('#msg').addClass('animate-input');
        });
        $('#msg').on('blur', () => {
            if (!$('#msg').val()) {
                $('.msg').removeClass('animate-label');
                $('#msg').removeClass('animate-input');
            }
        });

});
export default document;