import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import session from 'express-session';
import filestore from 'session-file-store';
import * as sapper from '@sapper/server';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

polka() // You can also use Express
	.use(
		session({
			store: new (filestore(session))({}),
			secret: 'sapper-my-sample',
			resave: false,
			saveUninitialized: true
		})
	)
	.use(function(req, res, next) {
    console.log('index_loaded', req.session.index_loaded);
    if (typeof req.session.index_loaded === 'undefined') {
        req.session.index_loaded = false;
    }
    next()
	})
	.use(
		// '/my-base-path', // <!-- add this line
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		sapper.middleware({
				session: (req, res) => ({
					index_loaded: req.session.index_loaded
				})
		})
	)
	.listen(PORT, err => {
		if (err) console.log('error', err);
	});
