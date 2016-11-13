var socket = io.connect();
socket.on('tweet', function (data) {
	$("#tweets").prepend(
		'<li class="list-group-item">' +
			'<div class="post">' +
				'<div class="post-heading">' +
					'<div class="pull-left image">' +
						'<img src="'+data.tweet.user.profile_image_url+'" class="img-circle avatar" alt="user profile image">' +
					'</div>' +
					'<div class="pull-left meta">' +
						'<div class="title h5">' +
							'<a href="https://twitter.com/'+data.tweet.user.screen_name+'"><b>'+data.tweet.user.name +' (@'+data.tweet.user.screen_name+')</b></a>' +
						'</div>' +
						'<h6 class="text-muted time">'+data.tweet.created_at+'</h6>' +
					'</div>' +
				'</div>' +
				'<div class="post-description">' +
					'<p>'+data.tweet.text+'</p>' +
				'</div>' +
			'</div>' +
		'</div>'
	);
});