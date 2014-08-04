function offset(div){
    $('body').animate({ scrollTop: div.top }, 400, "easeOutExpo");
}

function fixed_menu() {
	var header = $('#header');

	if ($('body').scrollTop() >= 125) {
		header.addClass('small-menu');
		header.removeClass('large-menu');
	} else {
		header.removeClass('small-menu');
		header.addClass('large-menu');
	}
}
 
 
$(function(){
	$('.window').on('click', function(e){
		e.preventDefault();
		var $this = $(this);
	    if ($this.hasClass('inactive')) {
	      	var html = '<div class="large-12 columns"><h2>Diabetes</h2><div><img class="imgs" src="./image/diabetes.jpg" /></div>'
	      	html += '<div class="large-6 columns">';
            html += '<p>La diabetes es una enfermedad en la que los niveles de glucosa (azucar) de la sangre están muy altos. La diabetes es una afección cronica que se desencadena los tejidos. Como resultado, una persona con diabetes no absorbe la glucosa adecuadamente, de modo que esta queda circulando en la sangre (hiperglucemia) y dañando los tejidos con el paso del tiempo. Este deterioro causa complicaciones para la salud potencialmente letales.</p>';
            html += '</div><div class="large-6 columns"><p>cuando el organismo pierde su capacidad de producir suficiente insulina o de utilizarla con eficacia. La insulina es una hormona que se fabrica en el pancreas y que permite que la glucosa de los alimentos pase a las celulas del organismo, en donde se convierte en energia para que funcionen los músculos y </p></div>';
	      	
	      	offset($this.offset());
	      	$this.animate({ height: '+=400px', scrollTop: 0 }, 400, 'easeOutSine', function(){ 
	      		$('.container', this).addClass('animated fadeIn').append(html);
	      		$this.removeClass('inactive').addClass('active');
	       	});

	    } else {
	      	$this.animate({ height: '-=400px' }, 400, 'easeOutSine', function(){ $this.removeClass('active').addClass('inactive'); });
	      	$('.container', this).removeClass('animated fadeIn').empty();
		  	$this.removeClass('active').addClass('inactive');
	    }	
	});

	$(window).scroll(function(e) {
		e.preventDefault();
		fixed_menu();
	});
});