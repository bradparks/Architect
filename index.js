module.exports = function(path) {
  if (path == 'Gates')
  return require('./Combinational/gates')
  if (path == 'Arithmetics')
  return require('./Combinational/arithmetics')
  if (path == 'Connectors')
  return require('./Connectors/transport')
  if (path == 'Base')
  return require('./Sequential/baseblocks')
  if (path == 'IO')
  return require('./Utility/ioManager')
}