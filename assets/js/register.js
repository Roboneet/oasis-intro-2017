
horsey(document.querySelector('#college'), {
	source: function(data, done){
		var items = ['demo', 'pen','apple', 'pinapple','pen'];
		// $.ajax({
		// 	url: '',
		// 	method: 'GET',
		// 	success: function(data){
		// 		items = data
		// 	},
		// 	error: function(xhr, error_message, error_code){
		// 		console.log(error_code,error_message)
		// 	}
		// })
		done(null,[{ list :items.filter(item => {
			return item.indexOf(data.input) !== -1;
		})}])
	}
})



$('.submit').click(function(){
	var form = $('#form2');
	var data = form.serializeArray();

	data_json = data.reduce(function(obj, ele){
		var [key, value] = [ele.name, ele.value];
		
		obj[key] = value;
		return obj
	}, {});

	function getCookie(name) {
		    	var cookieValue = null;
		       if (document.cookie && document.cookie != '') {
		         var cookies = document.cookie.split(';');
		         for (var i = 0; i < cookies.length; i++) {
		         var cookie = jQuery.trim(cookies[i]);
		         // Does this cookie string begin with the name we want?
		         if (cookie.substring(0, name.length + 1) == (name + '=')) {
		             cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
		             break;
		          }
		     }
		   }
		 return cookieValue;
	}

	var csrftoken = getCookie('csrftoken');

	data_JSON.csrfmiddlewaretoken = csrftoken;


	$.ajax({
		url: '',
		data: data_json,
		type: 'POST',
		success: ajax_success,
		error: ajax_error,
	})
})


function ajax_success(json){
	console.log(json);
}

function ajax_error(xhr, error_message , error_code){
	console.log(error_code, error_message);
}