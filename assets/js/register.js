
// var horseyElement = horsey(document.querySelector('#college'), {
// 	source: function(data, done){
// 		var items = ['demo', 'pen','apple', 'pinapple','pen'];
// 		$.ajax({
// 			url: '',
// 			method: 'GET',
// 			success: function(data){
// 				items = data
// 			},
// 			error: function(xhr, error_message, error_code){
// 				console.log(error_code,error_message)
// 			}
// 		})
// 		done(null,[{ list :items.filter(item => {
// 			return item.indexOf(data.input) !== -1;
// 		})}])
// 	}
// })

// /*= android issue workaround */
// var jElement = $("#college");
// jElement.keydown(function() {
//     horseyElement.hide();
//     horseyElement.show();
// })


$('.submit').click(function(){
	var form = $('#form2');
	var data = form.serializeArray();

	var data_json = data.reduce(function(obj, ele){
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

	data_json.csrfmiddlewaretoken = csrftoken;


	$.ajax({
		url: './',
		data: data_json,
		type: 'POST',
		success: ajax_success,
		error: ajax_error,
	})
})


function ajax_success(json){
	console.log(json);
	var message;
      if(json.status == 1){
      message = 'Hi '+json['name'] +'!.' + ' You have entered email:'+ json['email'];
    }
      else if(json.status == 2){
        message = 'Enter a valid phone number.';
    }
      else if(json.status == 3){
        message = 'Enter a valid email address.';
    }
    else{
      message = 'Email already registered';
    }

    $('.msg p').text(message);
    $('.msg').fadeIn();
    setTimeout(function(){
    	$('.msg').fadeOut();
    }, 2000)
}

function ajax_error(xhr, error_message , error_code){
	console.log(error_code, error_message);
}

events_colleges_ajax();

function events_colleges_ajax(){

	$.ajax({
		url: './register',
		type: 'GET',
		success: make_list,
		error: function(xhr, error_message, error_code){console.log(error_message)},
	})

}

var college_list = [];	
var event_list = [];		
// show_event_options();   


function make_list(json){
	college_list = get_list_from_string(json['college_list']);
	event_list = get_list_from_string(json['event_list']);
	show_event_options();
}

function get_list_from_string(string){
	var list = [];
	string_pairs = string.match(/"name": "(\S+|$)"/g);
	string_pairs.forEach(function(ele, ind){
		list.push(ele.split('"')[3])
	})
	return list
	
}

function show_event_options(){
	// console.log('called')
	var event_options = '';
	console.log(typeof event_list)
	event_list.forEach(function(ele){
		event_options += '<option>'+ele+'</option>';
	})
	$('#events').html(event_options)
}


function iterate(source, handler){
	
	var value = handler.val();
	
	var options = {
          pre:  ''    
        , post: ''
        , extract: function(ele) {
            return ele;
          }
      };
    var list = fuzzy.filter(value, source, options);
   
	return list
}

function display(list, handler){
	// console.log('called')
	var html = ''
	list.forEach(function(ele){
		html += '<li class="college_name">'+ele.string+'</li>'
	})
	var top = handler.offset().top + handler.height();
	var left = handler.offset().left;
	var width = handler.width();
	
	$('.dropdown').css({'top':top, 'left':left, 'width':width , 'display':'block'})
	$('.dropdown').html('<ul>'+html+'</ul>')


}



$('#college').unbind('keyup').keyup(function(){
	var handler = $(this);
	// console.log(college_list)
	display(iterate(college_list, handler), handler);

})

$('.register_here').scroll(function(){
	// console.log('called')
	$('.dropdown').css('display', 'none');
})

$(window).click(function(e){
	if (e.target.className == 'college_name'){
		
		var text = $(e.target).text();
		$('#college').val(text)
	}else{
		$('.dropdown').css('display', 'none');
	}

})
