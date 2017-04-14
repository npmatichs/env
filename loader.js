let env = {};

/**
 * Set environment to module.
 * 
 * @param  {Object} _env Environment.
 * @exports {Function}
 */
exports.setEnv = _env => {
	env = _env;
}

/**
 * Get env object.
 * 
 * @exports {Function}
 */
exports.getEnv = () => {
	return env;
}

/**
 * Get value from env file.
 * 
 * @param  {String} key Key env.
 * @param  {String} _default If key don't exists use default instead.
 * @exports {Function}
 */
exports.getValue = (key, _default) => {
	return env[key] ? env[key] : _default;
}