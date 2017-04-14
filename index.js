let loader = require('./loader');

/**
 * Get env key or use default value instead
 * 
 * @param  {String} key      Env key.
 * @param  {String|''} _default Default key.
 * @return {String|null}
 * @exports {Function}
 */
module.exports = (key, _default = '') => {
	return loader.getValue(key, _default);
}