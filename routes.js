exports = module.exports = function(app, passport) {

	var index = require('./routes/index');
	var story = require('./routes/story');

	//front end
	app.get('/', index.index);
	app.get('/updateStory', story.updateStory);
	app.get('/viewStory', story.viewStory);
	app.get('/archive', story.archive);
	app.get('/archiveStory', story.archiveStory);
	app.get('/newStory', story.newStory);

	app.get('/create', story.createStory);

	// app.param('resource', resource.resource);
	
	// app.all('*', require('./views/http/index').http404);
}