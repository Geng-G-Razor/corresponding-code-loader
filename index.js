const loaderUtils = require('loader-utils')
const defaultOptions = {
    merchantReg: new RegExp(/(\{\{__merchant_start__\}\})([\s\S]*)(\{\{__merchant_end__\}\})/gm),
    opsReg: new RegExp(/(\{\{__ops_start__\}\})([\s\S]*)(\{\{__ops_end__\}\})/gm),
}

module.exports = function(source, map) {
    this.cacheable && this.cacheable()
    const options = Object.assign(loaderUtils.getOptions(this), defaultOptions)
    const { merchantReg, opsReg, outputTarget = 'merchant' } = options
    const regResult = opsReg.exec(source)
    if (regResult) {
        if (outputTarget === 'ops') {
            source = source.replace(opsReg, '$2').replace(merchantReg, '')
        } else {
            source = source.replace(merchantReg, '$2').replace(opsReg, '')
        }
    }
    this.callback(null, source, map);
}