(() => {
  'use strict';
  const _ = require('cte');
  const {offing, ansing} = {offing: _([]), ansing: _([])};
  module.exports = server => _(server)
  .use(sv => _(new (require('ws').Server)({server : sv})).been
    .on('connection', ws => _(
      offing._.length <= 0
      ? offing.pushR(
        _(ws).been
        .on('message', sdp => _(ws).put({sdp}))
        .send(_(false).json._)
        ._
      )
      : ansing.pushR(
        _(ws).been
        .on('message', m => ansing.lift(u => (
          u.filter(
            w => w !== u.filter(v => v === ws).popR.use(x => x.close())._
          ),
          offing.popL.been.send(m).close()
        )))
        .send(offing._[0].sdp)
        ._
      )).use(a => ws.on('close', m => a.endo($ => $.filter(v => v !== ws))))
    )._
  )
  ._;
})();
