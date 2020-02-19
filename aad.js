(function(hello) {

	hello.init({
		aad: {
			name: 'Azure Active Directory',
			
			oauth: {
				version: 2,
				auth: 'https://login.microsoftonline.com/common/oauth2/v2.0/authorize',
				grant: 'https://login.microsoftonline.com/common/oauth2/v2.0/token'
			},

			// Authorization scopes
			scope: {
				// you can add as many scopes to the mapping as you want here
				profile: 'user.read',
				offline_access: ''
			},

			scope_delim: ' ',

			login: function(p) {
				if (p.qs.response_type === 'code') {
					// Let's set this to an offline access to return a refresh_token
					p.qs.access_type = 'offline_access';
				}
			},

			base: 'https://www.graph.microsoft.com/v1.0/',

			get: {
				me: 'me'
			},

			xhr: function(p) {
				if (p.method === 'post' || p.method === 'put') {
					toJSON(p);
				}
				else if (p.method === 'patch') {
					hello.utils.extend(p.query, p.data);
					p.data = null;
				}

				return true;
			},

			// Don't even try submitting via form.
			// This means no POST operations in <=IE9
			form: false
		}
	});
})(hello);