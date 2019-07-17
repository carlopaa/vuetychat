//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var script = {
    props: {
        brand: {
            type: Object,
            default: function () {
                return {
                    logo: 'https://s.gravatar.com/avatar/8664b2d4aeb798cb642163cce65863e2?s=50',
                    name: 'Vuetychat'
                }
            }
        },

        online: {
            type: Boolean,
            default: false
        },

        onlineMessage: {
            type: String,
            default: 'We\'re online'
        },

        offlineMessage: {
            type: String,
            default: 'Sorry, we\'re offline at the moment'
        }
    },

    methods: {
        close: function close() {
            this.$emit('closed');
        }
    }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
/* server only */
, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  if (typeof shadowMode !== 'boolean') {
    createInjectorSSR = createInjector;
    createInjector = shadowMode;
    shadowMode = false;
  } // Vue.extend constructor export interop.


  var options = typeof script === 'function' ? script.options : script; // render functions

  if (template && template.render) {
    options.render = template.render;
    options.staticRenderFns = template.staticRenderFns;
    options._compiled = true; // functional template

    if (isFunctionalTemplate) {
      options.functional = true;
    }
  } // scopedId


  if (scopeId) {
    options._scopeId = scopeId;
  }

  var hook;

  if (moduleIdentifier) {
    // server build
    hook = function hook(context) {
      // 2.3 injection
      context = context || // cached call
      this.$vnode && this.$vnode.ssrContext || // stateful
      this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
      // 2.2 with runInNewContext: true

      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      } // inject component styles


      if (style) {
        style.call(this, createInjectorSSR(context));
      } // register component module identifier for async chunk inference


      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    }; // used by ssr in case component is cached and beforeCreate
    // never gets called


    options._ssrRegister = hook;
  } else if (style) {
    hook = shadowMode ? function () {
      style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
    } : function (context) {
      style.call(this, createInjector(context));
    };
  }

  if (hook) {
    if (options.functional) {
      // register for functional component in vue file
      var originalRender = options.render;

      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }

  return script;
}

var normalizeComponent_1 = normalizeComponent;

var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function createInjector(context) {
  return function (id, style) {
    return addStyle(id, style);
  };
}
var HEAD;
var styles = {};

function addStyle(id, css) {
  var group = isOldIE ? css.media || 'default' : id;
  var style = styles[group] || (styles[group] = {
    ids: new Set(),
    styles: []
  });

  if (!style.ids.has(id)) {
    style.ids.add(id);
    var code = css.source;

    if (css.map) {
      // https://developer.chrome.com/devtools/docs/javascript-debugging
      // this makes source maps inside style tags work properly in Chrome
      code += '\n/*# sourceURL=' + css.map.sources[0] + ' */'; // http://stackoverflow.com/a/26603875

      code += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + ' */';
    }

    if (!style.element) {
      style.element = document.createElement('style');
      style.element.type = 'text/css';
      if (css.media) { style.element.setAttribute('media', css.media); }

      if (HEAD === undefined) {
        HEAD = document.head || document.getElementsByTagName('head')[0];
      }

      HEAD.appendChild(style.element);
    }

    if ('styleSheet' in style.element) {
      style.styles.push(code);
      style.element.styleSheet.cssText = style.styles.filter(Boolean).join('\n');
    } else {
      var index = style.ids.size - 1;
      var textNode = document.createTextNode(code);
      var nodes = style.element.childNodes;
      if (nodes[index]) { style.element.removeChild(nodes[index]); }
      if (nodes.length) { style.element.insertBefore(textNode, nodes[index]); }else { style.element.appendChild(textNode); }
    }
  }
}

var browser = createInjector;

/* script */
var __vue_script__ = script;

