export const cantLoadImg = {
  inserted: function (el, bind) {
    el.onerror = function () {
      el.src = bind.value
    }
  },
}
