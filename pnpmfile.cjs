
module.exports = {
  hooks: {
    readPackage(pkg) {
      pkg.scripts = pkg.scripts || {}

      const allowList = ['@parcel/watcher', 'esbuild']
      if (allowList.includes(pkg.name)) {
        return pkg
      }

      delete pkg.scripts.postinstall
      return pkg
    }
  }
}
