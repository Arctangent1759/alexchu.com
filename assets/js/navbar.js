$('document').ready(function(){
		currfile=window.location.pathname.split('/').pop()
		if (currfile=="")
		{
			currfile=index.html	
		}

		$('body').append("\
		<div class='navbar navbar-fixed-top navbar-inverse'>\
			<div class='navbar-inner'>\
				<a class='brand' style='padding-left:40px;' href=#>Alex Chu</a>\
				<ul class='nav'>\
					<li><a href='index.html'>Home</a></li>\
					<li class='dropdown'>\
						<a href='#' class='dropdown-toggle' data-toggle='dropdown'>Projects<b class='caret'></b></a>\
						<ul class='dropdown-menu'>\
							<li><a href='SixPong/uberpong.html'>ÜberPong</a></li>\
							<li class='divider'></li>\
							<li><a href='projects.html'>Projects Main</a></li>\
						</ul>\
					</li>\
					<li><a href='https://github.com/Arctangent1759'>Github</a></li>\
					<li><a href='bio.html'>Bio</a></li>\
					<li><a href='assets/doc/resume.pdf'>Resumé</a></li>\
					<li class='dropdown'>\
						<a href='#' class='dropdown-toggle' data-toggle='dropdown'>Extras<b class='caret'></b></a>\
						<ul class='dropdown-menu'>\
							<li><a href='writings.html'>Writings</a></li>\
							<li><a href='gallery.html'>Gallery</a></li>\
							<li class='divider'></li>\
							<li><a href='extras.html'>Extras Main</a></li>\
						</ul>\
					</li>\
					<li><a href='contact.html'>Contact</a></li>\
				</ul>\
			</div>\
		</div>\
		")

		$('.nav').children().each(function(){
			$(this).find('a').each(function () {
				if ($(this)[0].href.split('/').pop()==currfile)
				{
					$(this).parent().first().addClass('active')
					if ($(this).parent().parent().parent()[0].getAttribute('class')=='dropdown')
					{
						$(this).parent().parent().parent().addClass('active')
					}
				}
			})
		})
})
