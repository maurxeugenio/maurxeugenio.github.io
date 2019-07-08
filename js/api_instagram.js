var token = '7238202831.1677ed0.849df20e81f341218a2fddef63132707', // learn how to obtain it below
    userid = 7238202831, // User ID - get it in source HTML of your Instagram profile or look at the next example :)
    num_photos = 6; // how much photos do you want to get

$.ajax({
	url: 'https://api.instagram.com/v1/users/' + userid + '/media/recent', // or /users/self/media/recent for Sandbox
	dataType: 'jsonp',
	type: 'GET',
	data: {access_token: token, count: num_photos},
	success: function(data){

		for( x in data.data ){
            $('.cards').append('<a target="_blank" href="'+ data.data[x].link +'"> '+
            '<div class="card"  title="'+ data.data[x].caption.text + '" '+
            ' style="background: url('+ data.data[x].images.low_resolution.url +') center / cover;">'+
            '<h6 class="legenda"><i class="material-icons">location_on</i>'+ data.data[x].location.name +'</h6></div></a>');
            // data.data[x].images.thumbnail.url - URL of image 150х150
			// data.data[x].images.standard_resolution.url - URL of image 612х612
			// data.data[x].link - Instagram post URL
		}
	},
	error: function(data){
		console.log('erro'); // send the error notifications to console
	}
});


function idade(ano_aniversario, mes_aniversario, dia_aniversario) {
    var d = new Date,
        ano_atual = d.getFullYear(),
        mes_atual = d.getMonth() + 1,
        dia_atual = d.getDate(),

        ano_aniversario = +ano_aniversario,
        mes_aniversario = +mes_aniversario,
        dia_aniversario = +dia_aniversario,

        quantos_anos = ano_atual - ano_aniversario;

    if (mes_atual < mes_aniversario || mes_atual == mes_aniversario && dia_atual < dia_aniversario) {
        quantos_anos--;
    }
    var idate =  quantos_anos < 0 ? 0 : quantos_anos;
    document.getElementById('minha_idade').innerHTML = 'aa';

    }

idade(1997, 02, 26)
