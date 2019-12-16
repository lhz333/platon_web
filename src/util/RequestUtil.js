import Vue from 'vue';
import { Message } from 'element-ui';
const BaseHost = window.location.href.split("//")[0]+ '//' + window.location.hostname;
export default {
//  测试环境
 GETIMG_URL: BaseHost+'/',
//  生产环境
	// GETIMG_URL: 'https://dj.platon.network/',
	
	message: function(message, type) {
		if(arguments.length === 0) {
			return;
		}
		if(arguments.length === 1) {
			Message({
				showClose: true,
				message: message
			});
			return;
		}
		Message({
			showClose: true,
			message: message,
			type: type
		});
	},
	formatterTimestamp: function(timestamp) {
        if(timestamp !== null) {
            let date = new Date(timestamp);
            return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + "  " + this.prefixIntrger(date.getHours(),2) + ":" + this.prefixIntrger(date.getMinutes(),2) + ":" + this.prefixIntrger(date.getSeconds(),2);
        } else {
            return "";
        }
    },
    formatterTimestampT: function(timestamp) {
        if(timestamp !== null) {
            let date = new Date(timestamp);
            return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
        } else {
            return "";
        }
	},
	formatterTimesDate: function(timestamp) {
        if(timestamp !== null) {
            let date = new Date(timestamp);
            return date.getFullYear() + " / " + (date.getMonth() + 1);
        } else {
            return "";
        }
	},
	formatterTimesDates: function(timestamp) {
        if(timestamp !== null) {
            let date = new Date(timestamp);
            return date.getDate();
        } else {
            return "";
        }
    },
    prefixIntrger:function(num,length){
        return (Array(length).join('0')+num).slice(-length);
    }
}