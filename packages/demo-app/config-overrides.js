module.exports = function override(config, env) {
    console.log('\loader', config.module.loaders, 'loader\n');
    console.log('\nOVERRIDE', config && config.module && Array.isArray(config.module.rules), 'OVERRIDE\n');
    if (config && config.module && Array.isArray(config.module.rules)) {
        config.module.rules.push({
            test: /@art-forms\//,
            use: [{ loader: 'ts-loader' }]
        })
    }
    if (config && config.module && Array.isArray(config.module.loaders)) {
        config.module.loaders.push({
            test: /@art-forms\//,
            use: [{ loader: 'ts-loader' }]
        })
    }
    return config;
}