/* template */
var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vuetychat-widget-header"},[_c('img',{staticClass:"vuetychat-widget-logo",attrs:{"src":_vm.brand.logo,"alt":_vm.brand.name}}),_vm._v(" "),(_vm.online)?[_vm._v("\n        "+_vm._s(_vm.onlineMessage)+"\n    ")]:[_vm._v("\n        "+_vm._s(_vm.offlineMessage)+"\n    ")],_vm._v(" "),_c('button',{staticClass:"vuetychat-widget-btn-close",attrs:{"type":"button"},on:{"click":function($event){$event.preventDefault();return _vm.close($event)}}},[_c('svg',{attrs:{"fill":"#fff","xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 212.982 212.982","width":"18","height":"18"}},[_c('path',{attrs:{"d":"M131.804 106.491l75.936-75.936c6.99-6.99 6.99-18.323 0-25.312-6.99-6.99-18.322-6.99-25.312 0L106.491 81.18 30.554 5.242c-6.99-6.99-18.322-6.99-25.312 0-6.989 6.99-6.989 18.323 0 25.312l75.937 75.936-75.937 75.937c-6.989 6.99-6.989 18.323 0 25.312 6.99 6.99 18.322 6.99 25.312 0l75.937-75.937 75.937 75.937c6.989 6.99 18.322 6.99 25.312 0 6.99-6.99 6.99-18.322 0-25.312l-75.936-75.936z","fill-rule":"evenodd","clip-rule":"evenodd"}})])])],2)};
var __vue_staticRenderFns__ = [];

  /* style */
  var __vue_inject_styles__ = function (inject) {
    if (!inject) { return }
    inject("data-v-ddf46844_0", { source: ".vuetychat-widget-header[data-v-ddf46844]{background-color:var(--vuetychat-widget-header-bg-color);color:var(--vuetychat-widget-header-text-color);padding:10px;display:flex;align-items:center;position:relative}.vuetychat-widget-logo[data-v-ddf46844]{border-radius:50%;margin-right:10px}.vuetychat-widget-btn-close[data-v-ddf46844]{position:absolute;right:15px;outline:0;background-color:transparent;border:none;cursor:pointer}", map: undefined, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__ = "data-v-ddf46844";
  /* module identifier */
  var __vue_module_identifier__ = undefined;
  /* functional template */
  var __vue_is_functional_template__ = false;
  /* style inject SSR */
  

  
  var VuetychatHeader = normalizeComponent_1(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    browser,
    undefined
  );

//
//
//
//
//
//
//
//
//
//
//
//
//
//

var script$1 = {
    props: {
        message: Object,

        isSender: {
            type: Boolean,
            default: false
        },

        showSenderAvatar: {
            type: Boolean,
            default: false
        }
    }
};

/* script */
var __vue_script__$1 = script$1;

/* template */
var __vue_render__$1 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vuetychat-message",class:{'vuetychat-message-sent' : _vm.isSender}},[(! _vm.isSender || (_vm.isSender && _vm.showSenderAvatar))?[_c('img',{staticClass:"vuetychat-message-avatar",attrs:{"src":_vm.message.avatar,"alt":_vm.message.sender}})]:_vm._e(),_vm._v(" "),_c('div',{staticClass:"vuetychat-message-body"},[_vm._v("\n        "+_vm._s(_vm.message.text)+"\n    ")])],2)};
var __vue_staticRenderFns__$1 = [];

  /* style */
  var __vue_inject_styles__$1 = function (inject) {
    if (!inject) { return }
    inject("data-v-bbd896c2_0", { source: ".vuetychat-message[data-v-bbd896c2]{display:flex;flex-wrap:wrap;align-items:center;margin:10px 0}.vuetychat-message-sent[data-v-bbd896c2]{flex-direction:row-reverse}.vuetychat-message-sent .vuetychat-message-body[data-v-bbd896c2]{background-color:var(--vuetychat-widget-sent-message-bg-color);color:var(--vuetychat-widget-sent-message-text-color)}.vuetychat-message-avatar[data-v-bbd896c2]{border-radius:50%;width:30px}.vuetychat-message-body[data-v-bbd896c2]{background-color:var(--vuetychat-widget-received-message-bg-color);color:var(--vuetychat-widget-received-message-text-color);padding:10px;border-radius:5px;margin:0 10px;max-width:75%;line-height:1.5}", map: undefined, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__$1 = "data-v-bbd896c2";
  /* module identifier */
  var __vue_module_identifier__$1 = undefined;
  /* functional template */
  var __vue_is_functional_template__$1 = false;
  /* style inject SSR */
  

  
  var Message = normalizeComponent_1(
    { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
    __vue_inject_styles__$1,
    __vue_script__$1,
    __vue_scope_id__$1,
    __vue_is_functional_template__$1,
    __vue_module_identifier__$1,
    browser,
    undefined
  );

//
//
//
//
//
//
//
//
//
//
//

var script$2 = {
    props: {
        user: Object
    },

    computed: {
        show: function show() {
            return ! this.isEmpty(this.user);
        }
    },

    methods: {
        isEmpty: function isEmpty(object) {
            for (var key in object) {
                if (object.hasOwnProperty(key)) {
                    return false;
                }
            }

            return true;
        }
    }
};

/* script */
var __vue_script__$2 = script$2;

/* template */
var __vue_render__$2 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.show)?_c('div',{staticClass:"vuetychat-user-typing"},[(_vm.user.avatar)?_c('img',{staticClass:"vuetychat-user-typing-avatar",attrs:{"src":_vm.user.avatar}}):_vm._e(),_vm._v(" "),_c('div',{staticClass:"vuetychat-user-typing-indicator",class:{'has-avatar' : _vm.user.avatar}},[_c('span'),_vm._v(" "),_c('span'),_vm._v(" "),_c('span')])]):_vm._e()};
var __vue_staticRenderFns__$2 = [];

  /* style */
  var __vue_inject_styles__$2 = function (inject) {
    if (!inject) { return }
    inject("data-v-eacc73c0_0", { source: ".vuetychat-user-typing[data-v-eacc73c0]{margin:10px 0;display:flex;flex-wrap:wrap;align-items:center}.vuetychat-user-typing-avatar[data-v-eacc73c0]{border-radius:50%;width:30px}.vuetychat-user-typing-indicator[data-v-eacc73c0]{background-color:var(--vuetychat-widget-received-message-bg-color);display:inline-block;padding:10px;border-radius:5px;margin-left:40px;display:flex}.vuetychat-user-typing-indicator.has-avatar[data-v-eacc73c0]{margin-left:10px}.vuetychat-user-typing-indicator>span[data-v-eacc73c0]{display:block;width:10px;height:10px;border-radius:50%;background-color:#999;margin-right:5px;animation:typing-data-v-eacc73c0 infinite 1.7s}.vuetychat-user-typing-indicator>span[data-v-eacc73c0]:first-child{animation-delay:-1s}.vuetychat-user-typing-indicator>span[data-v-eacc73c0]:nth-child(2){animation-delay:.8s}.vuetychat-user-typing-indicator>span[data-v-eacc73c0]:last-child{margin-right:0;animation-delay:.6s}@keyframes typing-data-v-eacc73c0{10%{transform:translateY(-5px);background-color:#888}50%{transform:translateY(0);background-color:#999}}", map: undefined, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__$2 = "data-v-eacc73c0";
  /* module identifier */
  var __vue_module_identifier__$2 = undefined;
  /* functional template */
  var __vue_is_functional_template__$2 = false;
  /* style inject SSR */
  

  
  var MessageTyping = normalizeComponent_1(
    { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
    __vue_inject_styles__$2,
    __vue_script__$2,
    __vue_scope_id__$2,
    __vue_is_functional_template__$2,
    __vue_module_identifier__$2,
    browser,
    undefined
  );

//

var script$3 = {
    components: {
        Message: Message,
        MessageTyping: MessageTyping
    },

    props: {
        messages: {
            type: Array,
            default: function () {
                return [];
            }
        },

        userTyping: Object,
        sender: Object
    },

    methods: {
        scrollToBottom: function scrollToBottom() {
            this.$el.scrollTop = this.$el.scrollHeight;
        },

        isSender: function isSender(sender) {
            return this.sender.id === sender;
        }
    }
};

/* script */
var __vue_script__$3 = script$3;

/* template */
var __vue_render__$3 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vuetychat-messages"},[_vm._l((_vm.messages),function(message){return _c('message',{key:message.id,attrs:{"message":message,"is-sender":_vm.isSender(message.sender)}})}),_vm._v(" "),_c('message-typing',{attrs:{"user":_vm.userTyping}})],2)};
var __vue_staticRenderFns__$3 = [];

  /* style */
  var __vue_inject_styles__$3 = function (inject) {
    if (!inject) { return }
    inject("data-v-24815c14_0", { source: ".vuetychat-messages[data-v-24815c14]{padding:15px;overflow-y:auto;height:76.5%}", map: undefined, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__$3 = "data-v-24815c14";
  /* module identifier */
  var __vue_module_identifier__$3 = undefined;
  /* functional template */
  var __vue_is_functional_template__$3 = false;
  /* style inject SSR */
  

  
  var VuetychatMessages = normalizeComponent_1(
    { render: __vue_render__$3, staticRenderFns: __vue_staticRenderFns__$3 },
    __vue_inject_styles__$3,
    __vue_script__$3,
    __vue_scope_id__$3,
    __vue_is_functional_template__$3,
    __vue_module_identifier__$3,
    browser,
    undefined
  );

//
//
//
//
//
//
//
//
//
//
//

var script$4 = {
    props: {
        isOpen: {
            type: Boolean,
            default: false
        }
    },

    methods: {
        toggle: function toggle() {
            this.$emit('toggled');
        }
    }
};

/* script */
var __vue_script__$4 = script$4;

/* template */
var __vue_render__$4 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"vuetychat-widget-launcher",attrs:{"type":"button"},on:{"click":function($event){$event.preventDefault();return _vm.toggle($event)}}},[_c('transition',{attrs:{"name":"vuetychat-widget-toggle"}},[(_vm.isOpen)?_c('svg',{staticClass:"icon",attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 212.982 212.982","width":"25","height":"25"}},[_c('path',{attrs:{"d":"M131.804 106.491l75.936-75.936c6.99-6.99 6.99-18.323 0-25.312-6.99-6.99-18.322-6.99-25.312 0L106.491 81.18 30.554 5.242c-6.99-6.99-18.322-6.99-25.312 0-6.989 6.99-6.989 18.323 0 25.312l75.937 75.936-75.937 75.937c-6.989 6.99-6.989 18.323 0 25.312 6.99 6.99 18.322 6.99 25.312 0l75.937-75.937 75.937 75.937c6.989 6.99 18.322 6.99 25.312 0 6.99-6.99 6.99-18.322 0-25.312l-75.936-75.936z","fill-rule":"evenodd","clip-rule":"evenodd"}})]):_vm._e()]),_vm._v(" "),_c('transition',{attrs:{"name":"vuetychat-widget-toggle"}},[(! _vm.isOpen)?_c('svg',{staticClass:"icon",attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"25","height":"25","viewBox":"0 0 510 510"}},[_c('path',{attrs:{"d":"M459 0H51C22.95 0 0 22.95 0 51v459l102-102h357c28.05 0 51-22.95 51-51V51c0-28.05-22.95-51-51-51z"}})]):_vm._e()])],1)};
var __vue_staticRenderFns__$4 = [];

  /* style */
  var __vue_inject_styles__$4 = function (inject) {
    if (!inject) { return }
    inject("data-v-25418418_0", { source: ".vuetychat-widget-launcher{position:fixed;bottom:25px;right:25px;width:60px;height:60px;background-color:var(--vuetychat-widget-launcher-bg-color);border-radius:50%;display:flex;align-items:center;justify-content:center;border:none;cursor:pointer;box-shadow:0 2px 4px 0 rgba(0,0,0,.1);z-index:999}.vuetychat-widget-launcher:focus{outline:0}.vuetychat-widget-launcher .icon{position:absolute;fill:var(--vuetychat-widget-launcher-text-color)}.vuetychat-widget-toggle-enter,.vuetychat-widget-toggle-leave-to{transform:rotate(-90deg);opacity:0}.vuetychat-widget-toggle-enter-to,.vuetychat-widget-toggle-leave{transform:rotate(0);opacity:1}.vuetychat-widget-toggle-enter-active,.vuetychat-widget-toggle-leave-active{transition:all ease-in-out .2s}", map: undefined, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__$4 = undefined;
  /* module identifier */
  var __vue_module_identifier__$4 = undefined;
  /* functional template */
  var __vue_is_functional_template__$4 = false;
  /* style inject SSR */
  

  
  var VuetychatLauncher = normalizeComponent_1(
    { render: __vue_render__$4, staticRenderFns: __vue_staticRenderFns__$4 },
    __vue_inject_styles__$4,
    __vue_script__$4,
    __vue_scope_id__$4,
    __vue_is_functional_template__$4,
    __vue_module_identifier__$4,
    browser,
    undefined
  );

//
//
//
//
//
//
//
//
//
//
//
//

var script$5 = {
    props: {
        placeholder: {
            type: String,
            default: 'Write a reply'
        }
    },

    data: function data() {
        return {
            input: ''
        }
    },

    methods: {
        update: function update(event) {
            this.updatePlaceholder(this.input = event.target.innerText);
            this.$emit('typing', this.input);
        },

        cleanText: function cleanText(text) {
            return text.replace(/[\s/]/g, '');
        },

        updatePlaceholder: function updatePlaceholder(input) {
            if (this.cleanText(input).length) {
                return this.$refs.vuetyChatInput.setAttribute('placeholder', '');
            }

            this.clear();
        },

        handleMessage: function handleMessage(event) {
            if (event.keyCode === 13 && ! event.shiftKey && screen.width > 449) {
                event.preventDefault();

                this.submit();
            }
        },

        submit: function submit() {
            this.$emit('submitted', this.input);
            this.clear();
        },

        clear: function clear() {
            this.input = '';
            this.$refs.vuetyChatInput.innerText = '';
            this.$refs.vuetyChatInput.setAttribute('placeholder', this.placeholder);
        }
    }
};

/* script */
var __vue_script__$5 = script$5;

/* template */
var __vue_render__$5 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('form',{staticClass:"vuetychat-reply-form",on:{"submit":function($event){$event.preventDefault();return _vm.submit($event)},"keydown":_vm.handleMessage}},[_c('div',{ref:"vuetyChatInput",staticClass:"vuetychat-textarea",attrs:{"contenteditable":"true","placeholder":_vm.placeholder},on:{"input":_vm.update}}),_vm._v(" "),_c('button',{staticClass:"btn-vuetychat",attrs:{"type":"submit"}},[_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 448.011 448.011","width":"20","height":"20"}},[_c('path',{attrs:{"d":"M438.731 209.463l-416-192c-6.624-3.008-14.528-1.216-19.136 4.48a15.911 15.911 0 0 0-.384 19.648l136.8 182.4-136.8 182.4c-4.416 5.856-4.256 13.984.352 19.648 3.104 3.872 7.744 5.952 12.448 5.952 2.272 0 4.544-.48 6.688-1.472l416-192c5.696-2.624 9.312-8.288 9.312-14.528s-3.616-11.904-9.28-14.528z","fill":"#777"}})])])])};
var __vue_staticRenderFns__$5 = [];

  /* style */
  var __vue_inject_styles__$5 = function (inject) {
    if (!inject) { return }
    inject("data-v-f446701a_0", { source: ".vuetychat-reply-form[data-v-f446701a]{padding:15px;background-color:#fff;color:#333;width:100%;position:absolute;bottom:0;left:0;display:flex;flex-wrap:wrap;box-sizing:border-box}.vuetychat-textarea[data-v-f446701a]{padding:10px;width:100%;max-height:120px;border-radius:5px;flex:1;overflow-y:auto;margin-right:10px}.vuetychat-textarea[data-v-f446701a]::after{content:attr(placeholder);color:#aaa}.vuetychat-textarea[data-v-f446701a]:focus{outline:0}.btn-vuetychat[data-v-f446701a]{background-color:transparent;border:none;display:flex;align-items:center}.btn-vuetychat[data-v-f446701a]:focus{outline:0}", map: undefined, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__$5 = "data-v-f446701a";
  /* module identifier */
  var __vue_module_identifier__$5 = undefined;
  /* functional template */
  var __vue_is_functional_template__$5 = false;
  /* style inject SSR */
  

  
  var VuetychatReplyForm = normalizeComponent_1(
    { render: __vue_render__$5, staticRenderFns: __vue_staticRenderFns__$5 },
    __vue_inject_styles__$5,
    __vue_script__$5,
    __vue_scope_id__$5,
    __vue_is_functional_template__$5,
    __vue_module_identifier__$5,
    browser,
    undefined
  );

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var script$6 = {
    props: {
        processing: {
            type: Boolean,
            default: false
        }
    },

    data: function data() {
        return {
            form: {
                name: null,
                email: null
            }
        }
    },

    methods: {
        store: function store() {
            if (! this.form.name || ! this.form.email) {
                return;
            }

            this.$emit('submitted', this.form);
        }
    }
};

/* script */
var __vue_script__$6 = script$6;

/* template */
var __vue_render__$6 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('form',{staticClass:"vuetychat-form-details",attrs:{"action":"/","method":"post"},on:{"submit":function($event){$event.preventDefault();return _vm.store($event)}}},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.form.name),expression:"form.name"}],staticClass:"vuetychat-form-input",attrs:{"type":"text","placeholder":"Your name"},domProps:{"value":(_vm.form.name)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.form, "name", $event.target.value);}}}),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.form.email),expression:"form.email"}],staticClass:"vuetychat-form-input",attrs:{"type":"email","placeholder":"Your email address"},domProps:{"value":(_vm.form.email)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.form, "email", $event.target.value);}}}),_vm._v(" "),_c('button',{staticClass:"vuetychat-btn",attrs:{"type":"submit","disabled":_vm.processing}},[(_vm.processing)?[_vm._v("\n            Processing\n        ")]:[_vm._v("\n            Start Chat\n        ")]],2)])};
var __vue_staticRenderFns__$6 = [];

  /* style */
  var __vue_inject_styles__$6 = function (inject) {
    if (!inject) { return }
    inject("data-v-b5aedcfc_0", { source: ".vuetychat-form-details[data-v-b5aedcfc]{margin:10px;padding:10px;background-color:#fff;@apply .rounded;}.vuetychat-form-input[data-v-b5aedcfc]{display:block;width:100%;background-color:#f1f5f8;color:#3d4852;border-width:2px;border-radius:.25rem;padding:.75rem 1rem;margin-bottom:1rem;line-height:1.25}.vuetychat-btn[data-v-b5aedcfc]{text-decoration:none;display:inline-block;padding:1rem 2.5rem;color:#3d4852;border-radius:.25rem;background-color:var(--vuetychat-widget-btn-bg-color);color:var(--vuetychat-widget-btn-text-color);outline:0;transition:ease-in-out all .2s}.vuetychat-btn[data-v-b5aedcfc]:disabled{background-color:#b8c2cc;color:#606f7b}", map: undefined, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__$6 = "data-v-b5aedcfc";
  /* module identifier */
  var __vue_module_identifier__$6 = undefined;
  /* functional template */
  var __vue_is_functional_template__$6 = false;
  /* style inject SSR */
  

  
  var VuetychatFormDetails = normalizeComponent_1(
    { render: __vue_render__$6, staticRenderFns: __vue_staticRenderFns__$6 },
    __vue_inject_styles__$6,
    __vue_script__$6,
    __vue_scope_id__$6,
    __vue_is_functional_template__$6,
    __vue_module_identifier__$6,
    browser,
    undefined
  );

//

var script$7 = {
    components: {
        VuetychatHeader: VuetychatHeader,
        VuetychatMessages: VuetychatMessages,
        VuetychatLauncher: VuetychatLauncher,
        VuetychatReplyForm: VuetychatReplyForm,
        VuetychatFormDetails: VuetychatFormDetails
    },

    props: {
        colors: {
            type: Object,
            default: function () {
                return {
                    header: {
                        bg: '#245adb',
                        text: "#fff"
                    },

                    receivedMessage: {
                        bg: '#dadada',
                        text: '#111'
                    },

                    sentMessage: {
                        bg: '#245adb',
                        text: '#fff'
                    },

                    launcher: {
                        bg: '#245adb',
                        text: '#fff'
                    },

                    button: {
                        bg: '#245adb',
                        text: '#fff'
                    }
                }
            }
        },

        showFormDetails: {
            type: Boolean,
            default: false
        },

        sender: Object,
        onlineMessage: String,
        offlineMessage: String,
        messages: Array,
        userTyping: Object,
        brand: Object,
        online: Boolean,
        processingFormDetails: Boolean
    },

    watch: {
        messages: function messages() {
            this.scrollMessagesToBottom();
        }
    },

    data: function data() {
        return {
            isOpen: false
        }
    },

    computed: {
        styles: function styles() {
            return {
                '--vuetychat-widget-header-bg-color': this.colors.header.bg,
                '--vuetychat-widget-header-text-color': this.colors.header.text,
                '--vuetychat-widget-sent-message-bg-color': this.colors.sentMessage.bg,
                '--vuetychat-widget-sent-message-text-color': this.colors.sentMessage.text,
                '--vuetychat-widget-received-message-bg-color': this.colors.receivedMessage.bg,
                '--vuetychat-widget-received-message-text-color': this.colors.receivedMessage.text,
                '--vuetychat-widget-launcher-bg-color': this.colors.launcher.bg,
                '--vuetychat-widget-launcher-text-color': this.colors.launcher.text,
                '--vuetychat-widget-btn-bg-color': this.colors.button.bg,
                '--vuetychat-widget-btn-text-color': this.colors.button.text
            }
        }
    },

    mounted: function mounted() {
        var this$1 = this;

        this.$on('opened', function () { return this$1.setOverflow(true); });
        this.$on('closed', function () { return this$1.setOverflow(false); });
    },

    methods: {
        onToggle: function onToggle() {
            this.isOpen = ! this.isOpen;

            if (this.isOpen) {
                this.scrollMessagesToBottom();

                return this.$emit('opened');
            }

            return this.$emit('closed');
        },

        onSubmit: function onSubmit(input) {
            if (! input) {
                return;
            }

            this.$emit('submitted', input);
        },

        onTyping: function onTyping(input) {
            this.$emit('typing', input);
        },

        setOverflow: function setOverflow(hidden) {
            var body = document.body;

            if (screen.width > 449) {
                return;
            }

            return hidden ? body.setAttribute('style', 'overflow: hidden;') : body.removeAttribute('style');
        },

        onFormDetailsSubmitted: function onFormDetailsSubmitted(form) {
            this.$emit('form-details:submitted', form);
        },

        scrollMessagesToBottom: function scrollMessagesToBottom() {
            var this$1 = this;

            if (this.showFormDetails) {
                return;
            }

            return setTimeout(function () { return this$1.$refs.vuetyChatMessages.scrollToBottom(); }, 1);
        }
    }
};

/* script */
var __vue_script__$7 = script$7;

/* template */
var __vue_render__$7 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{style:(_vm.styles)},[_c('transition',{attrs:{"name":"fadeUp"}},[(_vm.isOpen)?_c('div',{staticClass:"vuetychat-widget",class:{'messages-is-visible' : ! this.showFormDetails}},[_c('vuetychat-header',{attrs:{"brand":_vm.brand,"online":_vm.online,"online-message":_vm.onlineMessage,"offline-message":_vm.offlineMessage},on:{"closed":_vm.onToggle}}),_vm._v(" "),(_vm.showFormDetails)?_c('vuetychat-form-details',{attrs:{"processing":_vm.processingFormDetails},on:{"submitted":_vm.onFormDetailsSubmitted}}):[_c('vuetychat-messages',{ref:"vuetyChatMessages",attrs:{"messages":_vm.messages,"sender":_vm.sender,"user-typing":_vm.userTyping}}),_vm._v(" "),_c('vuetychat-reply-form',{ref:"replyForm",on:{"submitted":_vm.onSubmit,"typing":_vm.onTyping}})]],2):_vm._e()]),_vm._v(" "),_c('vuetychat-launcher',{attrs:{"is-open":_vm.isOpen},on:{"toggled":_vm.onToggle}})],1)};
var __vue_staticRenderFns__$7 = [];

  /* style */
  var __vue_inject_styles__$7 = function (inject) {
    if (!inject) { return }
    inject("data-v-680afd5f_0", { source: ".overflow-x[data-v-680afd5f]{overflow:hidden!important}.vuetychat-widget[data-v-680afd5f]{z-index:9999;width:370px;max-width:590px;position:fixed;right:25px;bottom:100px;box-sizing:border-box;background-color:#f5f5f5;border-radius:5px;box-shadow:0 2px 4px 0 rgba(0,0,0,.1);overflow:hidden}@media screen and (max-width:450px){.vuetychat-widget[data-v-680afd5f]{width:100%;height:100%!important;max-height:100%;left:0;top:0;border-radius:0;z-index:9999}}.vuetychat-widget.messages-is-visible[data-v-680afd5f]{height:calc(100% - 200px)}.fadeUp-enter[data-v-680afd5f],.fadeUp-leave-to[data-v-680afd5f]{transform:translateY(20px);opacity:0}.fadeUp-enter-to[data-v-680afd5f],.fadeUp-leave[data-v-680afd5f]{transform:translateY(0);opacity:1}.fadeUp-enter-active[data-v-680afd5f],.fadeUp-leave-active[data-v-680afd5f]{transition:all ease-in-out .2s}", map: undefined, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__$7 = "data-v-680afd5f";
  /* module identifier */
  var __vue_module_identifier__$7 = undefined;
  /* functional template */
  var __vue_is_functional_template__$7 = false;
  /* style inject SSR */
  

  
  var VuetychatWidget = normalizeComponent_1(
    { render: __vue_render__$7, staticRenderFns: __vue_staticRenderFns__$7 },
    __vue_inject_styles__$7,
    __vue_script__$7,
    __vue_scope_id__$7,
    __vue_is_functional_template__$7,
    __vue_module_identifier__$7,
    browser,
    undefined
  );

/* eslint-disable import/prefer-default-export */

var components = /*#__PURE__*/Object.freeze({
    VuetychatWidget: VuetychatWidget
});

// Import vue components

// install function executed by Vue.use()
function install(Vue) {
  if (install.installed) { return; }
  install.installed = true;
  Object.keys(components).forEach(function (componentName) {
    Vue.component(componentName, components[componentName]);
  });
}

// Create module definition for Vue.use()
var plugin = {
  install: install,
};

// To auto-install when vue is found
/* global window global */
var GlobalVue = null;
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

export { VuetychatWidget };
