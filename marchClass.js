var firstNames = ['George', 'Krysty', 'Leila', 'Myeisha', 'James'];
var lastNames = ['Holthus', 'Sickler', 'Tatby', 'Essex', 'Goedert'];
var favoriteColors = ['blue', 'green', 'maroon', 'yellow', 'pink'];


var me = {
  firstName: 'James',
  lastName: 'Goedert',
  favoriteColor: 'pink'
};

console.log(me.lastName)
console.log(me.favoriteColor)

var firstNames = ['George', 'Krysty', 'Leila', 'Myeisha', 'James','Jane'];
const lastNames = ['Holthus', 'Sickler', 'Tatby', 'Essex', 'Goedert','Doe'];
let favoriteColors = ['blue', 'green', 'maroon', 'yellow', 'pink', 'pink'];
let catNumber = [2, 1, 3, 4, 0, 5];

let tellFavorites = function(first, last, color){
    console.log(first + ' ' + last + "'s favorite color is " + color);
}

for (var i = 0; i < firstNames.length; i++){
  tellFavorites(firstNames[i], lastNames[i], favoriteColors[i]);
  
}
////**
 * 来自张鑫旭:漫谈js自定义事件、DOM/伪DOM自定义事件
 */
var Event = {
    _listeners: {},    
    // 添加
    addEvent: function(type, fn) {
        if (typeof this._listeners[type] === "undefined") {
            this._listeners[type] = [];
        }
        if (typeof fn === "function") {
            this._listeners[type].push(fn);
        }    
        return this;
    },
    // 触发
    fireEvent: function(type) {
        var arrayEvent = this._listeners[type];
        if (arrayEvent instanceof Array) {
            for (var i=0, length=arrayEvent.length; i<length; i+=1) {
                if (typeof arrayEvent[i] === "function") {
                    arrayEvent[i]({ type: type });    
                }
            }
        }    
        return this;
    },
    // 删除:支持删除指定事件或者所有事件
    removeEvent: function(type, fn) {
        var arrayEvent = this._listeners[type];
        if (typeof type === "string" && arrayEvent instanceof Array) {
            if (typeof fn === "function") {
                // 清除当前type类型事件下对应fn方法
                for (var i=0, length=arrayEvent.length; i<length; i+=1){
                    if (arrayEvent[i] === fn){
                        this._listeners[type].splice(i, 1);
                        break;
                    }
                }
            } else {
                // 如果仅仅参数type, 或参数fn邪魔外道，则所有type类型事件清除
                delete this._listeners[type];
            }
        }
        return this;
    }
};

const fn1 = (...args) => {
    console.log('event1 callback !');
}

const fn2 = (...args) => {
    console.log('event2 callback !');
}

// "console" type bind fn1, fn2
Event.addEvent("console", fn1);
Event.addEvent("console", fn2)

// delete fn1
// Eventer.removeEvent('console', fn1);

// delete fn1 & fn2
// Eventer.removeEvent('console');

// trigger "console" type event
Event.fireEvent("console");

var me = {
  firstName: 'Jacob',
  lastName: 'Goedert',
  favoriteColor: 'pink'
};



if(me.lastName == 'Goedert' && me.firstName !== 'James'){
console.log('it is a Goedert but not James');
} else if (me.lastName == 'Sickler'){
  console.log('it is a Sickler');  
} else {
console.log('not sure who this is');  
}
